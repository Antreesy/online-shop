import { Button } from "UI"

import s from "./returnButton.module.scss"

const ReturnButton: React.FC = () => {
  return (
    <div className={s.button_wrapper}>
      <Button icon iconLeft="arrow_left" variant="text" className={s.button} />
      <span>Return to Your Shop</span>
    </div>
  )
}

export default ReturnButton
