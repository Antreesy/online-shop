import React from "react"
import { styled } from "@mui/material/styles"
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip"
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
    | undefined
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

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#000",
    maxWidth: 500,
    borderRadius: 7,
    border: "solid 2px #8100ef",
    background: "#fff",
  },
})

const CustomTooltip: React.FC<CustomTooltipProps> = (props) => {
  const { text, children, position } = props

  return (
    <CustomWidthTooltip title={InnerContent(text)} placement={position}>
      <div>{children}</div>
    </CustomWidthTooltip>
  )
}

export default CustomTooltip
