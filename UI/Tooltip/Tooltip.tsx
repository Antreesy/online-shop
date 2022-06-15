import React from "react"
import Tooltip from "@mui/material/Tooltip"
import s from "./tooltip.module.scss"
import CustomButton from "UI/Button/Button"

interface CustomTooltipProps {
  text: string
  children: React.ReactNode
  position?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
}

const InnerContent = (text: string) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.text}>
          <p>{text}</p>
        </div>
        <div className={s.button_groupe}>
          <div>
            <CustomButton className={s.button_left}>Approve</CustomButton>
          </div>
          <div>
            <CustomButton className={s.button_right} variant="outlined">
              Reject
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const cusctomClassTooltip = {
  tooltip: s.tooltip,
  arrow: s.arrow,
}

const CustomTooltip: React.FC<CustomTooltipProps> = (props) => {
  const { text, children, position } = props

  return (
    <Tooltip
      arrow
      classes={cusctomClassTooltip}
      title={InnerContent(text)}
      placement={position}
    >
      <div>{children}</div>
    </Tooltip>
  )
}

export default CustomTooltip
