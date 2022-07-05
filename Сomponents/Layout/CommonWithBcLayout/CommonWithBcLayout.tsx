import dynamic from "next/dynamic"

import { LayoutProps } from ".."
import { HeaderProps } from "Сomponents/Header/Header"
import { FooterProps } from "Сomponents/Footer/Footer"

const Header = dynamic<HeaderProps>(() =>
  import("Сomponents").then((module) => module.Header),
)
const Footer = dynamic<FooterProps>(() =>
  import("Сomponents").then((module) => module.Footer),
)

import { footerNav } from "shared/constants/footernav"

import s from "./commonWithBcLayout.module.scss"

const CommonWithBcLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header withBreadcrumbs />
      <main className={s.main}>{children}</main>
      <Footer links={footerNav} />
    </>
  )
}

export default CommonWithBcLayout
