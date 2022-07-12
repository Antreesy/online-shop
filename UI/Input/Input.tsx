import cn from "classnames"

import { InputAdornment, InputLabel, TextField } from "@mui/material"
import { Button, Icon } from "UI"

import s from "./input.module.scss"

interface InputProps {
  label?: React.ReactNode
  setValue: (newValue: string) => void
  value: string
  disabled?: boolean
  placeholder?: string
  className?: string
  variant?:
    | "default"
    | "footer"
    | "black_button"
    | "blue_outline"
    | "black_outline"
    | "gray_outline"
  buttonLabel?: string
  isRequired?: boolean
  type?: string
  errorText?: React.ReactNode
  validation?: object
  onChange?: () => void
  adornment?: string
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    setValue,
    value,
    disabled,
    placeholder = "",
    className = "",
    variant = "default",
    buttonLabel = "",
    isRequired = false,
    type = "text",
    errorText = "",
    validation,
    onChange,
    adornment,
  } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange?.()
  }

  return (
    <div className={cn(s[variant], className)}>
      {label && <InputLabel className={s.label}>{label}</InputLabel>}
      <div className={s.input_wrapper}>
        <TextField
          variant="outlined"
          onChange={handleChange}
          value={value}
          classes={{ root: className }}
          className={s.input}
          placeholder={placeholder}
          required={isRequired}
          disabled={disabled}
          type={type}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" classes={{ root: s.adornment }}>
                {adornment}
              </InputAdornment>
            ),
          }}
          {...validation}
        />
        {variant === "footer" || variant === "black_button" ? (
          <Button disableElevation>{buttonLabel}</Button>
        ) : null}
        {className === "error" && (
          <div className={s.error_text}>
            <Icon type="exclamation" />
            <span>{errorText}</span>
          </div>
        )}
      </div>
    </div>
  )
}
