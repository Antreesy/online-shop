import React, { useState } from "react"
import { Button, FileUpload, Icon, Select } from "UI"
import s from "styles/pages/account/add-product.module.scss"

interface Step3Props {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
}

export const Step3: React.FC<Step3Props> = (props) => {
  const [file, setFile] = useState<File>()
  const { currentStep, setCurrentStep } = props
  return (
    <div
      className={
        currentStep === 0 || currentStep === 1
          ? s.step_three + " " + s.disabled
          : s.step_three
      }
    >
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
          className={
            currentStep === 0 || currentStep === 1 ? s.select_disabled : ""
          }
          isDisabled={currentStep === 0 || currentStep === 1}
        />
        <FileUpload title={"Select Folder"} setValue={setFile} />

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
          disabled={currentStep !== 2 ? true : false}
        >
          Load
        </Button>
      </div>
    </div>
  )
}
