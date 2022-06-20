import cn from "classnames"

import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { Button } from "UI"

import s from "./card.module.scss"

interface CardProps {
  title?: string
  imageSrc: ImageProps["src"]
  className?: string
  buttonTitle: string
  buttonHref?: string
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
    buttonHref = "",
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

      <div className={s.hidden_wrapper}>
        <div className={contentClass}>
          <p className={s.title}>{title}</p>
          <Link href={buttonHref}>
            <Button className={s.button} onClick={onClick}>
              {buttonTitle}
            </Button>
          </Link>
        </div>
      </div>

      {!!topButtonTitle && (
        <span className={s.top_button} onClick={onClickTopButton}>
          {topButtonTitle}
        </span>
      )}
    </div>
  )
}

export default Card
