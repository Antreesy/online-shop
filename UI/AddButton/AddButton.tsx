import React from "react"
import cn from "classnames"

import { Button } from "UI"
import { Icon } from "UI"

import s from "./addButton.module.scss"

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
    s.add_button,
    {
      [s.color_primary]: color === "primary",
      [s.back_color_grey]: bgColor === "grey",
      [s.large]: large,
    },
    className,
  )

  const iconClass = cn(s.icon_wrapper, { [s.large]: large })

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
