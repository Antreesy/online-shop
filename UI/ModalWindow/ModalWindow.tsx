import { FC, ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { Box, IconButton, Modal } from "@mui/material"
import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./modalWindow.module.scss"

interface ModalWindowProps {
  isOpen: boolean
  onClose: () => void
  iconType?: IconType
  children?: ReactNode
  title?: ReactNode
}

const ModalWindow: FC<ModalWindowProps> = (props) => {
  const { isOpen, onClose, iconType = false, children, title } = props

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(
        <Modal classes={{ root: s.modal }} open={isOpen} onClose={onClose}>
          <Box className={s.content} onClick={(e) => e.stopPropagation()}>
            <IconButton className={s.close} onClick={onClose}>
              <div className={s.round}>
                <Icon color={"#fff"} type="close_cross" />
              </div>
            </IconButton>

            {iconType ? (
              <div className={s.icon_wrapper}>
                <Icon type={iconType} />
              </div>
            ) : null}
            <div className={s.title}>{title}</div>
            <div className={s.inner_content}>{children}</div>
          </Box>
        </Modal>,
        document.getElementById("modal__root")!,
      )
    : null
}

export default ModalWindow
