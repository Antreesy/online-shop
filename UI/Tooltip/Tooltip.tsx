import { Tooltip, TooltipProps, ClickAwayListener } from "@mui/material"
import { useState } from "react"
import { Button } from "UI"

import s from "./tooltip.module.scss"

interface CustomTooltipProps {
  content?: React.ReactNode
  children: React.ReactNode
  position?: TooltipProps["placement"]
}

const customTooltipClass = {
  tooltip: s.tooltip,
  arrow: s.arrow,
}

const CustomTooltip: React.FC<CustomTooltipProps> = (props) => {
  const { content, children, position } = props
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen((prev) => !prev)
  const handleClose = () => setOpen(false)

  const InnerContent = () => (
    <div className={s.container}>
      <div className={s.content}>{content}</div>

      <div className={s.button_group}>
        <Button className={s.button_left} onClick={handleClose}>
          Approve
        </Button>
        <Button className={s.button_right} onClick={handleClose}>
          Reject
        </Button>
      </div>
    </div>
  )

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Tooltip
        arrow
        open={open}
        onClose={handleClose}
        disableFocusListener
        disableHoverListener
        classes={customTooltipClass}
        title={<InnerContent />}
        placement={position}
      >
        <div onClick={handleOpen}>{children}</div>
      </Tooltip>
    </ClickAwayListener>
  )
}

export default CustomTooltip
