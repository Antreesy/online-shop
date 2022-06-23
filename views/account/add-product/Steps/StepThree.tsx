import { useState } from "react"
import cn from "classnames"

import { Button, FileUpload, Icon, Select } from "UI"
import { StepProps } from "shared/interfaces/stepProps"

import s from "styles/pages/account/add-product.module.scss"

export const StepThree: React.FC<StepProps> = (props) => {
  const [file, setFile] = useState<File>()
  const { currentStep, setCurrentStep } = props
  return (
    <div className={cn(s.step, { [s.disabled]: currentStep !== 2 })}>
      <div className={s.content}>
        <h3>
          Your Excel <br /> Upload to System
        </h3>
        <Select
          className={s.select}
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
