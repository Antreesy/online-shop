import cn from "classnames"

import { Button, Icon } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const StepTwo: React.FC<StepProps> = (props) => {
  const { currentStep, setCurrentStep } = props
  return (
    <div className={cn(s.step, { [s.disabled]: currentStep !== 1 })}>
      <div className={s.content}>
        <h3>To Prepare Excel Download Template</h3>
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
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(2)}
          disabled={currentStep !== 1}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
