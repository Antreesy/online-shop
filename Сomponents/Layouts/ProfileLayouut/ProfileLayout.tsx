import React from "react"

import { Footer, Header, ProfileSidebar } from "Сomponents"
import { footerNav } from "shared/constants/footernav"
import { LayoutProps } from ".."

import s from "./profilelayout.module.scss"

const ProfileLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
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
          {children}
        </div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

export default ProfileLayout
