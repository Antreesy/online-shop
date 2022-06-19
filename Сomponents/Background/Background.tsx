import cn from "classnames"

import Image, { ImageProps } from "next/image"
import { Button } from "UI"
import BackgroundInput from "./BackgroundInput"

import s from "./background.module.scss"

interface BackgroundProps {
  image?: ImageProps["src"]
  title?: string
  description?: string
  link?: string
  actionText?: string
  isEditable?: boolean
  gradientBg?: "none" | "black"
  onActionClick?: (value: string | number | boolean) => void
  className?: string
}

const Background: React.FC<BackgroundProps> = (props) => {
  const {
    image,
    title,
    description,
    gradientBg,
    link,
    actionText,
    isEditable = false,
    className,
  } = props

  const addButtonClass = cn(
    s.fallback_item,
    gradientBg === "none" ? s.no_gradient : s.black_gradient,
    className,
  )

  return (
    <div className={addButtonClass}>
      {isEditable && (
        <div className={s.add_button_wrapper}>
          <Button variant="outlined" iconLeft="plus" className={s.add_button} />
          <p>Cover image</p>
        </div>
      )}

      <div className={s.image}>
        {image && <Image src={image} layout="fill" />}
      </div>
      <div className={s.btn}>
        <Button className={s.bg_button} variant="outlined">
          {actionText}
        </Button>
      </div>
      <div className={s.content}>
        <div className={s.title_box}>
          <BackgroundInput
            value={title}
            className={s.title}
            isEditable={isEditable}
            gradientBg={gradientBg}
          />
          <BackgroundInput
            className={s.link_mobile}
            value={"@" + link}
            isEditable={isEditable}
            boxClassName={s.boxlink_mobile}
            reverse
          />
        </div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}
export default Background
