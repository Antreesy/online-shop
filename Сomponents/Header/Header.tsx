import Link from "next/link"
import { Button, SocialIcon } from "UI"
import { Breadcrumbs, BurgerMenu, Logo } from "Сomponents"

import { DrawerItems } from "shared/constants/menuItems"

import s from "./header.module.scss"
import { DropDown } from "../DropDownMenu"
import * as React from "react"
import {dropdownItems} from "../../shared/constants/dropdownItems";

interface HeaderProps {
  withBreadcrumbs?: boolean
}

const Header: React.FC<HeaderProps> = ({ withBreadcrumbs }) => {
  return (
    <header className={s.header}>
      <div className={s.top_group}>
        <Link href="mailto:info@ilonsi.com" className={s.email}>
          info@ilonsi.com
        </Link>
        <span className={s.caption}>
          lipsum as it is sometimes known, is dummy
        </span>

        <div className={s.socials}>
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="youtube" />

          <Button
            className={s.button_lang_top}
            variant="text"
            disableElevation
            iconRight="arrow_down"
          >
            En
          </Button>
        </div>
      </div>
      <div className={s.bottom_group}>
        <div className={s.bottom_left_group}>
          <BurgerMenu items={DrawerItems} />
          <Button
            className={s.button_search}
            icon
            disableElevation
            iconLeft="search"
          />
        </div>

        <Link href={"/"}>
          <a className={s.logo}>
            <Logo type="light" />
          </a>
        </Link>

        <div className={s.bottom_right_group}>
          <Button
            className={s.button_account}
            disableElevation
            iconLeft="account"
          >
            Yalçın Topkaya
          </Button>
          <Button
            className={s.button_basket}
            disableElevation
            iconLeft="basket"
          >
            Basket
          </Button>
          <Button
            className={s.button_lang_bottom}
            disableElevation
            iconRight="arrow_down"
          >
            En
          </Button>
        </div>

        <div className={s.bottom_right_group_mobile}>
          <DropDown
            labels={dropdownItems}
          />
          <Button
            className={s.button_basket}
            variant="outlined"
            disableElevation
            iconLeft="basket"
          />
        </div>
      </div>

      {withBreadcrumbs && <Breadcrumbs />}
    </header>
  )
}

export default Header
