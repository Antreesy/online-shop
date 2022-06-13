import { useState } from "react"
import cn from "classnames"

import { Button, Icon, Input } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const Step1: React.FC<StepProps> = (props) => {
  const [value, setValue] = useState<string>("")
  const { currentStep, setCurrentStep } = props
  return (
    <div className={cn(s.step_one, { [s.disabled]: currentStep !== 0 })}>
      <div className={s.content}>
        <h2>Define Your Brand</h2>
        <div className={s.quote}>
          You must enter the brand name of the product you want to upload in the
          brand column of the product entry excel!
        </div>
        <div className={s.input}>
          <Input
            value={value}
            setValue={setValue}
            variant="gray_outline"
            placeholder="Search for your brand"
            disabled={currentStep !== 0}
          ></Input>
        </div>

        <div className={s.exclamation}>
          <div className={s.icon}>
            <Icon type="exclamation" />
          </div>
          You need to search if your brand is in the system. If the brand you
          are looking for is not found in the system, you can define your brand.
        </div>
      </div>
      <div className={s.button}>
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(1)}
          disabled={currentStep !== 0}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
