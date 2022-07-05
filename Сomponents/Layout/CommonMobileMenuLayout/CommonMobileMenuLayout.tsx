import dynamic from "next/dynamic"

import { LayoutProps } from ".."
import { HeaderProps } from "Сomponents/Header/Header"
import { HeaderMobileProps } from "Сomponents/Header/HeaderMobile"
import { FooterProps } from "Сomponents/Footer/Footer"

const Header = dynamic<HeaderProps>(() =>
  import("Сomponents").then((module) => module.Header),
)
const HeaderMobile = dynamic<HeaderMobileProps>(() =>
  import("Сomponents").then((module) => module.HeaderMobile),
)
const Footer = dynamic<FooterProps>(() =>
  import("Сomponents").then((module) => module.Footer),
)

import { footerNav } from "shared/constants/footernav"

import s from "./commonMobileMenuLayout.module.scss"

const CommonMobileMenuLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header className={s.desktop} withBreadcrumbs />
      <HeaderMobile className={s.mobile} />
      <main className={s.main}>{children}</main>
      <Footer className={s.desktop} links={footerNav} />
    </>
  )
}

export default CommonMobileMenuLayout
