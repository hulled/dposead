import MaskedInput from 'react-text-mask'
import { useRef, useEffect, useState } from 'react'
import { useVibrate, useToggle } from 'react-use'

import { useSharedStep, currentStepIs } from '../../hooks/useSharedStep'
import { useSharedValues } from '../../hooks/useSharedValues'
import { timers, isInfiniteLoop } from '../../helpers/vibrateTimer'
import goToNext from '../../helpers/goToNext'

const InputZip = () => {
  const [vibrating, toggleVibrating] = useToggle(false)
  const [optsNextStep, setOptNextStep] = useState()

  useVibrate(vibrating, timers, isInfiniteLoop)

  const [step, setNextStep] = useSharedStep()
  const [values, setSharedValues] = useSharedValues()
  const inputRef = useRef(null)

  const controlInputValue = (target) =>
    setSharedValues(Object.assign(values, { [target.name]: target.value }))

  useEffect(() => {
    if (!values.hasOwnProperty('address')) {
      setSharedValues(Object.assign(values, { address: {} }))
    }

    setOptNextStep({
      inputEl: () => inputRef.current.inputElement,
      setNextFn: () =>
        setNextStep({
          currentStep: 'InputGroupAddress',
          progressValue: step.progressValue + 7.69,
          values,
        }),
      vibrateFn: () => toggleVibrating(),
    })

    //set cache value to input
    if (inputRef.current && values.address) {
      inputRef.current.inputElement.value =
        values.address[inputRef.current.inputElement.name] || ''
    }
  }, [step]) //on open step

  const onType = () => ({ currentTarget }) => {
    const zipFullLength = 9
    const isCompletedZipValue =
      currentTarget.value.replace(/_/, '').length === zipFullLength

    if (isCompletedZipValue) {
      fetch(
        'https://apps.widenet.com.br/busca-cep/api/cep.json?code=' +
          currentTarget.value
      )
        .then((res) => res.json())
        .then((res) => {
          let inputAddress = {}
          if (res.status === 200) {
            inputAddress = {
              name: 'address',
              value: {
                state: res.state,
                city: res.city,
                zipcode: res.code,
                neighborhood: res.district,
                street: res.address,
              },
            }
          } else {
            inputAddress = {
              name: 'address',
              value: {
                zipcode: currentTarget.value,
              },
            }
          }
          controlInputValue(inputAddress)
        })
    }
  }

  return (
    currentStepIs('InputZip', step) && (
      <>
        <div>
          <h1>Agora vamos agilizar! Digite seu CEP</h1>
        </div>
        <div>
          <div>
            {values.address?.zipcode && (
              <label htmlFor="zipcode">Seu CEP é este</label>
            )}
            <MaskedInput
              ref={inputRef}
              onChange={onType()}
              autoComplete="off"
              autoFocus
              name="zipcode"
              placeholder="escreva o cep..."
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            />
            <strong className="hasError">
              Precisamos saber onde você está!
            </strong>
          </div>
        </div>
        <div>
          <button
            className="prev"
            onClick={() =>
              setNextStep({
                currentStep: 'InputGroupParent',
                progressValue: step.progressValue - 7.69,
                values,
              })
            }
          >
            Voltar
          </button>
          <button className="next" onClick={goToNext(optsNextStep)}>
            Este é o meu CEP
          </button>
        </div>

        <style jsx>{`
          div:nth-child(2) > div {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </>
    )
  )
}

export default InputZip