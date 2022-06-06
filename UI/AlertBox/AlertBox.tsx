import cn from "classnames"

import { Alert } from "@mui/material"

import s from "./alertBox.module.scss"

interface AlertBoxProps {
  text: string
  color?: "error" | "info" | "success" | "warning"
  variant?: "filled" | "outlined" | "standard"
  className?: string
}

const AlertBox: React.FC<AlertBoxProps> = (props) => {
  const { text, color = "success", variant = "standard", className } = props

  return (
    <Alert
      className={cn(s.alertBox, className)}
      color={color}
      variant={variant}
      icon={false}
      classes={{
        standardSuccess: s.standard,
      }}
    >
      {text}
    </Alert>
  )
}

export default AlertBox
