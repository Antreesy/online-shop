import cn from "classnames"

import s from "./price.module.scss"

enum CurrencyType {
  LT = "LT",
  USD = "USD",
}

interface PriceProps {
  price: number
  oldPrice?: number
  currency?: CurrencyType
  currencyFirst?: boolean
  type?: "order" | "cart" | "old" | "sale" | "sale_black" | "primary"
}

type PriceElement = {
  order: JSX.Element
  cart: JSX.Element
  primary: JSX.Element
  old: JSX.Element
  sale: JSX.Element
  sale_black: JSX.Element
}

const Price: React.FC<PriceProps> = (props) => {
  const {
    price,
    currency = "TL",
    currencyFirst = false,
    type = "order",
    oldPrice = null,
  } = props

  const priceClass = cn(s.price, {
    [s.order]: type === "order",
    [s.cart]: type === "cart",
    [s.primary]: type === "primary",
    [s.sale]: type === "sale",
    [s.sale_black]: type === "sale_black",
  })

  const priceElement: PriceElement = {
    order: <span className={priceClass}>{`${price}${currency}`}</span>,
    cart: <span className={priceClass}>{`${currency}${price}`}</span>,
    primary: <span className={priceClass}>{`${price} ${currency}`}</span>,
    old: (
      <span className={s[`old_vs_${type}`]}>{`${oldPrice} ${currency}`}</span>
    ),
    sale: <span className={priceClass}>{`${price} ${currency}`}</span>,
    sale_black: <span className={priceClass}>{`${price} ${currency}`}</span>,
  }

  return (
    <>
      {!oldPrice ? (
        <div className={s.price}>{priceElement[type]}</div>
      ) : (
        <div className={s.price_wrapper}>
          <div className={s.price}>{priceElement["old"]}</div>
          <div className={s.price}>{priceElement[type]}</div>
        </div>
      )}
    </>
  )
}

export { Price }
