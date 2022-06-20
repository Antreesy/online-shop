import cn from "classnames"
import { useTranslation } from "next-i18next"

import Link from "next/link"
import { Button, SocialIcon } from "UI"
import { Breadcrumbs, BurgerMenu, Logo } from "Сomponents"
import { DropDownMenu } from "./DropDownMenu"
import { LanguageSelect } from "./LanguageSelect"

import { dropdownItems } from "shared/constants/dropdownItems"
import { DrawerItems } from "shared/constants/menuItems"
import { Roles } from "shared/enums/roles"

import s from "./header.module.scss"

interface HeaderProps {
  withBreadcrumbs?: boolean
  role?: Roles
}

const Header: React.FC<HeaderProps> = ({ role, withBreadcrumbs }) => {
  const { t } = useTranslation("header")
  return (
    <header className={cn(s.header, { [s.with_breadcrumbs]: withBreadcrumbs })}>
      <div className={s.top_group}>
        <Link href="mailto:info@ilonsi.com">
          <a className={s.email}>info@ilonsi.com</a>
        </Link>
        <span className={s.caption}>{t("caption")}</span>

        <div className={s.socials}>
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="youtube" />

          <LanguageSelect top />
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
          <DropDownMenu labels={dropdownItems} buttonText="Yalçın Topkaya" />
          <Button
            className={s.button_basket}
            disableElevation
            iconLeft="basket"
          >
            {t("basket")}
          </Button>

          <LanguageSelect />
        </div>

        <div className={s.bottom_right_group_mobile}>
          <DropDownMenu
            labels={dropdownItems}
            buttonHiddenText="Yalçın Topkaya"
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
