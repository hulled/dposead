import { useRef, useEffect, useState } from 'react'
import { useVibrate, useToggle } from 'react-use'
import MaskedInput from 'react-text-mask'

import { useSharedStep, currentStepIs } from '../../hooks/useSharedStep'
import { useSharedValues } from '../../hooks/useSharedValues'
import goToNext from '../../helpers/goToNext'
import { timers, isInfiniteLoop } from '../../helpers/vibrateTimer'

const InputGroupBirth = () => {
  const [vibrating, toggleVibrating] = useToggle(false)
  const [optsNextStep, setOptNextStep] = useState({
    inputGroup: [],
  })

  useVibrate(vibrating, timers, isInfiniteLoop)

  const [step, setNextStep] = useSharedStep()
  const [values, setSharedValues] = useSharedValues()
  const inputGroupRefs = {
    inputStateOfBirthRef: useRef(null),
    inputCityOfBirthRef: useRef(null),
    inputDateOfBirthRef: useRef(null),
  }

  const assignNewValue = (target) =>
    setSharedValues(Object.assign(values, { [target.name]: target.value }))

  useEffect(() => {
    setOptNextStep({
      inputGroup: [
        () => inputGroupRefs.inputStateOfBirthRef.current,
        () => inputGroupRefs.inputCityOfBirthRef.current,
        () => inputGroupRefs.inputDateOfBirthRef.current.inputElement,
      ],
      setNextFn: () => setNextStep({ currentStep: 'InputGroupParent' }),
      vibrateFn: () => toggleVibrating(),
    })

    if (inputGroupRefs.inputStateOfBirthRef.current) {
      const { current } = inputGroupRefs.inputStateOfBirthRef
      current.value = values[current.name] || ''
    }

    if (inputGroupRefs.inputCityOfBirthRef.current) {
      const { current } = inputGroupRefs.inputCityOfBirthRef
      current.value = values[current.name] || ''
    }

    if (inputGroupRefs.inputDateOfBirthRef.current) {
      const { current } = inputGroupRefs.inputDateOfBirthRef
      current.inputElement.value = values[current.inputElement.name] || ''
    }
  }, [step])

  return (
    currentStepIs('InputGroupBirth', step) && (
      <>
        <div>
          <h1>Também necessário para seu certificado</h1>
        </div>
        <div>
          <div>
            {values.stateOfBirth && (
              <label htmlFor="stateOfBirth">O estado que você nasceu</label>
            )}
            <input
              ref={inputGroupRefs.inputStateOfBirthRef}
              onChange={({ currentTarget }) => assignNewValue(currentTarget)}
              autoComplete="off"
              autoFocus
              name="stateOfBirth"
              type="text"
              placeholder="estado que vc nasceu..."
            />
            <strong className="hasError">Faltou o estado aqui!</strong>
          </div>
          <div>
            {values.cityOfBirth && (
              <label htmlFor="cityOfBirth">A cidade que você nasceu</label>
            )}
            <input
              ref={inputGroupRefs.inputCityOfBirthRef}
              onChange={({ currentTarget }) => assignNewValue(currentTarget)}
              type="text"
              name="cityOfBirth"
              placeholder="cidade que vc nasceu..."
            />
            <strong className="hasError">Faltou a cidade aqui!</strong>
          </div>
          <div>
            <label htmlFor="dateOfBirth">Quando você nasceu?</label>
            <MaskedInput
              id="dateOfBirth"
              ref={inputGroupRefs.inputDateOfBirthRef}
              onChange={({ currentTarget }) => assignNewValue(currentTarget)}
              autoComplete="off"
              name="dateOfBirth"
              placeholder="dia/mês/ano"
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            />
            <strong className="hasError">Faltou a quando aqui!</strong>
          </div>
        </div>
        <div>
          <button
            className="prev"
            onClick={() => setNextStep({ currentStep: 'InputGroupDoc' })}
          >
            Voltar
          </button>
          <button className="next" onClick={goToNext(optsNextStep)}>
            Estou indo bem
          </button>
        </div>
      </>
    )
  )
}

export default InputGroupBirth