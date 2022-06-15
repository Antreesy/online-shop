import { customInfo, orderInfo } from "../../pages/order-info"

export const OrderInfoItems: customInfo & orderInfo = {
  customerInfo: [
    {
      customerSurname: "Name Surname",
      customerAddress: "Address",
      customerPhone: "Phone",
      customerEmail: "E-Mail",
      name: "Yalçın Topkaya",
      address: "ILONSI AB, Aschebergsgatan 21, 41127, Göteborg info@ilonsi.com",
      phone: "0530 555 55 55",
      email: "yalcin.topkaya@gmail.com",
    },
  ],
  orderInfo: [
    {
      orderSurname: "Order Surname",
      orderDate: "Order Date",
      orderDeliveryMethod: "Delivery Method",
      name: "123456789",
      date: "03.08.2021",
      method: "Standart Teslim",
    },
  ],
}
