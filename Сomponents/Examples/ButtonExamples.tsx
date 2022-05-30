import { Button } from "UI"

import s from "styles/pages/ComponentsExample.module.scss"

const ButtonExamples: React.FC = () => {
  return (
    <div className={s.grid}>
      <div className={s.grid_inner}>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </div>

      <div className={s.grid_inner}>
        <Button className={s.button_clear} icon iconLeft="close_cross" />
        <Button className={s.button_add} icon rounded>
          +
        </Button>
        <Button className={s.button_search} iconLeft="search">
          Search
        </Button>
        <Button className={s.button_clean} iconLeft="trash_can">
          Clean
        </Button>
        <Button className={s.button_excel} iconLeft="download">
          Excel Download
        </Button>
      </div>

      <div className={s.grid_inner}>
        <Button className={s.button_back} iconLeft="arrow_left">
          Back
        </Button>
        <Button className={s.button_facebook} variant="outlined">
          Sign In
        </Button>
        <Button className={s.button_smalltext} variant="text">
          Forget Password?
        </Button>
      </div>

      <div className={s.grid_inner}>
        <Button className={s.button_black}>Confirm</Button>
        <Button className={s.button_purple}>Approve</Button>
        <div className={s.card_example}>
          <h3>Simple Card</h3>
          <p>Lorem ipsum dolor sit amet</p>
          <Button>Stretch to width</Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonExamples
