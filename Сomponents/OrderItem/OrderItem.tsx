import { useState } from "react"
import { productItems } from "shared/constants/productItems"

import { Button, Icon, Price } from "UI"
import { ProductItem } from "Сomponents"
import { PaymentInfo } from "./PaymentInfo"

import { OrderItemProps } from "shared/interfaces/orderProps"

import s from "./OrderItem.module.scss"

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
    <div>
      <div className={s.orderItem}>
        <div className={s.top_group}>
          <div className={s.top_left_group}>
            <div className={s.text_block}>
              <p className={s.title}>Order date:</p>
              <p>{new Date(date).toLocaleDateString()}</p>
            </div>
            <div className={s.text_block}>
              <p className={s.title}>Product quantuty:</p>
              <p>{quantity}</p>
            </div>
            <div className={s.text_block}>
              <p className={s.title}>Buyer:</p>
              <p>{buyerName}</p>
            </div>
          </div>

          <div className={s.top_right_group}>
            <p className={s.title}>Order amount:</p>
            <Price price={orderAmount.price} currency={orderAmount.currency} />
          </div>
        </div>

        <div className={s.bottom_group}>
          <div className={s.user_block}>
            <Icon type="account" wrapped className={s.user_block_icon} />
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
        <div className={s.orderDetails}>
          <p className={s.order_subheader}>
            My Orders Detail <span>Order Date: 17.12.2021 - 12:39</span>
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
          <p className={s.order_subheader}>
            Seller: {seller}
            <span>Invoice Expense</span>
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
        </div>
      )}
    </div>
  )
}
export default OrderItem
