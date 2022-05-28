//Global Dependencies
import React from "react"
import classNames from "classnames"

//Project Components
import { Button } from "@mui/material"
import { Icon, IconType } from "UI/Icon/Icon"

//Project Styles
import s from "./Button.module.scss"

//Local Interfaces
interface ButtonProps {
  className?: string
  disabled?: boolean
  variant?: "text" | "outlined" | "contained"
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
  children?: React.ReactNode
  iconLeft?: IconType
  iconRight?: IconType
  onClick?: () => void
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  // Props destructuring
  const {
    className = "",
    disabled = false,
    variant = "contained",
    color = "primary",
    children = null,
    iconLeft,
    iconRight,
    onClick,
  } = props

  // Local functions
  const buttonClass = classNames(
    s.button,
    {
      [s.contained_button]: variant === "contained",
      [s.outlined_button]: variant === "outlined",
      [s.text_button]: variant === "text",
      [s.icon_button]: !children,
    },
    className,
  )

  return (
    <Button
      className={buttonClass}
      disabled={disabled}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {!!iconLeft && <Icon type={iconLeft} />}
      {children}
      {!!iconRight && <Icon type={iconRight} />}
    </Button>
  )
}

export default CustomButton
