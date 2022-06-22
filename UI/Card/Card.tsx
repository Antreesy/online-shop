import cn from "classnames"
import { useRouter } from "next/router"

import Image, { ImageProps } from "next/image"
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
    buttonHref,
    isButtonHidden = false,
    onClick,
    topButtonTitle,
    onClickTopButton,
  } = props

  const router = useRouter()
  const handleClick = () => {
    onClick?.()
    buttonHref && router.push(buttonHref)
  }

  const cardClass = cn(s.card, className)
  const contentClass = cn(s.content, { [s.content_hidden]: isButtonHidden })

  return (
    <div className={cardClass}>
      <Image src={imageSrc} alt={title} layout="fill" />

      <div className={s.hidden_wrapper}>
        <div className={contentClass}>
          <p className={s.title}>{title}</p>
          <Button className={s.button} onClick={handleClick}>
            {buttonTitle}
          </Button>
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
