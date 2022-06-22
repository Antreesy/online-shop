import React, { useState } from "react"
import { Button, Input, Select } from "UI"

import s from "styles/pages/register.module.scss"

const items = [
  { title: "one", value: 1 },
  { title: "two", value: 2 },
  { title: "three", value: 3 },
]

interface StepTwoProps {
  setStep: (step: number) => void
}

export const StepTwo: React.FC<StepTwoProps> = ({ setStep }) => {
  const [taxNumber, setTaxNumber] = useState<string>("")
  const [mersisNo, setMersisNo] = useState<string>("")

  const handleClickNextStep = () => setStep(3)

  return (
    <form className={s.step_wrapper}>
      <h4 className={s.caption_step}>
        Step <span>01</span>
      </h4>

      <Select className={s.select} placeholder="Sale Category" values={items} />

      <Select className={s.select} placeholder="Company Type" values={items} />

      <Input
        className={s.input}
        value={taxNumber}
        setValue={setTaxNumber}
        placeholder="Tax Number"
      />

      <Input
        className={s.input}
        value={mersisNo}
        setValue={setMersisNo}
        placeholder="Mersis No (Optional)"
      />

      <Button className={s.button} onClick={handleClickNextStep}>
        Next Step
      </Button>
    </form>
  )
}
