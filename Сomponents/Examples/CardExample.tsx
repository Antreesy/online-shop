import { Button } from "UI"

import s from "styles/pages/components-example.module.scss"

const CardExample = () => {
  return (
    <div className={s.card_example}>
      <h3>Simple Card</h3>
      <p>Lorem ipsum dolor sit amet</p>
      <Button>Stretch to width</Button>
    </div>
  )
}

export default CardExample
