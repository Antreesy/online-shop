import React, { useState } from "react"
import { Button, Input, Select } from "UI"
import s from "../../styles/pages/register-page.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface RegisterFormStepOneProps{
    setStep: (step: number) => void
}

export const RegisterFormStepOne: React.FC<RegisterFormStepOneProps> = (props) => {
    const {setStep} = props
  const [value, setValue] = useState<string>("")
  const handleClickNextStep = () => setStep(2)
  return (
    <form className={s.step_one}>
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
        value={value}
        setValue={setValue}
        label=""
        placeholder="Tax Number"
      />

      <div className={s.blank}></div>
      <Input
        value={value}
        setValue={setValue}
        label=""
        placeholder="Mersis No (Optional)"
      />

      <div className={s.blank}></div>
      <Button onClick={handleClickNextStep}>Next Step</Button>
    </form>
  )
}
