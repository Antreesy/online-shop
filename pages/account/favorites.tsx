import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import s from "styles/pages/account/favorites.module.scss"

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
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <div className={s.content}>
        <h1>Favorites</h1>
      </div>
    </>
  )
}

export default Profile
