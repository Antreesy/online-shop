import { Button } from "UI"

import s from "./customerPasswordSuccess.module.scss"

interface CustomerPasswordSuccessProps {
  title: string
  content: string
}

export const CustomerPasswordSuccess: React.FC<
  CustomerPasswordSuccessProps
> = ({ title, content }) => {
  return (
    <>
      <p className={s.title}>{title}</p>
      <p className={s.content}>{content}</p>
      <Button className={s.button}>All Right</Button>
    </>
  )
}
