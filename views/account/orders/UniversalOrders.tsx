import { OrderList, SectionHeader } from "Сomponents"

import { orderList } from "shared/constants/orderList"

import s from "styles/pages/account/orders.module.scss"

const UniversalOrders: React.FC = () => {
  return (
    <>
      <SectionHeader
        title="My Orders"
        actionItem="All Orders"
        className={s.header}
      />
      <OrderList orderList={orderList} className={s.order_list} />
    </>
  )
}

export default UniversalOrders
