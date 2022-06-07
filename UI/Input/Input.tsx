import { InputLabel, TextField } from "@mui/material"
import { Button, Icon } from "UI"

import s from "./input.module.scss"

interface InputProps {
  label?: React.ReactNode
  setValue: (newValue: string) => void
  value: string
  placeholder?: string
  className?: string
  variant?:
    | "default"
    | "footer"
    | "black_button"
    | "blue_outline"
    | "black_outline"
  buttonLabel?: string
  isRequired?: boolean
  type?: string
  errorText?: React.ReactNode
  onChange?: () => void
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    setValue,
    value,
    placeholder = "",
    className = "",
    variant = "default",
    buttonLabel = "",
    isRequired = false,
    type = "text",
    errorText = "",
    onChange,
  } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange?.()
  }

  return (
    <div className={s[variant]}>
      {label && <InputLabel className={s.label}>{label}</InputLabel>}
      <div className={s.inputWrapper}>
        <TextField
          variant="outlined"
          onChange={handleChange}
          value={value}
          classes={{ root: s[className] }}
          className={s.input}
          placeholder={placeholder}
          required={isRequired}
          type={type}
        />
        {variant === "footer" || variant === "black_button" ? (
          <Button>{buttonLabel}</Button>
        ) : null}
        {className === "error" && (
          <div className={s.errorText}>
            <Icon type="exclamation" />
            <span>{errorText}</span>
          </div>
        )}
      </div>
    </div>
  )
}
