import React from "react"
import s from "./CustomerProfileChangePassword.module.scss"
import { Button } from "../../Button"

interface CustomerProfilePictureUpdateSuccess {
  labels: {
    tittle: string
    content: string
  }
}

export const CustomerProfileChangePasswordSuccess: React.FC<
  CustomerProfilePictureUpdateSuccess
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
        <Button>All Right</Button>
      </div>
    </>
  )
}
