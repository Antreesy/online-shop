import { Currency } from "shared/enums/currency"
import { OrderItemProps } from "shared/interfaces/orderProps"

export const orderList: OrderItemProps[] = [
  {
    date: "10/05/21",
    buyerName: "Yalsin Topkaya",
    orderAmount: { price: 120, currency: Currency.LTL },
    deliveryInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi voluptatum ducimus, recusandae magni impedit itaque. Perspiciatis culpa eaque officia laborum, ullam optio beatae G omnis quo, impedit perferendis, repellat rem",
    quantity: 123,
    seller: "seller name here",
    paymentInfo: {
      type: "Credit Card",
      cardNumber: 123123,
      orderAmount: { price: 123, currency: Currency.LTL },
      shipping: 45,
      total: 145,
    },
  },
  {
    date: "10/05/21",
    buyerName: "Yalsin Topkaya",
    orderAmount: { price: 120, currency: Currency.LTL },
    deliveryInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi voluptatum ducimus, recusandae magni impedit itaque. Perspiciatis culpa eaque officia laborum, ullam optio beatae G omnis quo, impedit perferendis, repellat rem",
    quantity: 123,
    seller: "seller name here",
    paymentInfo: {
      type: "Credit Card",
      cardNumber: 123123,
      orderAmount: { price: 123, currency: Currency.LTL },
      shipping: 45,
      total: 145,
    },
  },
  {
    date: "10/05/21",
    buyerName: "Yalsin Topkaya",
    orderAmount: { price: 120, currency: Currency.LTL },
    deliveryInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sequi voluptatum ducimus, recusandae magni impedit itaque. Perspiciatis culpa eaque officia laborum, ullam optio beatae G omnis quo, impedit perferendis, repellat rem",
    quantity: 123,
    seller: "seller name here",
    paymentInfo: {
      type: "Credit Card",
      cardNumber: 123123,
      orderAmount: { price: 123, currency: Currency.LTL },
      shipping: 45,
      total: 145,
    },
  },
]
