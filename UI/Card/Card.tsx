import cn from "classnames"

import Image, { ImageProps } from "next/image"
import { Button } from "UI"

import s from "./card.module.scss"

interface CardProps {
  title?: string
  imageSrc: ImageProps["src"]
  className?: string
  buttonTitle: string
  isButtonHidden?: boolean
  onClick?: () => void
  topButtonTitle?: string
  onClickTopButton?: () => void
}

const Card: React.FC<CardProps> = (props) => {
  const {
    imageSrc,
    title = "",
    className,
    buttonTitle,
    isButtonHidden = false,
    onClick,
    topButtonTitle,
    onClickTopButton,
  } = props

  const cardClass = cn(s.card, className)
  const contentClass = cn(s.content, { [s.content_hidden]: isButtonHidden })

  return (
    <div className={cardClass}>
      <Image src={imageSrc} alt={title} layout="fill" />

      <div className={s.hiddenContainer}>
        <div className={contentClass}>
          <p className={s.title}>{title}</p>
          <Button className={s.button}>{buttonTitle}</Button>
        </div>
      </div>

      {!!topButtonTitle && <span className={s.topButton}>{topButtonTitle}</span>}
    </div>
  )
}

export default Card
