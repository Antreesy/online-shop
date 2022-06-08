import { NextPage } from "next"
import Head from "next/head"

import { orderList } from "shared/constants/orderList"

import { OrderList } from "Сomponents"

import s from "styles/pages/account/orders.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <div className={s.content}>
        <OrderList orderList={orderList} />
      </div>
    </>
  )
}

export default Profile
