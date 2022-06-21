import { useTranslation } from "next-i18next"
import dynamic from "next/dynamic"

import { LayoutProps } from ".."
import { HeaderProps } from "Сomponents/Header/Header"
import { NavigationProps } from "Сomponents/Footer/Navigation"
import { ProfileSidebarProps } from "Сomponents/ProfileSidebar/ProfileSidebar"

const Header = dynamic<HeaderProps>(() =>
  import("Сomponents").then((module) => module.Header),
)
const Footer = dynamic<NavigationProps>(() =>
  import("Сomponents").then((module) => module.Footer),
)
const ProfileSidebar = dynamic<ProfileSidebarProps>(() =>
  import("Сomponents").then((module) => module.ProfileSidebar),
)

import { RoleSwitcher } from "Сomponents/Examples/RoleSwitcher"

import { Roles } from "shared/enums/roles"
import { footerNav } from "shared/constants/footernav"
import { sidebarTabs } from "shared/constants/sidebartabs"

import s from "./profilelayout.module.scss"

interface ProfileLayoutProps extends LayoutProps {
  role: Roles
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, role }) => {
  const { t } = useTranslation("sidebar")
  return (
    <>
      <Header withBreadcrumbs role={role} />
      {/* // TODO delete after auth fix */}
      <RoleSwitcher />

      <main className={s.main}>
        <div className={s.container}>
          <aside className={s.aside}>
            <ProfileSidebar title={t("myAccount")} labels={sidebarTabs[role]} />
          </aside>
          <div className={s.content}>{children}</div>
        </div>
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default ProfileLayout
