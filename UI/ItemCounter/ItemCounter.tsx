import React from "react"
import s from "./ItemCounter.module.scss"
import { Button } from "../Button"
import cn from "classnames"

interface ItemCounterProps {
  quantity: number
  id: string
  onChange: (quantity: number, id: string) => void
  large?: true
}

export const ItemCounter: React.FC<ItemCounterProps> = ({
  large,
  onChange,
  quantity,
  id,
}) => {
  const largeClassName = large ? s.large : ""

  const increment = () => {
    onChange(quantity + 1, id)
  }

  const decrement = () => {
    onChange(quantity - 1, id)
  }

  return (
    <div className={cn(s.wrapper, largeClassName)}>
      <Button onClick={decrement} className={cn(s.button, s.decrement)}>
        -
      </Button>
      <div className={s.value}>{quantity}</div>
      <Button onClick={increment} className={s.button}>
        +
      </Button>
    </div>
  )
}
