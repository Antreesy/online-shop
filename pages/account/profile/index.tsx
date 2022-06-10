import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import {
  BrandProfile,
  CustomerProfile,
  InfluencerProfile,
} from "views/account/profile"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

import { accountProps } from "shared/constants/brandProfile"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
      ])),
    },
  }
}

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
