import { NextPage } from "next"
import Head from "next/head"

import { UniversalNotifications } from "views/account/notifications"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

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
