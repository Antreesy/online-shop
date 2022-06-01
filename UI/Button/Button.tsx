//Global Dependencies
import React from "react"
import cn from "classnames"

//Project Components
import { Button } from "@mui/material"
import { Icon, IconType } from "UI/Icon/Icon"

//Project Styles
import s from "./Button.module.scss"

//Local Interfaces
interface ButtonProps {
  className?: string
  disabled?: boolean
  icon?: boolean
  // mode?: "defaultVariantOff" | "defaultVariantOn"
  rounded?: boolean
  disableElevation?: boolean
  variant?: "text" | "outlined" | "contained"
  // color?:
  //   | "primary"
  //   | "inherit"
  //   | "secondary"
  //   | "success"
  //   | "error"
  //   | "info"
  //   | "warning"
  children?: React.ReactNode
  iconLeft?: IconType
  iconRight?: IconType
  onClick?: () => void
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  // Props destructuring
  const {
    // mode = "defaultVariantOn",
    className = "",
    disabled,
    rounded,
    disableElevation,
    variant = "contained",
    // color = "primary",
    children = null,
    icon,
    iconLeft,
    iconRight,
    onClick,
  } = props

  // Local functions
  const buttonClass = cn(
    s.button,
    {
      // [s.contained_button]:
      // mode === "defaultVariantOn" && variant === "contained",
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
      // color={color}
      onClick={onClick}
    >
      {!!iconLeft && <Icon type={iconLeft} />}
      {children}
      {!!iconRight && <Icon type={iconRight} />}
    </Button>
  )
}

export default CustomButton
