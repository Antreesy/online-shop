import { Tooltip, TooltipProps } from "@mui/material"
import { Button } from "UI"

import s from "./tooltip.module.scss"

interface CustomTooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: TooltipProps["placement"]
}

const customTooltipClass = {
  tooltip: s.tooltip,
  arrow: s.arrow,
}

const CustomTooltip: React.FC<CustomTooltipProps> = (props) => {
  const { content, children, position } = props
  const InnerContent = () => (
    <div className={s.container}>
      <div className={s.content}>{content}</div>

      <div className={s.button_group}>
        <Button className={s.button_left}>Approve</Button>
        <Button className={s.button_right}>Reject</Button>
      </div>
    </div>
  )

  return (
    <Tooltip
      arrow
      classes={customTooltipClass}
      title={<InnerContent />}
      placement={position}
    >
      <div>{children}</div>
    </Tooltip>
  )
}

export default CustomTooltip
