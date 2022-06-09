import { NextPage } from "next"
import Head from "next/head"

import {
  BrandAddress,
  CustomerAddress,
  InfluencerAddress,
} from "views/account/address"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

const Address: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.BRAND && <BrandAddress role={role} />}
      {role === Roles.CUSTOMER && <CustomerAddress />}
      {role === Roles.INFLUENCER && <InfluencerAddress />}
    </>
  )
}

export default Address
