import { useState } from "react"
import cn from "classnames"
import { i18n } from "next-i18next"

import Link from "next/link"
import { Popover, Typography } from "@mui/material"
import { Button } from "UI"

import { languages } from "shared/constants/languages"

import s from "../header.module.scss"

interface LanguageSelectProps {
  top?: boolean
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ top }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-describedby="header_lang_dropdown"
        variant={top ? "text" : "contained"}
        onClick={handleClick}
        disableElevation
        className={top ? s.button_lang_top : s.button_lang_bottom}
        iconRight="arrow_down"
      >
        {(i18n?.language || "EN").toUpperCase()}
      </Button>

      <Popover
        id="header_lang_dropdown"
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
          {languages.map((item, index) => (
            <li key={index} className={s.menu_item}>
              <Link href="" locale={item.code}>
                <a
                  className={cn(s.link)}
                  onClick={() => {
                    i18n?.changeLanguage(item.code)
                  }}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  )
}

export default LanguageSelect
