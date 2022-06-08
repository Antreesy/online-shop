import cn from "classnames"

import Link from "next/link"
import { Button, SocialIcon } from "UI"
import { Breadcrumbs, BurgerMenu, Logo } from "Сomponents"

import { DrawerItems } from "shared/constants/menuItems"
import { Roles } from "shared/enums/roles"

import s from "./header.module.scss"
import { DropDown } from "../DropDownMenu"
import * as React from "react"
import {dropdownItems} from "../../shared/constants/dropdownItems";

interface HeaderProps {
  withBreadcrumbs?: boolean
  role?: Roles
}

const Header: React.FC<HeaderProps> = ({ role, withBreadcrumbs }) => {
  return (
    <header className={cn(s.header, { [s.withBreadcrumbs]: withBreadcrumbs })}>
      <div className={s.top_group}>
        <Link href="mailto:info@ilonsi.com">
          <a className={s.email}>info@ilonsi.com</a>
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
      {/* TODO delete role after creating roles propagation */}
      {role && (
        <span
          style={{ position: "absolute", right: 0, bottom: 0, color: "red" }}
        >
          role: {role}
        </span>
      )}
    </header>
  )
}

export default Header
