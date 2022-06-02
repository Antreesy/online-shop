import cn from "classnames"
import s from "./card.module.scss"
import Image from "next/image"
import small_picture from "public/assets/img/small_picture.png"

interface CardProps {
  onClick?: () => {}
  id?: string
  image: string
  title: string
  buttonTitle: string
  buttonBottomVsble?: boolean
  topButton?: {
    title: string
    onClick: () => {}
  }
}

const Card: React.FC<CardProps> = (props) => {
  const {
    title,
    buttonTitle,
    topButton,
    image,
    id,
    buttonBottomVsble = false,
  } = props

  const goToStore = () => {
    console.log("go to see more")
  }

  return (
    <div className={s.card}>
      <div className={s.card_frame}></div>
      <div className={s.card_container_hidden}>
        <div className={s.card_image_container}>
          <Image className={s.card_image} src={small_picture} alt="" />
        </div>
        <div
          className={cn(s.card_title, { [s.title_fixed]: !buttonBottomVsble })}
        >
          {" "}
          {title}
        </div>
        <div
          className={cn(s.card_button, {
            [s.button_bottom_hide]: !buttonBottomVsble,
          })}
          onClick={goToStore}
        >
          <span>{buttonTitle}</span>
        </div>
      </div>
    </div>
  )
}

export { Card }
