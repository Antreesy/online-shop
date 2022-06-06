import { useState } from "react"
import { Button, Price } from "UI"
import { ProductItem } from "Сomponents/ProductItem"
import s from "./OrderItem.module.scss"
import img from "public/assets/img/T_shirt.png"

const OrderItem: React.FC = () => {
  const [detailVisible, setdetailVisible] = useState(false)
  return (
    <div className={s.orderItem}>
      <div className={s.mainInfo}>
        <div className={s.orderTop}>
          <div className={s.topLeft}>
            <div className={s.cashItem}>
              <p className={s.title}>Order date:</p>
              <p>787879</p>
            </div>
            <div className={s.cashItem}>
              <p className={s.title}>Product quantuty:</p>
              <p>787879</p>
            </div>
            <div className={s.cashItem}>
              <p className={s.title}>Buyer:</p>
              <p>787879</p>
            </div>
          </div>

          <div className={s.topRight}>
            <p className={s.title}>Order amount:</p>
            <p>651655</p>
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
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                sequi voluptatum ducimus, recusandae magni impedit itaque.
                Perspiciatis culpa eaque officia laborum, ullam optio beatae
                omnis quo, impedit perferendis, repellat rem?
              </p>
              <p>fjefe wfoiw oj;whf wihfoiwhfohweoifj</p>
            </div>

            <div className={s.paymentInfo}>
              <h2>Payment information</h2>
              <p>
                <span>Payment method :</span>
                <span>Credit Card ******569</span>
              </p>
              <p>
                <span>Payment method :</span>
                <span>Credit Card ******569</span>
              </p>
              <p>
                <span>Payment method :</span>
                <span>Credit Card ******569</span>
              </p>
              <p>
                <span>Payment method :</span>
                <span>Credit Card ******569</span>
              </p>
              <p className={s.amountPaid}>
                <span>Payment method :</span>
                <span>Credit Card ******569</span>
              </p>
            </div>
          </div>
          <p>
            Seller: Lorem ipsum 12345 <span>vndskjnvkns</span>
          </p>
          <div className={s.cardsArea}>
            <p>Was delivered</p>

            <div className={s.cards}>
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={1000}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={1000}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={1000}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={1000}
                subtitle={"subtitle"}
                title={"titile"}
              />
              <ProductItem
                description="Lorem ipsum dolor  Excepturi ipsam distinctio voluptatum eum, illo eos delectus neque "
                id={1}
                imageSrc={img}
                price={1000}
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
