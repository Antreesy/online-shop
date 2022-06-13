import React from "react"
import { Button, Icon } from "UI"
import s from "styles/pages/account/add-product.module.scss"

interface Step2Props {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
}

export const Step2: React.FC<Step2Props> = (props) => {
  const { currentStep, setCurrentStep } = props
  return (
    <div
      className={currentStep === 0 ? s.step_two + " " + s.disabled : s.step_two}
    >
      <div className={s.content}>
        <h2>To Prepare Excel Download Template</h2>
        <div className={s.download}>
          <div className={s.icon}>
            <Icon type="download" />
          </div>
          <div>
            <h4>Excel Product Entry</h4>
            <p>You can upload products by selecting a category.</p>
          </div>
        </div>
        <div className={s.download}>
          <div className={s.icon}>
            <Icon type="download" />
          </div>
          <div>
            <h4>Stock & Price Update</h4>
            <p>
              Barkod bilgisi girerek fiyat (TSF), üstü çizili fiyat (PSF) ve
              stok bilgileri güncellenebilir
            </p>
          </div>
        </div>
      </div>
      <div className={s.button}>
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(2)}
          disabled={currentStep === 0 ? true : false}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
