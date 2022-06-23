import React, { useState } from "react"
import { Button, CheckboxGroup, Input, Select } from "UI"

import s from "styles/pages/register.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface StepThreeProps {
  setStep: (step: number) => void
  setShowModal: (showModal: boolean) => void
}

export const StepThree: React.FC<StepThreeProps> = (props) => {
  const { setStep, setShowModal } = props
  const [taxOfficeDirectorate, setTaxOfficeDirectorate] = useState<string>("")
  const [companyLegalName, setCompanyLegalName] = useState<string>("")

  const handleClickApply = () => {
    setShowModal(true)
    setStep(0)
  }

  return (
    <form className={s.step_wrapper}>
      <h4 className={s.caption_step}>
        Step <span>02</span>
      </h4>

      <Select
        className={s.select}
        placeholder="Commercial Registry Number (Optional)"
        values={items}
      />

      <Select
        className={s.select}
        placeholder="Tax office Province"
        values={items}
      />

      <Input
        className={s.input}
        value={taxOfficeDirectorate}
        setValue={setTaxOfficeDirectorate}
        placeholder="Tax Office Directorate"
      />

      <Input
        className={s.input}
        value={companyLegalName}
        setValue={setCompanyLegalName}
        placeholder="Company Legal Name"
      />

      <Button className={s.button} onClick={handleClickApply}>
        Apply
      </Button>

      <CheckboxGroup
        className={s.checkboxes}
        labels={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesqueşartlarını okudum ve kabul ediyorum.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesqueşartlarını okudum ve kabul ediyorum.",
        ]}
      />
    </form>
  )
}
