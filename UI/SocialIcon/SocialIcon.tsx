import Image from "next/image"
import Link from "next/link"

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
        return <Image src={facebook} alt={type} />
      case "instagram":
        return <Image src={instagram} alt={type} />
      case "youtube":
        return <Image src={youtube} alt={type} />
    }
  }

  return (
    <Link href="/">
      <a className={s.hexagon}>
        <Image src={hex} alt="" />
        <IconImage />
      </a>
    </Link>
  )
}
