import React, { useState } from "react"
import { Button, Icon } from "UI"

import s from "styles/pages/ComponentsExample.module.scss"
import { ModalWindow } from "UI/ModalWindow"

const ButtonExamples: React.FC = () => {
  const [open, setOpen] = useState(false)

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
        <Button className={s.button_clear} icon iconLeft="close_cross" />
        <Button className={s.button_add} icon iconLeft="plus" rounded />
        <Button className={s.button_black}>Confirm</Button>
        <Button className={s.button_purple}>Approve</Button>
        <Button onClick={() => setOpen(true)} className={s.button_purple}>
          Modal Window
        </Button>
        <ModalWindow isOpen={open} setOpen={setOpen} iconType="okay">
          Whatever you want
        </ModalWindow>
      </div>
    </div>
  )
}

export default ButtonExamples
