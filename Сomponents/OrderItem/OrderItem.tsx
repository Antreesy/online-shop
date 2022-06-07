import { useState } from "react"
import { Button, Price } from "UI"
import { ProductItem } from "Сomponents/ProductItem"
import PaymentInfo from "./PaymentInfo"
import s from "./OrderItem.module.scss"
import img from "public/assets/img/T_shirt.png"

interface PaymentInfo {}

interface OrderItemProps {
  date: string
  quantity: number
  buyerName: string
  orderAmount: number
  deliveryInfo?: string
  seller: string
}

const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { date, quantity, buyerName, orderAmount, deliveryInfo, seller } = props

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
              <PaymentInfo
                type="Credit Card"
                cardNumber={45465}
                orderAmount={123}
                shipping={123}
                total={1232}
              />
            </div>
          </div>
          <p>
            Seller: {seller}
            <span>vndskjnvkns</span>
          </p>
          <div className={s.cardsArea}>
            <p>Was delivered</p>

            <div className={s.cards}>
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={{ price: 2000 }}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={{ price: 2000 }}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={{ price: 2000 }}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={{ price: 2000 }}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={{ price: 2000 }}
                subtitle={"subtitle"}
                title={"titile"}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default OrderItem
