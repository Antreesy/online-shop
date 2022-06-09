import React from "react"
import cn from "classnames"

import { IconType } from "shared/interfaces/iconTypes"

import s from "./icon.module.scss"

interface IconProps {
  type: IconType
  color?: string
  wrapped?: boolean
  className?: string
}

export const Icon: React.FC<IconProps> = (props) => {
  const { type, color, wrapped, className } = props

  if (wrapped) {
    return (
      <div className={cn(s.wrapper, className)}>
        <span style={{ color }} className={cn(s.icon, s[type])} />
      </div>
    )
  }
  return <span style={{ color }} className={cn(s.icon, s[type], className)} />
}
