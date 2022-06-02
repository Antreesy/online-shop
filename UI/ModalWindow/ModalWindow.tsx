import { FC, ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { IconButton, Modal } from "@mui/material"
import { Box } from "@mui/system"
import { Icon } from "UI/Icon"
import { IconType } from "UI/Icon/Icon"

import s from "./modalWindow.module.scss"

interface ModalWindowProps {
  isOpen: boolean
  onClose: () => void
  iconType?: IconType
  children?: ReactNode
}

const ModalWindow: FC<ModalWindowProps> = (props) => {
  const { isOpen, onClose, iconType = false, children } = props

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
              <Icon type="close_cross" />
            </IconButton>

            {iconType ? (
              <div className={s.iconWrapper}>
                <Icon type={iconType} />
              </div>
            ) : null}
            {children}
          </Box>
        </Modal>,
        document.getElementById("modal__root")!,
      )
    : null
}

export default ModalWindow