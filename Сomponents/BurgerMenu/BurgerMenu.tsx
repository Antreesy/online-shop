import { useState } from "react"

import Link from "next/link"
import { Drawer } from "@mui/material"

import { Button } from "UI"
import { Logo } from "../Logo"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

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
        className={s.openButton}
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
          className={s.drawerBox}
          role="presentation"
          onClick={closeDrawer()}
          onKeyDown={closeDrawer()}
        >
          <div className={s.drawerBox_header}>
            <Link href={"/"}>
              <a className={s.drawerBox_logo}>
                <Logo type="dark" />
              </a>
            </Link>
            <Button
              className={s.closeButton}
              disableElevation
              iconLeft="close_cross"
              onClick={toggleMenu}
            />
          </div>

          <List className={s.drawerBox_menu}>
            {items.map((item, index) => (
              <ListItem key={index} className={s.drawerBox_item} disablePadding>
                <Link href={item.href}>
                  <a className={s.drawerBox_link}>
                    <span>{item.text}</span>
                    <span />
                  </a>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default BurgerMenu
