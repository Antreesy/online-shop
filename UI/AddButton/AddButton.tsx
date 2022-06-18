import React from "react"
import cn from "classnames"

import { Button } from "UI"
import { Icon } from "UI"

import s from "./addbutton.module.scss"

interface AddButtonProps {
  title?: string
  color?: "primary" | "secondary"
  bgColor?: "grey" | "white"
  large?: boolean
  onClick?: () => void
  className?: string
}

const AddButton: React.FC<AddButtonProps> = ({
  color = "primary",
  bgColor = "grey",
  title,
  large,
  onClick,
  className,
}) => {
  const addButtonClass = cn(
    s.addButton,
    color === "primary" ? s.primaryColor : s.secondaryColor,
    bgColor === "grey" ? s.greyBgColor : s.whiteBgColor,
    { [s.large]: large },
    className,
  )

  const iconClass = cn(s.iconContainer, large ? s.iconLarge : s.iconDefault)

  return (
    <Button
      onClick={onClick}
      className={addButtonClass}
      disableElevation={large}
    >
      <div className={iconClass}>
        <Icon type="plus" />
      </div>
      {title && <div className={s.title}>{title}</div>}
    </Button>
  )
}

export default AddButton
