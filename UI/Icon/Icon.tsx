import React from "react"
import { icons } from "shared/consts/icons"
import s from "./icon.module.scss"

export type IconType = typeof icons[number]

interface IconProps {
  type: IconType
}

export const Icon: React.FC<IconProps> = ({ type }) => {
  return <span className={s.icon + " " + s[type]}></span>
}
