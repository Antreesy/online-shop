import { useState } from "react"
import { productItems } from "shared/constants/productItems"

import { Button } from "UI"
import { ProductItem } from "Сomponents"
import PaymentInfo, { PaymentInfoProps } from "./PaymentInfo"

import s from "./OrderItem.module.scss"

export interface OrderItemProps {
  date: string
  quantity: number
  buyerName: string
  orderAmount: number
  deliveryInfo?: string
  seller: string
  paymentInfo: PaymentInfoProps
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const {
    date,
    quantity,
    buyerName,
    orderAmount,
    deliveryInfo,
    seller,
    paymentInfo,
  } = props

  const [detailVisible, setdetailVisible] = useState(false)
  return (
    <div className={s.orderItem}>
      <div className={s.mainInfo}>
        <div className={s.orderTop}>
          <div className={s.topLeft}>
            <div className={s.cashItem}>
              <p className={s.title}>Order date:</p>
              <p>{date}</p>
            </div>
            <div className={s.cashItem}>
              <p className={s.title}>Product quantuty:</p>
              <p>{quantity}</p>
            </div>
            <div className={s.cashItem}>
              <p className={s.title}>Buyer:</p>
              <p>{buyerName}</p>
            </div>
          </div>

          <div className={s.topRight}>
            <p className={s.title}>Order amount:</p>
            <p>{orderAmount}</p>
          </div>
        </div>
        <div className={s.orderBottom}>
          <div className={s.userBox}>
            <Button iconLeft="account" className={s.userBtn} variant={"text"} />
            <span>Was delivered</span>
          </div>
          <Button
            className={s.detailBtn}
            onClick={() => setdetailVisible(!detailVisible)}
          >
            Order Detail
          </Button>
        </div>
      </div>
      {detailVisible && (
        <>
          <p>
            My Orders Detail <span>cssdvdsvds</span>
          </p>
          <div className={s.ordersInformation}>
            <div className={s.deliveryInfo}>
              <h2>Delivery information</h2>
              <p>{deliveryInfo}</p>
            </div>

            <div className={s.paymentInfo}>
              <h2>Payment information</h2>
              <PaymentInfo {...paymentInfo} />
            </div>
          </div>
          <p>
            Seller: {seller}
            <span>vndskjnvkns</span>
          </p>
          <div className={s.cardsArea}>
            <p>Was delivered</p>

            <div className={s.cards}>
              {productItems.map((item) => {
                return (
                  <ProductItem
                    description={item.description}
                    id={item.id}
                    imageSrc={item.imageSrc}
                    price={item.price}
                    subtitle={item.subtitle}
                    title={item.title}
                  />
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default OrderItem
