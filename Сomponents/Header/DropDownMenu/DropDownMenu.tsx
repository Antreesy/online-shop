import React from "react"
import { useRouter } from "next/router"
import cn from "classnames"

import Link from "next/link"
import { Popover } from "@mui/material"
import { Button, Icon } from "UI"

import s from "../header.module.scss"

export type DropDownType = {
  link: string
  text: string
}

interface DropDownProps {
  buttonText?: string
  buttonHiddenText?: string
  labels: DropDownType[]
}

const DropDownMenu: React.FC<DropDownProps> = (props) => {
  const { buttonText, buttonHiddenText, labels } = props
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const { pathname } = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={s.dropdown_wrapper}>
      <Button
        className={s.button_account}
        disableElevation
        iconLeft="account"
        onClick={handleClick}
        aria-describedby="header_account_dropdown"
      >
        {buttonText}
      </Button>
      {Boolean(anchorEl) && (
        <>
          <span className={s.account_dropdown_text}>{buttonHiddenText}</span>
          <Icon type="arrow_down" className={s.account_dropdown_arrow} />
        </>
      )}

      <Popover
        id="header_account_dropdown"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        elevation={1}
        classes={{
          paper: s.popover_paper,
        }}
        className={s.dropdown_popover}
      >
        <ul className={s.menu}>
          {labels.map((label, index) => (
            <li key={index} className={s.menu_item}>
              <Link href={label.link}>
                <a
                  className={cn(s.link, {
                    [s.link_active]: pathname === label.link,
                  })}
                  onClick={handleClose}
                >
                  {label.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  )
}

export default DropDownMenu
