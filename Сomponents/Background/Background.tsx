import Image, { ImageProps } from "next/image"
import cn from "classnames"
import { Button } from "UI"
import BgInput from "./BgInput"

import s from "./Background.module.scss"
import { style } from "@mui/system"

interface BackgroundProps {
  image?: ImageProps["src"]
  title?: string
  description?: string
  link?: string
  actionText?: string
  isEditable?: boolean
  gradientBg?: "none" | "black"
  onActionClick?: (value: string | number | boolean) => void
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
  } = props

  const addButtonClass = cn(
    s.fallbackItem,
    gradientBg === "none" ? s.noneGradientBg : s.blackGradientBg,
  )

  return (
    <div
      className={addButtonClass}
      style={{
        backgroundImage: `url(${image} linear-gradient(to bottom, rgba(0, 0, 0, 0), #000))`,
      }}
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
        {image && <Image src={image} className={s.bg} />}
      </div>
      <div className={s.btn}>
        <Button className={s.bgButton} variant="outlined">
          {actionText}
        </Button>
      </div>
      <div className={s.content}>
        <div className={s.titleBox}>
          <BgInput
            value={title}
            className={s.title}
            isEditable={isEditable}
            gradientBg={gradientBg}
          />
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
