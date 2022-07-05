import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import cn from "classnames"

import Link from "next/link"
import { Button } from "UI"
import { Breadcrumbs, BurgerMenu, Logo } from "Сomponents"
import { DrawerItems } from "shared/constants/menuItems"

import s from "./header.module.scss"
import { useAppSelector } from "store/hooks"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderMobileProps {
  className?: string
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ className }) => {
  const router = useRouter()
  const route = useAppSelector((state) => state.route.route)

  const { t } = useTranslation("common")

  const headerClassName = cn(s.header_mobile, className)

  return (
    <>
      <header className={headerClassName}>
        <div className={s.container}>
          {route === "Brand" ? (
            <Link href={"/"}>
              <a className={s.logo}>
                <Logo type="dark" />
              </a>
            </Link>
          ) : (
            <Button
              icon
              iconLeft="arrow_left"
              className={s.button}
              onClick={() => router.back()}
            />
          )}

          <h2 className={s.heading}>{route}</h2>

          <BurgerMenu items={DrawerItems} />
        </div>
        <Breadcrumbs />
      </header>
    </>
  )
}

export default HeaderMobile
