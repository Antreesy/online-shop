import { NextPage } from "next"
import Head from "next/head"

import UniversalOrders from "./roles/UniversalOrders"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

const Orders: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.CUSTOMER && <UniversalOrders />}
      {role === Roles.INFLUENCER && <UniversalOrders />}
    </>
  )
}

export default Orders
