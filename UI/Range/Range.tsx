import cn from "classnames"

import { InputLabel } from "@mui/material"

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
    maxQuantity = 1000000,
    currency = Currency.USD,
    label,
    className,
  } = props

  return (
    <div className={cn(s.wrapper, className)}>
      {label && (
        <InputLabel className={s.label} id="range-label">
          {label}
        </InputLabel>
      )}
      <div className={s.box}>
        <span className={s.min}>
          {minQuantity}
          {currency}
        </span>
        <span className={s.space}>-</span>
        <span className={s.max}>
          {maxQuantity}
          {currency}
        </span>
      </div>
    </div>
  )
}

export default Range
