import { useState, useEffect } from 'react'

import { useSharedStep, currentStepIs } from '../../hooks/useSharedStep'
import { useSharedValues } from '../../hooks/useSharedValues'

const InputChargeValueTax = () => {
  const [step, setNextStep] = useSharedStep()
  const [values, setSharedValues] = useSharedValues()
  const [chargeValueTax, setChargeValueTax] = useState(null)
  const [instalmentPlan] = useState({
    creditCard: {
      max: 12,
      min: 1,
    },
    billet: {
      max: 1,
      min: 1,
    },
  })

  useEffect(() => {
    controlInputValue({
      name: 'chargeValueTax',
      value: {
        instalment: 1,
        value: 18000,
        currency: 180,
      },
    })
  }, []) //oninit

  useEffect(() => {
    if (currentStepIs('InputChargeValueTax', step)) {
      //reset
      const initialChargeTaxValue = {
        instalment: 1,
        value: 18000,
        currency: 180,
      }
      setChargeValueTax(initialChargeTaxValue)
      controlInputValue({
        name: 'chargeValueTax',
        value: initialChargeTaxValue,
      })
    }
  }, [step]) //onstepchange

  const incrementInstalment = (e) => {
    e.preventDefault()

    if (chargeValueTax.instalment < instalmentPlan[values.payMethodTax].max) {
      setChargeValueTax({
        instalment: ++chargeValueTax.instalment,
        value: chargeValueTax.value,
        currency: chargeValueTax.value / 100 / chargeValueTax.instalment,
      })
      controlInputValue({ name: 'chargeValueTax', value: chargeValueTax })
    }
  }

  const decrementInstalment = (e) => {
    e.preventDefault()

    if (chargeValueTax.instalment > instalmentPlan[values.payMethodTax].min) {
      setChargeValueTax({
        instalment: --chargeValueTax.instalment,
        value: chargeValueTax.value,
        currency: chargeValueTax.value / 100 / chargeValueTax.instalment,
      })
      controlInputValue({ name: 'chargeValueTax', value: chargeValueTax })
    }
  }

  const controlInputValue = (target) =>
    setSharedValues(Object.assign(values, { [target.name]: target.value }))

  return (
    currentStepIs('InputChargeValueTax', step) && (
      <>
        <div>
          <h1>Como você deseja pagar a matricula?</h1>
        </div>
        <div>
          <section>
            <strong>
              A <mark>Matricula</mark> por
            </strong>
            {values.payMethodTax === 'creditCard' ? (
              <>
                <button onClick={(e) => incrementInstalment(e)}>
                  &#10092;
                </button>
                <strong>
                  {chargeValueTax?.instalment} x de{' '}
                  <i>{chargeValueTax?.currency.toFixed(2)} reais</i>
                </strong>
                <button onClick={(e) => decrementInstalment(e)}>
                  &#10093;
                </button>
              </>
            ) : (
              <>
                <strong>
                  {chargeValueTax?.instalment} x de{' '}
                  <i>{chargeValueTax?.currency.toFixed(2)} reais</i>
                </strong>
              </>
            )}
          </section>
        </div>
        <div>
          <button
            className="prev"
            onClick={() =>
              setNextStep({
                currentStep: 'InputPayMethodTax',
                progressValue: step.progressValue - 7.69,
              })
            }
          >
            Voltar
          </button>
          <button
            className="next"
            onClick={() =>
              setNextStep({
                currentStep: 'Resume',
                values: values,
                progressValue: step.progressValue + 7.69,
              })
            }
          >
            Assim está bom
          </button>
        </div>

        <style jsx>{`
          div:nth-child(2) {
            flex-direction: column;
          }
          section {
            width: auto;
            display: flex;
            flex-direction: column;
            font-size: 2rem;
            align-items: baseline;
            text-align: left;
            margin-bottom: 40px
          }
          section:last-child {
            margin-bottom: 0;
          }
          section button {
            transform: rotate(90deg);
            padding: 5px;
            font-size: 1.5rem;
            border: 0;
            background: #ffffff;
            color: #292929;
            font-weight: bold;
            cursor: pointer;
            border: 4px solid;
            margin-left: 6px;
          }
          section > strong:first-child {
            margin-bottom: 10px;
          }
          i {
            font-size 1.5rem
          }
          mark {
            padding: 0 10px
          }
          strong {
            font-size: 1.8rem;
          }
        `}</style>
      </>
    )
  )
}

export default InputChargeValueTax
