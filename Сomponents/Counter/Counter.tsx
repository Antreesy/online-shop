import { useState } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "store/slices/counterSlice"

import { Button } from "UI"
import { TextField } from "@mui/material"

import s from "./counter.module.scss"

const Counter: React.FC = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  return (
    <>
      <h1>Redux Toolkit example counter</h1>
      <h2>The current number is {count}</h2>
      <div className={s.wrapper}>
        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <Button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </Button>
      </div>
      <div className={s.wrapper}>
        <Button onClick={() => dispatch(decrement())}>-1</Button>
        <Button onClick={() => dispatch(increment())}>+1</Button>
      </div>
    </>
  )
}

export default Counter
