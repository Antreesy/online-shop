import { useState } from "react"

import Link from "next/link"
import { Box, Drawer, List, ListItem } from "@mui/material"
import { Button } from "UI"
import { Logo } from "Сomponents"

import s from "./burgerMenu.module.scss"

export type DrawerItemTypes = { text: string; href: string }

interface BurgerMenuProps {
  items: DrawerItemTypes[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
  const { items } = props

  const [open, setOpen] = useState<boolean>(false)

  const closeDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setOpen(false)
  }

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <Button
        className={s.open_button}
        disableElevation
        icon
        onClick={toggleMenu}
      />
      <Drawer
        anchor={"left"}
        open={open}
        onClose={closeDrawer()}
        PaperProps={{
          sx: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <Box
          className={s.drawer}
          role="presentation"
          onClick={closeDrawer()}
          onKeyDown={closeDrawer()}
        >
          <div className={s.drawer_header}>
            <Link href={"/"}>
              <a className={s.drawer_logo}>
                <Logo type="dark" />
              </a>
            </Link>
            <Button
              className={s.close_button}
              disableElevation
              iconLeft="close_cross"
              onClick={toggleMenu}
            />
          </div>

          <div className={s.drawer_main}>
            <List className={s.drawer_menu}>
              {items.map((item, index) => (
                <ListItem key={index} className={s.drawer_item} disablePadding>
                  <Link href={item.href}>
                    <a className={s.drawer_link}>
                      <span>{item.text}</span>
                      <span />
                    </a>
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Box>
      </Drawer>
    </>
  )
}

export default BurgerMenu
