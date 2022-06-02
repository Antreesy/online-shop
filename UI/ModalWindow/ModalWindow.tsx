import { FC, ReactNode, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import s from "./modalWindow.module.scss"
import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { Icon } from "UI/Icon"
import { IconType } from "UI/Icon/Icon"

interface ModalWindowProps {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  iconType?: IconType
  children?: ReactNode
}

const ModalWindow: FC<ModalWindowProps> = (props) => {
  const { isOpen, setOpen, iconType = false, children } = props

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(
        <Modal
          classes={{ root: s.modal }}
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <Box className={s.content} onClick={(e) => e.stopPropagation()}>
            <Icon
              className={s.close}
              type="close_cross"
              onClick={() => setOpen(false)}
            />
            {iconType ? (
              <div className={s.iconWrapper}>
                <Icon type={iconType} />
              </div>
            ) : null}
            {children}
          </Box>
        </Modal>,
        document.getElementById("modal__root"),
      )
    : null
}

export default ModalWindow
