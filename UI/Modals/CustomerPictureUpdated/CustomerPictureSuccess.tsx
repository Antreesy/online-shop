import { Button } from "UI"

import s from "./customerPictureSuccess.module.scss"

interface CustomerPictureSuccessProps {
  title: string
  content: string
}

export const CustomerPictureSuccess: React.FC<CustomerPictureSuccessProps> = ({
  title,
  content,
}) => {
  return (
    <>
      <p className={s.title}>{title}</p>
      <p className={s.content}>{content}</p>
      <Button className={s.button}>All Right</Button>
    </>
  )
}
