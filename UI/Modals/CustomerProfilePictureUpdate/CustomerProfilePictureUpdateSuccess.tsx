import React from "react"
import s from "./CustomerProfilePictureUpdate.module.scss"
import { Button } from "../../Button"

interface CustomerProfilePictureUpdateSuccess {
  title: string
  content: string
}

export const CustomerProfilePictureUpdateSuccess: React.FC<
  CustomerProfilePictureUpdateSuccess
> = ({ title, content }) => {
  return (
    <>
      <div className={s.tittle}>
        <p>{title}</p>
      </div>
      <div className={s.content}>
        <p>{content}</p>
      </div>
      <div className={s.button}>
        <Button>All Right</Button>
      </div>
    </>
  )
}
