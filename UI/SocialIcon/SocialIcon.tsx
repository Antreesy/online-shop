import React from "react"
import s from "./SocialIcon.module.scss"

interface SocialIconProps {
  icon: string
  title: string
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, title }) => {
  return (
    <div className={s.hexagon}>
      <div className={s.hexagon__inside}>
        <img src={icon} alt={title} />
      </div>
    </div>
  )
}
