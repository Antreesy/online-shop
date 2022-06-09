import { Currency } from "shared/enums/currency"

export interface PriceProps {
  price: number
  oldPrice?: number
  currency?: Currency
  currencyFirst?: boolean
  type?: "order" | "cart" | "sale" | "sale_black" | "primary"
}

export interface PaymentInfoProps {
  type?: string
  cardNumber: number
  orderAmount: PriceProps
  shipping: number
  total: number
}

export interface OrderItemProps {
  date: Date | string
  quantity: number
  buyerName: string
  orderAmount: PriceProps
  deliveryInfo?: string
  seller: string
  paymentInfo: PaymentInfoProps
}
