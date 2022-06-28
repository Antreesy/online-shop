import cn from "classnames"
import { useTranslation } from "next-i18next"

import { Button, Icon } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const StepTwo: React.FC<StepProps> = (props) => {
  const { currentStep, setCurrentStep } = props

  const { t } = useTranslation(["addProduct", "common"])
  return (
    <div className={cn(s.step, { [s.disabled]: currentStep !== 1 })}>
      <div className={s.content}>
        <h3>{t("stepTwo.prepareExcel")}</h3>
        <div className={s.download}>
          <div className={s.icon}>
            <Icon type="download" />
          </div>
          <div>
            <h4>{t("stepTwo.excelEntry")}</h4>
            <p>{t("stepTwo.youCanUploadText")}</p>
          </div>
        </div>
        <div className={s.download}>
          <div className={s.icon}>
            <Icon type="download" />
          </div>
          <div>
            <h4>{t("stepTwo.stockNpriceUpdate")}</h4>
            <p>{t("stepTwo.enteringInfo")}</p>
          </div>
        </div>
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(2)}
          disabled={currentStep !== 1}
        >
          {t("common:continue")}
        </Button>
      </div>
    </div>
  )
}
