import { useState } from "react"

import Link from "next/link"
import { Box, Drawer } from "@mui/material"
import { ColorPicker } from "Сomponents"
import { Accordion, Button, CheckboxGroup, Slider } from "UI"

import { colors } from "shared/constants/colors"

import s from "./filterSidebar.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FilterSidebarProps {}

export const FilterSidebar: React.FC<FilterSidebarProps> = () => {
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

  const FilterContent = () => (
    <div className={s.sidebar}>
      <Accordion
        initialOpen
        header={"Gender"}
        className={s.sidebar__accordion}
        summaryClassName={s.sidebar__accordion__summary}
        iconClassName={s.sidebar__accordion__icon}
      >
        <CheckboxGroup
          className={s.checkboxes}
          inColumn
          color="#000"
          labels={["Men", "Women", "Unisex"]}
        />
      </Accordion>
      <Accordion
        initialOpen
        header={"Category"}
        className={s.sidebar__accordion}
        summaryClassName={s.sidebar__accordion__summary}
        iconClassName={s.sidebar__accordion__icon}
      >
        <CheckboxGroup
          className={s.checkboxes}
          inColumn
          color="#000"
          labels={["Dress", "Shoes", "Clothing", "Skirt", "Shorts", "Hats"]}
        />
      </Accordion>
      <Accordion
        initialOpen
        header={"Brand"}
        className={s.sidebar__accordion}
        summaryClassName={s.sidebar__accordion__summary}
        iconClassName={s.sidebar__accordion__icon}
      >
        <CheckboxGroup
          className={s.checkboxes}
          inColumn
          color="#000"
          labels={[
            "Adidas",
            "Beymen",
            "Nike",
            "Dolce&Gabbana",
            "Reebok",
            "Pull & Bear",
          ]}
        />
      </Accordion>
      <Accordion
        initialOpen
        header={"Size"}
        className={s.sidebar__accordion}
        summaryClassName={s.sidebar__accordion__summary}
        iconClassName={s.sidebar__accordion__icon}
      >
        <CheckboxGroup
          className={s.checkboxes}
          inColumn
          color="#000"
          labels={["S", "M", "L", "XL", "XXL"]}
        />
      </Accordion>
      <Accordion
        initialOpen
        header={"Color"}
        className={s.sidebar__accordion}
        summaryClassName={s.sidebar__accordion__summary}
        iconClassName={s.sidebar__accordion__icon}
      >
        <ColorPicker className={s.sidebar__color_picker} colors={colors} />
      </Accordion>
      <div className={s.sidebar__price_slider}>
        <span>Price</span>
        <Slider
          min={0}
          max={50}
          value={[0, 50]}
          className={s.sidebar__price_slider_wrapper}
        />
      </div>
      <Button onClick={closeDrawer()} className={s.sidebar__btn}>
        Apply
      </Button>
    </div>
  )

  return (
    <>
      <div className={s.desktop}>
        <FilterContent />
      </div>

      <div className={s.mobile}>
        <Button
          className={s.open_button}
          disableElevation
          variant="outlined"
          iconRight="arrow_down"
          onClick={toggleMenu}
        >
          Filter
        </Button>
        <Drawer
          anchor={"left"}
          open={open}
          onClose={closeDrawer()}
          PaperProps={{
            sx: { backgroundColor: "transparent", boxShadow: "none" },
          }}
        >
          <Box className={s.drawer} role="presentation">
            <div className={s.drawer_header}>
              <Button
                className={s.button}
                disableElevation
                iconLeft="close_cross"
                onClick={toggleMenu}
              />

              <span className={s.heading}>Filtrele</span>

              <Link href={"/"}>
                <a className={s.link}>Temizle</a>
              </Link>
            </div>

            <div className={s.drawer_main}>
              <FilterContent />
            </div>
          </Box>
        </Drawer>
      </div>
    </>
  )
}
