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
  setShowModal: (showModal: boolean) => void
}

export const RegisterFormsStepTwo: React.FC<RegisterFormStepTwoProps> = (props) => {
  const { setStep, setShowModal } = props
  const [value, setValue] = useState<string>("")

  const handleClickCreateAccount = () => {
    setStep(1)
    setShowModal(true)
  }
  return (
    <form className={s.step_two}>
      <h4>Create your shop, and get eaaly access</h4>

      <Input value={value} setValue={setValue} label="" placeholder="Name" />

      <div className={s.blank}></div>
      <Input
        value={value}
        setValue={setValue}
        label=""
        placeholder="Email"
        isRequired={false}
      />

      <Select
        className={s.select}
        placeholder="Category"
        items={items}
        onChange={() => {
          return
        }}
      />

      <Input
        value={value}
        setValue={setValue}
        label=""
        placeholder="@Instagram"
      />

      <div className={s.blank}></div>
      <Input
        value={value}
        setValue={setValue}
        label=""
        placeholder="Password"
        isRequired={false}
      />

      <div className={s.blank}></div>
      <div className={s.blank}></div>
      <div className={s.blank}></div>
      <Button onClick={handleClickCreateAccount}>Create Account</Button>

      <p className={s.one}></p>
    </form>
  )
}
