import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { UniversalHelpProps } from "views/account/help/UniversalHelp"
const UniversalHelp = dynamic<UniversalHelpProps>(() =>
  import("views/account/help").then((module) => module.UniversalHelp),
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
      ])),
    },
  }
}

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
