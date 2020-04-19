import { useRef, useEffect, useState } from 'react'
import { useVibrate, useToggle, useSessionStorage } from 'react-use'

import goToNext from '../../helpers/goToNext'
import { timers, isInfiniteLoop } from '../../helpers/vibrateTimer'

const InputLead = () => {
  const [vibrating, toggleVibrating] = useToggle(false)
  const [optsNextStep, setOptNextStep] = useState()

  useVibrate(vibrating, timers, isInfiniteLoop)

  const [progressValue] = useSessionStorage('progressValue')
  const [values, setValues] = useSessionStorage('values')
  const [step, setStep] = useSessionStorage('steps', {
    currentStep: 'InputGroupPhone',
    progressValue: progressValue + 7.69,
    values,
  })

  const refGroup = {
    refNameInput: useRef(null),
    refEmailInput: useRef(null),
  }

  const controlInputValue = (target) =>
    setValues(Object.assign(values, { [target.name]: target.value }))

  useEffect(() => {
    setOptNextStep({
      inputGroup: [
        () => ({
          inputEl: refGroup.refNameInput.current,
          validator: () => [
            new RegExp(/^[ ]*(.+[ ]+)+.+[ ]*$/).test(
              refGroup.refNameInput.current.value
            ), //boolean validator
            'invalid-value-error', //class
          ],
        }),
        () => ({
          inputEl: refGroup.refEmailInput.current,
          validator: () => [
            new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(
              refGroup.refEmailInput.current.value
            ), //boolean validator
            'invalid-value-error', //class
          ],
        }),
      ],
      setNextFn: () =>
        setStep({
          currentStep: 'InputGroupPhone',
          progressValue: progressValue + 7.69,
          values,
        }),
      vibrateFn: () => toggleVibrating(),
    })

    //cache values to input refs masked or not
    Object.keys(refGroup).forEach((ref) => {
      if (refGroup[ref].current) {
        const { current } = refGroup[ref]
        current.value = values[current.name] || ''
      }
    })
  }, [step])

  return (
    <>
      <div>
        <h1>Olá, vamos começar!</h1>
      </div>
      <div>
        <div>
          {values.email && (
            <label htmlFor="email">E-mail que você informou</label>
          )}
          <input
            ref={refGroup.refEmailInput}
            onChange={({ currentTarget }) => {
              currentTarget.value = currentTarget.value.toLowerCase()
              controlInputValue(currentTarget)
            }}
            autoComplete="off"
            autoFocus
            type="text"
            placeholder="escreva seu email..."
            name="email"
          />
          <strong className="hasEmptyError">
            Você não adicionou um e-mail!
          </strong>
          <strong className="hasInvalidError">
            Precisa ser um e-mail válido!
          </strong>
        </div>
        <div>
          {values.name && (
            <label htmlFor="dateOfBirth">Nome que você informou</label>
          )}
          <input
            ref={refGroup.refNameInput}
            onChange={({ currentTarget }) => {
              currentTarget.value = currentTarget.value.replace(
                /(?:^|\s)\S/g,
                (word) => word.toUpperCase()
              )
              controlInputValue(currentTarget)
            }}
            autoComplete="off"
            autoFocus
            placeholder="escreva seu nome..."
            type="text"
            name="name"
          />
          <strong className="hasEmptyError">
            Precisamos saber quem é você!
          </strong>
          <strong className="hasInvalidError">
            Tem certeza que este é seu nome completo?
          </strong>
        </div>
      </div>
      <div>
        <button className="next" onClick={goToNext(optsNextStep)}>
          Próximo
        </button>
      </div>
    </>
  )
}

export default InputLead
