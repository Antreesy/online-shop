import { useState } from "react"
import cn from "classnames"
import { useTranslation } from "next-i18next"

import { Button, Icon, Input } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const StepOne: React.FC<StepProps> = (props) => {
  const [value, setValue] = useState<string>("")
  const { currentStep, setCurrentStep } = props

  const { t } = useTranslation(["addProduct", "common"])
  return (
    <div className={cn(s.step, { [s.disabled]: currentStep !== 0 })}>
      <div className={s.content}>
        <h3>{t("stepOne.defineYourBrand")}</h3>
        <div className={s.quote}>
          {t("stepOne.youMustEnter")}
        </div>
        <div className={s.input}>
          <Input
            value={value}
            setValue={setValue}
            variant="gray_outline"
            placeholder={t("stepOne.searchForBrandPlaceholder")}
            disabled={currentStep !== 0}
          ></Input>
        </div>

        <div className={s.exclamation}>
          <div className={s.icon}>
            <Icon type="exclamation" />
          </div>
          {t("stepOne.youNeedToSearch")}
        </div>
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(1)}
          disabled={currentStep !== 0}
        >
          {t("common:continue")}
        </Button>
      </div>
    </div>
  )
}
