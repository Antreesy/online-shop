import { NextPage } from "next"
import Head from "next/head"

import { orderList } from "shared/constants/orderList"

import { OrderList, SectionHeader } from "Сomponents"

import s from "styles/pages/account/orders.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <SectionHeader
        title="My Orders"
        actionItem="All Orders"
        className={s.header}
      />
      <OrderList orderList={orderList} className={s.order_list} />
    </>
  )
}

export default Profile
