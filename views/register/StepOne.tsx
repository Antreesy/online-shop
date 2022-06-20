import { useState } from "react"

import { Button, Input, Select } from "UI"

import s from "styles/pages/register.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface StepOneProps {
  setStep: (step: number) => void
}

export const StepOne: React.FC<StepOneProps> = ({ setStep }) => {
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [instagram, setInstagram] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleClickNextStep = () => setStep(2)
  return (
    <form className={s.step_wrapper}>
      <h4 className={s.caption}>Create your shop, and get early access</h4>

      <Input
        className={s.input}
        value={name}
        setValue={setName}
        label=""
        placeholder="Name"
      />

      <Input
        className={s.input}
        value={email}
        setValue={setEmail}
        placeholder="Email"
        isRequired={false}
      />

      <Select
        className={s.select}
        placeholder="Category"
        onChange={() => {
          return
        }}
        values={items}
      />

      <Input
        className={s.input}
        value={instagram}
        setValue={setInstagram}
        placeholder="@Instagram"
      />

      <Input
        className={s.input}
        value={password}
        setValue={setPassword}
        placeholder="Password"
        isRequired={false}
      />

      <Button className={s.button} onClick={handleClickNextStep}>
        Create Account
      </Button>

      <p className={s.agreement}>
        By clicking “Create Account”, I agree to Ilonsi Shop’s
        <span>Terms&Condition</span>
      </p>
    </form>
  )
}
