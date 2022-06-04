import Image from "next/image"

import { Button } from "UI"
import Input from "./Input"

import s from "./Background.module.scss"

interface BackgroundProps {
  image: string
  title?: string
  description?: string
  link?: string
  actionText?: string
  isEditable?: boolean
  onActionClick?: (value: string | number | boolean) => void
}

const Background: React.FC<BackgroundProps> = (props) => {
  const { image, title, description, link, isEditable = false } = props

  return (
    <div className={s.fallbackItem}>
      {isEditable ? (
        <div className={s.addImageButton}>
          <Button
            variant="outlined"
            iconLeft="plus"
            className={s.coverImgBtn}
          />
          <p>Cover image</p>
        </div>
      ) : null}

      <div className={s.image}>
        <Image src={image} className={s.bg} />
      </div>
      <div className={s.btn}>
        <Button className={s.bgButton} variant="outlined">
          Link Button{" "}
        </Button>
      </div>
      <div className={s.content}>
        <div className={s.titleBox}>
          <Input value={title} className={s.title} editable={isEditable} />
          <Input
            className={s.linkMobile}
            value={"@" + link}
            editable={isEditable}
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
