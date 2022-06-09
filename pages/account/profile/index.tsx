import { NextPage } from "next"
import Head from "next/head"

import {
  BrandProfile,
  CustomerProfile,
  InfluencerProfile,
} from "views/account/profile"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

import { accountProps } from "shared/constants/brandProfile"

const Profile: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.BRAND && <BrandProfile {...accountProps} />}
      {role === Roles.CUSTOMER && <CustomerProfile {...accountProps} />}
      {role === Roles.INFLUENCER && <InfluencerProfile {...accountProps} />}
    </>
  )
}

export default Profile
