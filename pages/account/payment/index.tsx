import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { UniversalPaymentProps } from "views/account/payment/UniversalPayment"
const UniversalPayment = dynamic<UniversalPaymentProps>(() =>
  import("views/account/payment").then((module) => module.UniversalPayment),
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
        "payment",
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

      {role === Roles.CUSTOMER && <UniversalPayment />}
    </>
  )
}

export default Profile
