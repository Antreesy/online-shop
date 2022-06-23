import cn from "classnames"

import { InputLabel, TextareaAutosize } from "@mui/material"

import s from "./textArea.module.scss"

interface TextAreaProps {
  label?: React.ReactNode
  placeholder?: string
  className?: string
  value: string
  setValue: (newValue: string) => void
  onChange?: () => void
}

const CustomTextArea: React.FC<TextAreaProps> = (props) => {
  const {
    value,
    placeholder = "",
    className = "",
    label,
    onChange,
    setValue,
  } = props

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    onChange?.()
  }

  return (
    <div className={cn(s.wrapper, className)}>
      {label && <InputLabel className={s.label}>{label}</InputLabel>}
      <TextareaAutosize
        onChange={handleChange}
        value={value}
        className={s.textarea}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomTextArea
