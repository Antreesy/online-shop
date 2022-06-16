import React from "react"
import s from "./CustomerProductDetailPopUp.module.scss"
import { Button } from "../../Button"

interface CustomerProductDetailPopUp {
  labels: {
    tittle: string
    content: string
  }
}

export const CustomerProductDetailPopUp: React.FC<
  CustomerProductDetailPopUp
> = ({ labels }) => {
  return (
    <>
      <div className={s.tittle}>
        <p>{labels.tittle}</p>
      </div>
      <div className={s.content}>
        <p>{labels.content}</p>
      </div>
      <div className={s.button}>
        <Button className={s.back}>Back to Brand</Button>
        <Button className={s.go}>Go to Store</Button>
      </div>
    </>
  )
}
