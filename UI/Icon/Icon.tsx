import React from "react"
import { icons } from "shared/consts/icons"
import s from "./icon.module.scss"

export type IconType = typeof icons[number]

interface IconProps {
  type: IconType
  color?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, color = "black" } = props
  return <span style={{ color }} className={s.icon + " " + s[type]}></span>
}
