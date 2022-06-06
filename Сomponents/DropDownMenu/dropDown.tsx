import * as React from "react"
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import { Button } from "../../UI"
import s from "../Header/header.module.scss"
import sn from "./dropDown.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"

type dropDownType = {
  link: string
  text: string
}

interface DropDownProps {
  labels: dropDownType[]
}

export const DropDown: React.FC<DropDownProps> = (props) => {
  const { labels } = props
  const { pathname } = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

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
        open={open}
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
        className={sn.popover}
      >
        <Typography sx={{ p: 2 }}>
          {labels.map((label, index) => (
            <Link href={label.link} key={index}>
              <a key={index} className={sn.MenuItem}>
                <span className={pathname === label.text ? sn.active : ""}>
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
