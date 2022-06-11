import cn from "classnames"
import s from "./price.module.scss"
import { Currency } from "shared/enums/currency"

export interface PriceProps {
  price: number
  oldPrice?: number
  currency?: Currency
  currencyFirst?: boolean
  type?: "order" | "cart" | "sale" | "sale_black" | "primary"
  className?: string
}

const Price: React.FC<PriceProps> = (props) => {
  const {
    price,
    currency = Currency.USD,
    currencyFirst = false,
    type = "order",
    oldPrice = null,
    className,
  } = props

  const renderPrice = (price: number) =>
    currencyFirst ? `${currency} ${price}` : `${price} ${currency}`

  return (
    <div className={cn(s.price_wrapper, className)}>
      {!!oldPrice && (type === "sale" || type === "sale_black") && (
        <div className={s.price}>
          <span className={cn(s.old, s[`old-${type}`])}>
            {renderPrice(oldPrice)}
          </span>
        </div>
      )}
      <div className={s.price}>
        <span className={s[type]}>{renderPrice(price)}</span>
      </div>
    </div>
  )
}

export default Price
