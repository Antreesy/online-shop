import { useState } from "react"
import cn from "classnames"

import { Button } from "UI"

import s from "./itemCounter.module.scss"

interface ItemCounterProps {
  initValue?: number
  onChange?: (value: number) => void
  large?: true
  min?: number
  max?: number
}

const ItemCounter: React.FC<ItemCounterProps> = (props) => {
  const { large, onChange, initValue = 0, min = 1, max = 100 } = props
  const [value, setValue] = useState<number>(initValue)

  const counterClass = cn(s.wrapper, { [s.large]: large })

  const handleIncrement = () => {
    setValue((prev: number) => {
      if (prev >= min && prev < max) {
        onChange?.(prev + 1)
        return prev + 1
      }
      onChange?.(prev)
      return prev
    })
  }

  const handleDecrement = () => {
    setValue((prev: number) => {
      if (prev > min && prev <= max) {
        onChange?.(prev - 1)
        return prev - 1
      }
      onChange?.(prev)
      return prev
    })
  }

  return (
    <div className={counterClass}>
      <Button onClick={handleDecrement} className={s.button} iconLeft="minus" />
      <div className={s.value}>{value}</div>
      <Button onClick={handleIncrement} className={s.button} iconLeft="plus" />
    </div>
  )
}

export default ItemCounter
