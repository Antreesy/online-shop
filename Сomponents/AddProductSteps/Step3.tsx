import { useState } from "react"
import cn from "classnames"

import { Button, FileUpload, Icon, Select } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const Step3: React.FC<StepProps> = (props) => {
  const [file, setFile] = useState<File>()
  const { currentStep, setCurrentStep } = props
  return (
    <div className={cn(s.step_three, { [s.disabled]: currentStep !== 2 })}>
      <div className={s.content}>
        <h2>
          Your Excel <br /> Upload to System
        </h2>
        <Select
          placeholder={"Select Download Type"}
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
          title={"Select Folder"}
          setValue={setFile}
          disabled={currentStep !== 2}
        />

        <div className={s.exclamation}>
          <div className={s.icon}>
            <Icon type="exclamation" />
          </div>
          The file template you want to upload must match the upload type.
        </div>
      </div>
      <div className={s.button}>
        <Button
          variant={"contained"}
          className={s.button}
          onClick={() => setCurrentStep(0)}
          disabled={currentStep !== 2}
        >
          Load
        </Button>
      </div>
    </div>
  )
}
