import React from "react"
import cn from "classnames"

import { Button } from "@mui/material"
import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./button.module.scss"

export interface ButtonProps {
  className?: string
  disabled?: boolean
  icon?: boolean
  rounded?: boolean
  disableElevation?: boolean
  variant?: "text" | "outlined" | "contained"
  children?: React.ReactNode
  iconLeft?: IconType
  iconRight?: IconType
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const {
    className = "",
    disabled,
    rounded,
    disableElevation,
    variant = "contained",
    children = null,
    icon,
    iconLeft,
    iconRight,
    onClick,
  } = props

  const buttonClass = cn(
    s.button,
    {
      [s.contained_button]: variant === "contained",
      [s.outlined_button]: variant === "outlined",
      [s.text_button]: variant === "text",
      [s.icon_button]: !children || icon,
      [s.rounded_button]: rounded,
    },
    className,
  )

  return (
    <Button
      className={buttonClass}
      disabled={disabled}
      disableElevation={disableElevation}
      variant={variant}
      onClick={onClick}
    >
      {!!iconLeft && <Icon type={iconLeft} />}
      {children}
      {!!iconRight && <Icon type={iconRight} />}
    </Button>
  )
}

export default CustomButton
