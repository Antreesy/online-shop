import { Price, PriceProps } from "UI"

import s from "./OrderItem.module.scss"

export interface PaymentInfoProps {
  type?: string
  cardNumber: number
  orderAmount: PriceProps
  shipping: number
  total: number
}

const PaymentInfo: React.FC<PaymentInfoProps> = (props) => {
  const { type, cardNumber, orderAmount, shipping, total } = props
  return (
    <>
      <p>
        <span>Payment method :</span>
        <span>
          {type} {cardNumber}
        </span>
      </p>
      <p>
        <span>Order Amount :</span>
        <span>
          <Price price={orderAmount.price} currency={orderAmount.currency} />
        </span>
      </p>
      <p>
        <span>Shipping cost :</span>
        <span>
          <Price price={shipping} />
        </span>
      </p>
      <p>
        <span>Total amount :</span>
        <span>
          <Price price={total} />
        </span>
      </p>
      <p className={s.amountPaid}>
        <span>Amount Paid :</span>
        <span>
          <Price price={total} />
        </span>
      </p>
    </>
  )
}
export default PaymentInfo
