import { useState } from "react"
import cn from "classnames"

import { Button } from "UI"

import s from "./ItemCounter.module.scss"

interface ItemCounterProps {
  initValue?: number
  onChange?: () => void
  large?: true
}

const ItemCounter: React.FC<ItemCounterProps> = (props) => {
  const { large, onChange, initValue = 0 } = props
  const [value, setValue] = useState<number>(initValue)

  const counterClass = cn(s.wrapper, { [s.large]: large })

  const onIncrement = () => {
    setValue((prev: number) => prev + 1)
    onChange?.()
  }

  const onDecrement = () => {
    setValue((prev: number) => prev - 1)
    onChange?.()
  }

  return (
    <div className={counterClass}>
      <Button onClick={onDecrement} className={s.button} iconLeft="minus" />
      <div className={s.value}>{value}</div>
      <Button onClick={onIncrement} className={s.button} iconLeft="plus" />
    </div>
  )
}

export default ItemCounter
