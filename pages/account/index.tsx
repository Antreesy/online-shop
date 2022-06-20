import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

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
