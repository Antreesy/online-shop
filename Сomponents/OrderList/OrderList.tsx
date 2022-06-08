import { OrderItem } from "Сomponents"
import { OrderItemProps } from "../OrderItem/OrderItem"

interface OrderListProps {
  orderList: OrderItemProps[]
}

export const OrderList: React.FC<OrderListProps> = (props) => {
  const { orderList } = props
  return (
    <>
      {orderList.map((item) => {
        return (
          <OrderItem
            date={item.date}
            buyerName={item.buyerName}
            orderAmount={item.orderAmount}
            quantity={item.quantity}
            seller={item.seller}
            deliveryInfo={item.deliveryInfo}
            paymentInfo={item.paymentInfo}
          />
        )
      })}
    </>
  )
}
