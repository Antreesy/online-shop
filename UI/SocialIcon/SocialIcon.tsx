import Image from "next/image"

import hex from "public/assets/icons/hexagon.svg"
import facebook from "public/assets/icons/facebook.svg"
import instagram from "public/assets/icons/instagram.svg"
import youtube from "public/assets/icons/youtube.svg"

import s from "./SocialIcon.module.scss"

interface SocialIconProps {
  type: "facebook" | "instagram" | "youtube"
}

export const SocialIcon: React.FC<SocialIconProps> = (props) => {
  const { type } = props

  const IconImage = () => {
    switch (type) {
      case "facebook":
        return <Image className={s.icon} src={facebook} alt={type} />
      case "instagram":
        return <Image className={s.icon} src={instagram} alt={type} />
      case "youtube":
        return <Image className={s.icon} src={youtube} alt={type} />
    }
  }

  return (
    <div className={s.hexagon}>
      <Image className={s.icon} src={hex} alt="" />
      <IconImage />
    </div>
  )
}
