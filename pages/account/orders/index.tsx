import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import dynamic from "next/dynamic"
import { UniversalOrdersProps } from "views/account/orders/UniversalOrders"

const UniversalOrders = dynamic<UniversalOrdersProps>(() =>
  import("views/account/orders").then((module) => module.UniversalOrders),
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
        "orders",
      ])),
    },
  }
}

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
