import { NextPage } from "next"
import Head from "next/head"

import UniversalHelp from "./roles/UniversalHelp"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

const Help: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.BRAND && <UniversalHelp />}
      {role === Roles.CUSTOMER && <UniversalHelp />}
      {role === Roles.INFLUENCER && <UniversalHelp />}
    </>
  )
}

export default Help
