import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { UniversalNotificationsProps } from "views/account/notifications/UniversalNotifications"
const UniversalNotifications = dynamic<UniversalNotificationsProps>(() =>
  import("views/account/notifications").then(
    (module) => module.UniversalNotifications,
  ),
)

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "sidebar",
        "notifications",
      ])),
    },
  }
}

const Notifications: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.BRAND && <UniversalNotifications />}
      {role === Roles.CUSTOMER && <UniversalNotifications />}
      {role === Roles.INFLUENCER && <UniversalNotifications />}
    </>
  )
}

export default Notifications
