import React from "react"
import { Footer, Header } from "Сomponents"

import { footerNav } from "shared/constants/footernav"
import { LayoutProps } from ".."

import s from "./commonlayout.module.scss"

const CommonLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.container}>{children}</div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

export default CommonLayout
