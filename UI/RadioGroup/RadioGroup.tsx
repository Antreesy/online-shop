import { useState } from "react"
import cn from "classnames"

import { FormControlLabel, Radio, RadioGroup } from "@mui/material"

import s from "./radioGroup.module.scss"

interface RadioGroupProps {
  initialValue?: string
  className?: string
  elements: {
    value: string
    label: string
  }[]
}

const IconRadio = ({ checked }: { checked?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    {checked ? (
      <circle cx="10" cy="10" r="10" fill="#8100ef" />
    ) : (
      <circle
        cx="10"
        cy="10"
        r="8.5"
        stroke="#8100ef"
        stroke-width="1.5"
        fill="transparent"
      />
    )}
  </svg>
)

const CustomRadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { initialValue, elements, className } = props

  const [value, setValue] = useState<string>(initialValue ?? elements[0]?.value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const radioGroupClass = cn(s.radio_group, className)

  return (
    <RadioGroup
      value={value}
      onChange={handleChange}
      className={radioGroupClass}
    >
      {elements &&
        elements.map(({ value, label }) => {
          return (
            <FormControlLabel
              key={value}
              className={s.radio_button}
              value={value}
              control={
                <Radio
                  icon={<IconRadio />}
                  checkedIcon={<IconRadio checked />}
                />
              }
              label={label}
            />
          )
        })}
    </RadioGroup>
  )
}

export default CustomRadioGroup
