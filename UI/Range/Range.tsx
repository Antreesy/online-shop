import React from "react"

import { Currency } from "shared/enums/currency"

import s from "./range.module.scss"

interface RangeProps {
  minQuantity?: number
  maxQuantity?: number
  currency?: Currency
}

const Range: React.FC<RangeProps> = (props) => {
  const {
    minQuantity = 0,
    maxQuantity = 1000000,
    currency = Currency.USD,
  } = props

  return (
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
  )
}

export default Range
