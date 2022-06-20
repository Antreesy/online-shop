import { Button } from "UI"

import s from "./addressCard.module.scss"

interface AddressCardProps {
  title: string
  text: React.ReactNode
}

const AddressCard: React.FC<AddressCardProps> = (props) => {
  const { title, text } = props

  return (
    <div className={s.address_card}>
      <div className={s.title_box}>
        <span className={s.title}>{title}</span>
        <div className={s.buttons}>
          <Button variant="text" iconLeft="edit" className={s.address_button}>
            <span className={s.span}>Edit</span>
          </Button>
          <Button
            variant="text"
            iconLeft="trash_can"
            className={s.address_button}
          >
            <span className={s.span}>Delete</span>
          </Button>
        </div>
      </div>
      <p className={s.text}>{text}</p>
    </div>
  )
}
export default AddressCard
