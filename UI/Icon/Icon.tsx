import React from "react"
import cn from "classnames"

import { icons } from "shared/constants/icons"

import s from "./icon.module.scss"

export type IconType = typeof icons[number]

interface IconProps {
  type: IconType
  color?: string
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, color, className, onClick } = props
  return (
    <span
      style={{ color }}
      className={cn(s.icon, s[type], className)}
      onClick={onClick}
    ></span>
  )
}
