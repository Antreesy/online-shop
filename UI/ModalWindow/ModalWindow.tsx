import { FC, ReactNode } from "react"

import s from "./modalWindow.module.scss"
import { Modal } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { Box } from "@mui/system"
import { Icon } from "UI/Icon"

interface ModalWindowProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  iconType?: string
  title?: string
  textContent?: string
  children?: ReactNode
}

const ModalWindow: FC<ModalWindowProps> = (props) => {
  const {
    open,
    setOpen,
    iconType = false,
    title,
    textContent,
    children,
  } = props

  return (
    <Modal
      classes={{ root: s.modal }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box className={s.content} onClick={(e) => e.stopPropagation()}>
        <CloseIcon className={s.close} onClick={() => setOpen(false)} />
        {iconType ? (
          <div className={s.iconWrapper}>
            <Icon type={iconType} />
          </div>
        ) : null}
        <div className={s.title}>{title}</div>
        <div className={s.textContent}>{textContent}</div>
        {children}
      </Box>
    </Modal>
  )
}

export default ModalWindow
