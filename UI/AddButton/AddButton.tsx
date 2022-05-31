import React from "react"
import cn from "classnames"

import { Button } from "UI"
import { Icon } from "UI"

import s from "./addbutton.module.scss"

interface AddButtonProps {
  title?: string
  titleColor?: "primary" | "secondary"
  bgColor?: "primary" | "secondary"
  size?: "large" | "default"
  onClick?: () => void
}

const AddButton: React.FC<AddButtonProps> = ({
  titleColor = "primary",
  bgColor = "primary",
  title,
  size,
  onClick,
}) => {
  const titleColorClass =
    titleColor === "primary" ? s.primaryColor : s.secondaryColor
  const bgColorClass = bgColor === "primary" ? s.primaryBG : s.secondaryBG
  const btnSizeStyles = size === "large" ? s.largeSize : s.defaultSize
  const iconSize = size === "large" ? s.iconLarge : s.iconDefault

  return (
    <Button
      onClick={onClick}
      className={cn(s.size, titleColorClass, bgColorClass, btnSizeStyles)}
    >
      <div className={cn(s.iconContainer, iconSize)}>
        <Icon type="plus" />
      </div>
      {title && <div className={s.title}>{title}</div>}
    </Button>
  )
}

export default AddButton
