import { TextField } from "@mui/material"
import React from "react"
import s from "./input.module.scss"

interface InputProps {
  label: React.ReactNode
  setValue: (newValue: string) => void
  value: string
  placeholder?: string
  className?: string
  variant?: "default" | "footer" | "black_button" | "blue_outline"
  buttonLabel?: string
  isRequired?: boolean
  errorText?: React.ReactNode
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
    errorText = ""
  } = props
  return (
    <div className={s[variant]}>
      <div className={s.label}>{label}</div>
      <TextField
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        classes={{root: s[className] }}
        className={s.input}
        placeholder={placeholder}
        required={isRequired} />
      {variant === "footer" || variant === "black_button" ? (
        <button>{buttonLabel}</button>
      ) : null}
      {className === "error" && <div className={s.errorText}>{errorText}</div>} 
      
    </div>
  )
}
