import { NextPage } from "next"
import Head from "next/head"

import s from "styles/pages/faq.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <div className={s.content}>
        <h1>Payment</h1>
      </div>
    </>
  )
}

export default Profile
