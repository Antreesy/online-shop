import React from "react"
import { Footer, Header } from "Сomponents"

import { footerNav } from "shared/constants/footernav"
import { LayoutProps } from ".."

import s from "./commonlayout.module.scss"

const CommonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header withBreadcrumbs />
      <main className={s.main}>{children}</main>
      <Footer links={footerNav} />
    </>
  )
}

export default CommonLayout
