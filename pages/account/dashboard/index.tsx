import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { DashboardProps } from "views/account/dashboard/UniversalDashboard"
const UniversalDashboard = dynamic<DashboardProps>(() =>
  import("views/account/dashboard").then((module) => module.UniversalDashboard),
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
        "dashboard",
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

      {role === Roles.INFLUENCER && <UniversalDashboard />}
    </>
  )
}

export default Dashboard
