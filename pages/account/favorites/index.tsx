import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { UniversalFavoritesProps } from "views/account/favorites/UniversalFavorites"
const UniversalFavorites = dynamic<UniversalFavoritesProps>(() =>
  import("views/account/favorites").then((module) => module.UniversalFavorites),
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
        "favorites",
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
