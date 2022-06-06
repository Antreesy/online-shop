import { NextPage } from "next"
import Head from "next/head"

import { Footer, Header, ProfileSidebar } from "Сomponents"

import { footerNav } from "shared/constants/footernav"
import { sidebarItems } from "shared/constants/sidebarItems"

import s from "styles/pages/faq.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <Header withBreadcrumbs />

      <main className={s.main}>
        <div className={s.container}>
          <div className={s.aside}>
            <ProfileSidebar title={"My Account"} labels={sidebarItems} />
          </div>

          <div className={s.content}>
            <h1>Help</h1>
          </div>
        </div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

export default Profile
