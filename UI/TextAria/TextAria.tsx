import React from "react"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import s from "./textAria.module.scss"

interface TextAriaProps {
  size?: object
  placeholder?: string
  value: string
  setValue: (newValue: string) => void
  onChange?: () => void
}

const CustomTextAria: React.FC<TextAriaProps> = (props) => {
  const { value, size, placeholder = "", onChange, setValue } = props

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    onChange?.()
  }

  return (
    <TextareaAutosize
      onChange={handleChange}
      value={value}
      className={s.aria}
      placeholder={placeholder}
      style={size}
    />
  )
}

export default CustomTextAria
