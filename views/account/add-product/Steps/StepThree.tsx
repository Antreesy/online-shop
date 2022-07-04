import { useState } from "react"
import cn from "classnames"
import { useTranslation } from "next-i18next"

import { Button, FileUpload, Icon, Select } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const StepThree: React.FC<StepProps> = (props) => {
  const [file, setFile] = useState<File>()
  const { currentStep, setCurrentStep } = props

  const { t } = useTranslation(["addproduct", "common"])
  return (
    <div className={cn(s.step, { [s.disabled]: currentStep !== 2 })}>
      <div className={s.content}>
        <h3>
          {t("stepThree.yourExcel")} <br /> {t("stepThree.uploadToSystem")}
        </h3>
        <Select
          className={s.select}
          placeholder={t("stepThree.selectDownloadType")}
          values={[
            { title: "one", value: 1 },
            { title: "two", value: 2 },
            { title: "three", value: 3 },
          ]}
          onChange={() => {
            return
          }}
          isDisabled={currentStep !== 2}
        />
        <FileUpload
          title={t("stepThree.selectFolder")}
          setValue={setFile}
          disabled={currentStep !== 2}
        />

        <div className={s.exclamation}>
          <div className={s.icon}>
            <Icon type="exclamation" />
          </div>
          {t("stepThree.templateMustMatch")}
        </div>
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(0)}
          disabled={currentStep !== 2}
        >
          {t("common:load")}
        </Button>
      </div>
    </div>
  )
}
