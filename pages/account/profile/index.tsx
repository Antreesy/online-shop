import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { BrandProfileProps } from "shared/interfaces/profileProps"
import { CustomerProfileProps } from "views/account/profile/CustomerProfile"
import { InfluencerProfileProps } from "views/account/profile/InfluencerProfile"

const BrandProfile = dynamic<BrandProfileProps>(() =>
  import("views/account/profile").then((module) => module.BrandProfile),
)
const CustomerProfile = dynamic<CustomerProfileProps>(() =>
  import("views/account/profile").then((module) => module.CustomerProfile),
)
const InfluencerProfile = dynamic<InfluencerProfileProps>(() =>
  import("views/account/profile").then((module) => module.InfluencerProfile),
)

import { Roles } from "shared/enums/roles"
import { accountProps } from "shared/constants/brandProfile"
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
        "profile",
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
