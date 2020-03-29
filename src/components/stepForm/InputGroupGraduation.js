import { useRef, useEffect, useState } from 'react'
import { useVibrate, useToggle } from 'react-use'
import MaskedInput from 'react-text-mask'

import { useSharedStep, currentStepIs } from '../../hooks/useSharedStep'
import { useSharedValues } from '../../hooks/useSharedValues'
import goToNext from '../../helpers/goToNext'
import { timers, isInfiniteLoop } from '../../helpers/vibrateTimer'

const InputGroupGraduation = () => {
  const [vibrating, toggleVibrating] = useToggle(false)
  const [optsNextStep, setOptNextStep] = useState({
    inputGroup: [],
  })

  useVibrate(vibrating, timers, isInfiniteLoop)

  const [step, setNextStep] = useSharedStep()
  const [values, setSharedValues] = useSharedValues()
  const inputGroupRefs = {
    graduation: useRef(null),
    dateOfGraduation: useRef(null),
  }

  const assignNewValue = (target) =>
    setSharedValues(Object.assign(values, { [target.name]: target.value }))

  useEffect(() => {
    setOptNextStep({
      inputGroup: [
        () => inputGroupRefs.graduation.current,
        () => inputGroupRefs.dateOfGraduation.current.inputElement,
      ],
      setNextFn: () => setNextStep({ currentStep: 'InputCourse' }),
      vibrateFn: () => toggleVibrating(),
    })

    if (inputGroupRefs.graduation.current) {
      const { current } = inputGroupRefs.graduation
      current.value = values[current.name] || ''
    }

    if (inputGroupRefs.dateOfGraduation.current) {
      const { current } = inputGroupRefs.dateOfGraduation
      current.inputElement.value = values[current.inputElement.name] || ''
    }
  }, [step])

  return (
    currentStepIs('InputGroupGraduation', step) && (
      <>
        <div>
          <h1>Precisamos saber sobre a sua graduação</h1>
        </div>
        <div>
          <div>
            <label htmlFor="graduation">Nome da sua graduação</label>
            <input
              ref={inputGroupRefs.graduation}
              onChange={({ currentTarget }) => assignNewValue(currentTarget)}
              autoComplete="off"
              autoFocus
              type="text"
              name="graduation"
              placeholder="escreva sua graduação"
            />
            <strong className="hasError">
              Isso é importante para o seu certificado!
            </strong>
          </div>
          <div>
            <label htmlFor="dateOfGraduation">Quando eu colei grau</label>
            <MaskedInput
              ref={inputGroupRefs.dateOfGraduation}
              onChange={({ currentTarget }) => assignNewValue(currentTarget)}
              autoComplete="off"
              name="dateOfGraduation"
              placeholder="dia/mês/ano"
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            />
            <strong className="hasError">Precisamos saber essa data!</strong>
          </div>
        </div>
        <div>
          <button
            className="prev"
            onClick={() => setNextStep({ currentStep: 'InputFullAddress' })}
          >
            Voltar
          </button>
          <button className="next" onClick={goToNext(optsNextStep)}>
            Ultimos passos...
          </button>
        </div>
      </>
    )
  )
}

export default InputGroupGraduation