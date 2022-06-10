import { OrderList, SectionHeader } from "Сomponents"

import { orderList } from "shared/constants/orderList"

import s from "styles/pages/account/orders.module.scss"
import { useTranslation } from "next-i18next"

const UniversalOrders: React.FC = () => {
  const { t } = useTranslation("orders")
  return (
    <>
      <SectionHeader
        title={t("title")}
        actionItem={t("All orders")}
        className={s.header}
      />
      <OrderList orderList={orderList} className={s.order_list} />
    </>
  )
}

export default UniversalOrders
