import React from "react"
import { useRouter } from "next/router"

import Link from "next/link"
import { Popover, Typography } from "@mui/material"
import { Button } from "UI"

import s from "../Header/header.module.scss"

export type DropDownType = {
  link: string
  text: string
}

interface DropDownProps {
  labels: DropDownType[]
}

const DropDownMenu: React.FC<DropDownProps> = ({ labels }) => {
  const { pathname } = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const IsOpen = Boolean(anchorEl)
  const id = IsOpen ? "simple-popover" : undefined

  return (
    <div>
      <Button
        className={s.button_account}
        disableElevation
        iconLeft="account"
        onClick={handleClick}
        aria-describedby={id}
      />
      <Popover
        id={id}
        open={IsOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPopover-paper": {
            borderRadius: "0 0 30px 0",
            width: "188px",
            height: "262px",
          },
        }}
        className={s.dropdown_popover}
      >
        <Typography sx={{ p: 2 }}>
          {labels.map((label, index) => (
            <Link href={label.link} key={index}>
              <a className={s.menu_item}>
                <span className={pathname === label.text ? s.active : ""}>
                  {label.text}
                </span>
              </a>
            </Link>
          ))}
        </Typography>
      </Popover>
    </div>
  )
}

export default DropDownMenu
