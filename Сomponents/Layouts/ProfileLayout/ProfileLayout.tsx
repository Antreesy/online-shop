import React from "react"

import { Footer, Header, ProfileSidebar } from "Сomponents"
import { footerNav } from "shared/constants/footernav"
import { LayoutProps } from ".."

import { Roles } from "shared/enums/roles"
import { sidebarTabs } from "shared/constants/sidebartabs"
import s from "./profilelayout.module.scss"

interface ProfileLayoutProps extends LayoutProps {
  role: Roles
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, role }) => {
  return (
    <>
      <Header withBreadcrumbs role={role} />

      <main className={s.main}>
        <div className={s.container}>
          <aside className={s.aside}>
            <ProfileSidebar title={"My Account"} labels={sidebarTabs[role]} />
          </aside>
          <div className={s.content}>{children}</div>
        </div>
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default ProfileLayout
