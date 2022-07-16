import { LayoutProps } from ".."

import { footerNav } from "shared/constants/footernav"

import s from "./commonMobileMenuLayout.module.scss"
import { Breadcrumbs, Footer, Header, HeaderMobile } from "Сomponents"

const CommonMobileMenuLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header className={s.desktop} />
      <HeaderMobile className={s.mobile} />
      <main className={s.main}>
        <Breadcrumbs />
        {children}
      </main>
      <Footer className={s.desktop} links={footerNav} />
    </>
  )
}

export default CommonMobileMenuLayout
