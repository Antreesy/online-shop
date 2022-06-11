import React, { useState } from "react"
import { Button, Input, Select } from "UI"
import s from "../../styles/pages/register-page.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface RegisterFormStepOneProps {
  setStep: (step: number) => void
}

export const RegisterFormStepOne: React.FC<RegisterFormStepOneProps> = (
  props,
) => {
  const { setStep } = props
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [instagram, setInstagram] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleClickNextStep = () => setStep(2)
  return (
    <form className={s.step_one}>
      <h4>Create your shop, and get eaaly access</h4>

      <Input value={name} setValue={setName} label="" placeholder="Name" />

      <div className={s.blank}></div>
      <Input
        value={email}
        setValue={setEmail}
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
        value={instagram}
        setValue={setInstagram}
        label=""
        placeholder="@Instagram"
      />

      <div className={s.blank}></div>
      <Input
        value={password}
        setValue={setPassword}
        label=""
        placeholder="Password"
        isRequired={false}
      />

      <div className={s.blank}></div>
      <div className={s.blank}></div>
      <div className={s.blank}></div>
      <Button onClick={handleClickNextStep}>Create Account</Button>

      <p className={s.one}></p>
    </form>
  )
}
