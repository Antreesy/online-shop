import { NextPage } from "next"
import Head from "next/head"

import { Footer, Header, ProfileSidebar } from "Сomponents"

import { footerNav } from "shared/constants/footernav"

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
            <ProfileSidebar
              title={"My Account"}
              labels={[
                { link: "/account/profile", text: "Profile" },
                { link: "/account/address", text: "Address" },
                { link: "/account/orders", text: "Orders" },
                { link: "/account/payment", text: "Payment" },
                { link: "/account/notifications", text: "Notifications" },
                { link: "/account/favorites", text: "Favorites" },
                { link: "/account/help", text: "Help" },
                { link: "/account/signout", text: "Sign Out" },
              ]}
            />
          </div>

          <div className={s.content}>
            <h1>Payment</h1>
          </div>
        </div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

export default Profile
