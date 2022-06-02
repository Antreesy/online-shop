import { Alert } from "@mui/material"
import classNames from "classnames"
import { FC } from "react"
import s from "./alertBox.module.scss"

interface AlertBoxProps {
  text: string
  color?: "error" | "info" | "success" | "warning"
  variant?: "filled" | "outlined" | "standard"
  className?: string
}

const AlertBox: FC<AlertBoxProps> = (props) => {
  const { text, color = "success", variant = "standard", className } = props

  return (
    <Alert
      className={classNames(className)}
      color={color}
      variant={variant}
      icon={false}
      classes={{
        root: s.alertBox,
        standardSuccess: s.standard,
      }}
    >
      {text}
    </Alert>
  )
}

export default AlertBox
