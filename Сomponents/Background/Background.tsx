import Image, { ImageProps } from "next/image"

import { Button } from "UI"
import BgInput from "./BgInput"

import s from "./Background.module.scss"

interface BackgroundProps {
  image: ImageProps["src"]
  title?: string
  description?: string
  link?: string
  actionText?: string
  isEditable?: boolean
  onActionClick?: (value: string | number | boolean) => void
}

const Background: React.FC<BackgroundProps> = (props) => {
  const {
    image,
    title,
    description,
    link,
    actionText,
    isEditable = false,
  } = props

  return (
    <div
      className={s.fallbackItem}
      style={{ backgroundImage: `url(${image})` }}
    >
      {isEditable && (
        <div className={s.addImageButton}>
          <Button
            variant="outlined"
            iconLeft="plus"
            className={s.coverImgBtn}
          />
          <p>Cover image</p>
        </div>
      )}

      <div className={s.image}>
        <Image src={image} className={s.bg} />
      </div>
      <div className={s.btn}>
        <Button className={s.bgButton} variant="outlined">
          {actionText}
        </Button>
      </div>
      <div className={s.content}>
        <div className={s.titleBox}>
          <BgInput value={title} className={s.title} isEditable={isEditable} />
          <BgInput
            className={s.linkMobile}
            value={"@" + link}
            isEditable={isEditable}
            boxClassname={s.boxLinkMobile}
            reverse
          />
        </div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}
export default Background
