import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { UniversalFavorites } from "views/account/favorites"

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
      ])),
    },
  }
}

const Favorites: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.CUSTOMER && <UniversalFavorites />}
    </>
  )
}

export default Favorites
