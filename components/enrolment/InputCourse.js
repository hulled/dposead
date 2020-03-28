import { useRef, useEffect, useState } from 'react'
import { useVibrate, useToggle, useDebounce } from 'react-use'

import { useSharedStep, currentStepIs } from '../../hooks/useSharedStep'
import { useSharedValues } from '../../hooks/useSharedValues'
import { timers, isInfiniteLoop } from '../../helpers/vibrateTimer'
import goToNext from '../../helpers/goToNext'
import like from '../../helpers/like'

const InputCourse = () => {
  const [step, setNextStep] = useSharedStep()
  const [courses, setCourses] = useState([
    {
      name: 'Administração de negocios',
      area: 'Administração',
      hours: 400,
    },
    {
      name: 'Pedagogia para crianças do segundo grau',
      area: 'Pedagogia',
      hours: 200,
    },
    {
      name: 'Educação fisica nas escolas',
      area: 'Pedagogia',
      hours: 200,
    },
  ])
  const [coursesDesires, setCoursesDesires] = useState([])
  const [typed, setTyped] = useState('')

  const [vibrating, toggleVibrating] = useToggle(false)
  const [optsNextStep, setOptNextStep] = useState()
  const [values, setSharedValues] = useSharedValues()
  const inputRef = useRef(null)

  useVibrate(vibrating, timers, isInfiniteLoop)
  useDebounce(() => similarCourseFrom(typed), 1000, [typed])

  const assignNewValue = (target) =>
    setSharedValues(Object.assign(values, { [target.name]: target.value }))

  const similarCourseFrom = (match) =>
    setCoursesDesires(
      courses
        .filter(({ name, area }) => like(match, name) || like(match, area))
        .splice(0, 2)
        .reverse() //just 2 firsts
    )

  useEffect(() => {
    setOptNextStep({
      inputEl: () => inputRef.current,
      setNextFn: () => setNextStep({ currentStep: 'InputPaymentMethod' }),
      vibrateFn: () => toggleVibrating(),
    })

    //set cache value to input
    if (inputRef.current) {
      inputRef.current.value = values[inputRef.current.name] || ''
    }
  }, [step]) //on open step

  return (
    currentStepIs('InputCourse', step) && (
      <>
        <div>
          <h1>Que curso você deseja iniciar?</h1>
        </div>
        <div>
          <div>
            <textarea
              ref={inputRef}
              name="courseName"
              onChange={({ target: { value } }) => setTyped(value)}
              autoComplete="off"
              autoFocus
            ></textarea>
            <strong className="hasError">Você nem pesquisou o curso!</strong>
          </div>
          {coursesDesires.length > 0 && (
            <div className="result">
              {!values.courseName && (
                <label htmlFor="courseNameSelect">
                  <strong>É algum desses?</strong>
                </label>
              )}
              {values.courseName && (
                <label htmlFor="courseNameSelect">
                  Este é o curso que você deseja estudar
                </label>
              )}
              <select
                ref={inputRef}
                onChange={({ currentTarget }) => assignNewValue(currentTarget)}
                name="courseName"
                id="courseNameSelect"
              >
                <option value="">Escolha aqui...</option>
                {coursesDesires.map((course, i) => (
                  <option key={i} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
              <strong className="hasError">
                Você precisa escolher um curso!
              </strong>
            </div>
          )}
        </div>
        <div>
          <button
            className="prev"
            onClick={() => setNextStep({ currentStep: 'InputGroupGraduation' })}
          >
            Voltar
          </button>
          <button className="next" onClick={goToNext(optsNextStep)}>
            É este que eu quero
          </button>
        </div>

        <style jsx>{`
          div:nth-child(2) textarea.selected {
            color: #ff9800;
            font-weight: bold;
          }
          div.result {
            margin-top: -8px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
          }
          div.result select {
            font-size: 1.3rem;
            width: 100%;
            border: 4px solid #292929;
            background: #fff;
            padding: 5px 0px;
            font-weight: 700;
            border-radius: 6px;
          }
          div.result strong {
            font-size: 2rem;
          }
        `}</style>
      </>
    )
  )
}

export default InputCourse
