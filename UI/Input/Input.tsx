import { TextField } from "@mui/material"
import React from "react"
import s from "./input.module.scss"

interface InputProps {
  label: string
  setValue: (newValue: string) => void
  value: string
}

export const Input: React.FC<InputProps> = (props) => {
  const { label, setValue, value } = props
  return (
    <div>
      <div className={s.label}>{label}</div>
      <TextField
        variant="outlined"
        className={s.input}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}
