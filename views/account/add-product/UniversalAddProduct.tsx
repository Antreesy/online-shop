import { useState } from "react"

import { Button, ProgressBar } from "UI"
import { Step1, Step2, Step3 } from "Сomponents"

import s from "styles/pages/account/add-product.module.scss"

const UniversalAddProduct = () => {
  const steps = [1, 2, 3]
  const [currentStep, setCurrentStep] = useState<number>(0)
  return (
    <>
      <section className={s.main}>
        <div className={s.container}>
          <div className={s.content}>
            <Button
              iconLeft={"arrow_left"}
              variant={"text"}
              className={s.button_back}
            >
              Back
            </Button>
            <div className={s.add_product_header}>
              <ProgressBar steps={steps} currentStep={currentStep} />
              <div>
                <h1>Add product</h1>
                <p>
                  It is very easy to sell the products in your product list in
                  bulk on <span>Ilonsi!</span>
                </p>
              </div>
            </div>

            <div className={s.steps}>
              <Step1
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
              <Step2
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
              <Step3
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UniversalAddProduct
