import React from "react"
import s from "./InfluencerProductDelete.module.scss"
import { Button } from "UI/Button"

interface InfluencerProductDeleteProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const InfluencerProductDelete: React.FC<
  InfluencerProductDeleteProps
> = ({ onClick }) => {
  return (
    <div>
      <h3 className={s.title}>Are you sure you want to delete the product?</h3>
      <div className={s.btnContainer}>
        <Button variant="outlined" className={s.btn} onClick={onClick}>
          No
        </Button>
        <Button className={s.btn}>Yes</Button>
      </div>
    </div>
  )
}
