//Global Dependencies
import { useState } from "react";

//Project Dependencies
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../../store/slices/counterSlice";

//Project Components
import { CustomButton } from "../../UI";
import { TextField } from "@mui/material";

//Project Styles
import styles from "./counter.module.scss";

const Counter: React.FC = () => {
  // Hooks
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

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
        <CustomButton
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </CustomButton>
      </div>
      <div className={styles.wrapper}>
        <CustomButton
          className={styles.button}
          onClick={() => dispatch(decrement())}
        >
          -1
        </CustomButton>
        <CustomButton
          className={styles.button}
          onClick={() => dispatch(increment())}
        >
          +1
        </CustomButton>
      </div>
    </>
  );
};

export default Counter;
