import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { AddressProps } from "shared/interfaces/addressProps"

const BrandAddress = dynamic<AddressProps>(() =>
  import("views/account/address").then((module) => module.BrandAddress),
)
const CustomerAddress = dynamic<AddressProps>(() =>
  import("views/account/address").then((module) => module.CustomerAddress),
)
const InfluencerAddress = dynamic<AddressProps>(() =>
  import("views/account/address").then((module) => module.InfluencerAddress),
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
        "address",
      ])),
    },
  }
}

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
