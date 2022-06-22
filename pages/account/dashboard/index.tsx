import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import {
  BrandDashboard,
  CustomerDashboard,
  InfluencerDashboard,
} from "views/account/dashboard"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "address",
      ])),
    },
  }
}

const Dashboard: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.BRAND && <BrandDashboard role={role} />}
      {role === Roles.CUSTOMER && <CustomerDashboard />}
      {role === Roles.INFLUENCER && <InfluencerDashboard />}
    </>
  )
}

export default Dashboard
