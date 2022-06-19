import React from "react"
import { Footer, Header } from "Сomponents"

import { footerNav } from "shared/constants/footernav"
import { LayoutProps } from ".."

import s from "./commonWithBcLayout.module.scss"

const CommonWithBcLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header withBreadcrumbs />
      <main className={s.main}>
        <div className={s.container}>{children}</div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

export default CommonWithBcLayout
