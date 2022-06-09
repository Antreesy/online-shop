import { OrderItem } from "Сomponents"
import { OrderItemProps } from "../OrderItem/OrderItem"

interface OrderListProps {
  orderList: OrderItemProps[]
  className?: string
}

export const OrderList: React.FC<OrderListProps> = (props) => {
  const { orderList, className } = props
  return (
    <div className={className}>
      {orderList.length ? orderList.map((item) => {
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
      }) : (
        <span>You don't have any orders yet</span>
      )}
    </div>
  )
}
