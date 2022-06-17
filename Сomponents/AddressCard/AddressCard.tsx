import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { Button } from "UI"

import s from "./addressCard.module.scss"

interface AddressCardProps {
  title: string
  text: string | ReactJSXElement
}

const AddressCard: React.FC<AddressCardProps> = (props) => {
  const { title, text } = props

  return (
    <div className={s.addressCard}>
      <div className={s.titleBox}>
        <span className={s.title}>{title}</span>
        <div className={s.buttons}>
          <Button variant="text" iconLeft="edit" className={s.addressBtn}>
            <span className={s.span}>Edit</span>
          </Button>
          <Button variant="text" iconLeft="trash_can" className={s.addressBtn}>
            <span className={s.span}>Delete</span>
          </Button>
        </div>
      </div>
      <p className={s.text}>{text}</p>
    </div>
  )
}
export default AddressCard
