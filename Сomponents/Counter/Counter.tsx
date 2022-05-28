//Global Dependencies
<<<<<<< HEAD
import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import '../../features/i18n'
=======
import { useState } from "react"

>>>>>>> 3c54b344f4fc805353b3371fb9e9062c0ba9fc65
//Project Dependencies
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "store/slices/counterSlice"

//Project Components
import { Button } from "UI"
import { TextField } from "@mui/material"

//Project Styles
import styles from "./counter.module.scss"

const Counter: React.FC = () => {
  // Hooks
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  // const { t } = useTranslation()
=======
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)
>>>>>>> 3c54b344f4fc805353b3371fb9e9062c0ba9fc65

  return (
    <>
      <h1>Redux Toolkit example counter</h1>
      <h2>The current number is {count}</h2>
      <div className={styles.wrapper}>
        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <Button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </Button>
      </div>
      <div className={styles.wrapper}>
        <Button className={styles.button} onClick={() => dispatch(decrement())}>
          -1
        </Button>
        <Button className={styles.button} onClick={() => dispatch(increment())}>
          +1
        </Button>
      </div>

      {/* {t('title')} */}
    </>
  )
}

export default Counter
