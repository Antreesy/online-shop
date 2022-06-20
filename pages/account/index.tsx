import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { useEffect } from "react"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "header",
        "footer",
        "sidebar",
      ])),
    },
  }
}

const Account: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/account/profile")
  }, [])

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>
    </>
  )
}

export default Account
