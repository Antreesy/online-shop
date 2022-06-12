import { customInfo, orderInfo } from "../../pages/order-info"

export const OrderInfoItems: customInfo & orderInfo = {
  customerInfo: [
    {
      surname: "Name Surname",
      Address: "Address",
      Phone: "Phone",
      Email: "E-Mail",
      name: "Yalçın Topkaya",
      address: "ILONSI AB, Aschebergsgatan 21, 41127, Göteborg info@ilonsi.com",
      phone: "0530 555 55 55",
      email: "yalcin.topkaya@gmail.com",
    },
  ],
  orderInfo: [
    {
      OrderSurname: "Order Surname",
      OrderDate: "Order Date",
      OrderDeliveryMethod: "Delivery Method",
      name: "123456789",
      date: "03.08.2021",
      method: "Standart Teslim",
    },
  ],
}
