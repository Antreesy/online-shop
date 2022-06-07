import { OrderItem } from "Сomponents"

export const OrderList: React.FC = (props) => {
  return (
    <>
      <OrderItem
        date={"011111"}
        buyerName="Yalsin Toopkaya"
        orderAmount={250}
        deliveryInfo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                sequi voluptatum ducimus, recusandae magni impedit itaque.
                Perspiciatis culpa eaque officia laborum, ullam optio beatae
                omnis quo, impedit perferendis, repellat rem"
        quantity={1313}
        seller="samamsmams"
      />
      <OrderItem
        date={"011111"}
        buyerName="Yalsin Toopkaya"
        orderAmount={250}
        deliveryInfo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                sequi voluptatum ducimus, recusandae magni impedit itaque.
                Perspiciatis culpa eaque officia laborum, ullam optio beatae
                omnis quo, impedit perferendis, repellat rem"
        quantity={1313}
        seller="samamsmams"
      />
      <OrderItem
        date={"011111"}
        buyerName="Yalsin Toopkaya"
        orderAmount={250}
        deliveryInfo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                sequi voluptatum ducimus, recusandae magni impedit itaque.
                Perspiciatis culpa eaque officia laborum, ullam optio beatae
                omnis quo, impedit perferendis, repellat rem"
        quantity={1313}
        seller="samamsmams"
      />
    </>
  )
}
