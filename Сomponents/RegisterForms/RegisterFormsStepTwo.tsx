import React, { useState } from "react"
import { Button, Input, Select } from "UI"

import s from "../../styles/pages/register-page.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface RegisterFormStepTwoProps {
  setStep: (step: number) => void
}

export const RegisterFormsStepTwo: React.FC<RegisterFormStepTwoProps> = (
  props,
) => {
  const { setStep } = props
  const [taxNumber, setTaxNumber] = useState<string>("")
  const [mersisNo, setMersisNo] = useState<string>("")

  const handleClickNextStep = () => setStep(3)

  return (
    <form className={s.step_two}>
      <h1>
        Step <span>01</span>
      </h1>

      <Select
        className={s.select}
        placeholder="Sale Category"
        items={items}
        onChange={() => {
          return
        }}
      />

      <Select
        className={s.select}
        placeholder="Company Type"
        items={items}
        onChange={() => {
          return
        }}
      />

      <div className={s.blank}></div>
      <Input
        value={taxNumber}
        setValue={setTaxNumber}
        label=""
        placeholder="Tax Number"
      />

      <div className={s.blank}></div>
      <Input
        value={mersisNo}
        setValue={setMersisNo}
        label=""
        placeholder="Mersis No (Optional)"
      />

      <div className={s.blank}></div>
      <Button onClick={handleClickNextStep}>Next Step</Button>
    </form>
  )
}
