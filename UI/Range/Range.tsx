import React, { useState } from "react"
import cn from "classnames"

import { InputLabel } from "@mui/material"
import { Input } from "UI/Input"

import { Currency } from "shared/enums/currency"

import s from "./range.module.scss"

interface RangeProps {
  minQuantity?: number
  maxQuantity?: number
  currency?: Currency
  label?: string
  className?: string
}

const Range: React.FC<RangeProps> = (props) => {
  const {
    minQuantity = 0,
    maxQuantity = 10000000,
    currency = Currency.USD,
    label,
    className,
  } = props
  const [minValue, setMinValue] = useState<string | number>(minQuantity)
  const [maxValue, setMaxValue] = useState<string | number>(maxQuantity)

  const handleMinValue = (value: string | number) => {
    if (Number(value) && value >= minValue && value <= maxValue) {
      setMinValue(value)
    }
  }

  const handleMaxValue = (value: string | number) => {
    if (Number(value) && value >= minValue && value <= maxValue) {
      setMaxValue(value)
    }
  }

  return (
    <div className={cn(s.wrapper, className)}>
      {label && (
        <InputLabel className={s.label} id="range-label">
          {label}
        </InputLabel>
      )}
      <div className={s.box}>
        <Input
          className={s.input}
          value={minValue}
          setValue={handleMinValue}
          adornment={currency}
          placeholder={`${minQuantity}`}
        />
        <span className={s.space}>-</span>
        <Input
          className={s.input}
          value={maxValue}
          setValue={handleMaxValue}
          adornment={currency}
          placeholder={`${maxQuantity}`}
        />
      </div>
    </div>
  )
}

export default Range
