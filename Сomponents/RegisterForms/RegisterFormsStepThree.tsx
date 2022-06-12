import React, { useState } from "react"
import { Button, CheckboxGroup, Input, Select } from "UI"

import s from "../../styles/pages/register-page.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface RegisterFormStepThreeProps {
  setStep: (step: number) => void
  setShowModal: (showModal: boolean) => void
}

export const RegisterFormsStepThree: React.FC<RegisterFormStepThreeProps> = (
  props,
) => {
  const { setStep, setShowModal } = props
  const [taxOfficeDirectorate, setTaxOfficeDirectorate] = useState<string>("")
  const [companyLegalName, setCompanyLegalName] = useState<string>("")

  const handleClickApply = () => {
    setShowModal(true)
    setStep(1)
  }

  return (
    <form className={s.step_three}>
      <h1>
        Step <span>02</span>
      </h1>
      <Select
        className={s.select}
        placeholder="Commercial Registry Number (Optional)"
        values={items}
        onChange={() => {
          return
        }}
      />
      <Select
        className={s.select}
        placeholder="Tax office Province"
        onChange={() => {
          return
        }}
        values={items}
      />
      <div className={s.blank}></div>
      <Input
        value={taxOfficeDirectorate}
        setValue={setTaxOfficeDirectorate}
        label=""
        placeholder="Tax Office Directorate"
      />
      <div className={s.blank}></div>
      <Input
        value={companyLegalName}
        setValue={setCompanyLegalName}
        label=""
        placeholder="Company Legal Name"
      />
      <div className={s.blank}></div>
      <Button onClick={handleClickApply}>Apply</Button>

      <CheckboxGroup
        className={s.checkboxes}
        labels={[
          ` Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
          ` Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
        ]}
      />
    </form>
  )
}
