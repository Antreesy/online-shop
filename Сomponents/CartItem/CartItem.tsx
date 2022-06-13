import Image from "next/image"
import { Button, ItemCounter, Price } from "UI"
import img from "public/assets/img/product-img.png"

import s from "./CartItem.module.scss"

export interface CartItemProps {
  title: string
  subtitle: string
  description: string
  price: number
  oldPrice?: number
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const { title, subtitle, description, price, oldPrice } = props
  return (
    <div className={s.cartItem}>
      <div className={s.productItem}>
        <Button
          icon
          iconLeft="trash_can"
          variant="text"
          className={s.trashBtn}
        />
        <span className={s.imageWrapper}>
          <Image src={img} className={s.productImage} />
        </span>
        <span className={s.productInfo}>
          <span className={s.title}>{title}</span>
          <span className={s.subtitle}>{subtitle}</span>
          <span className={s.description}>
            {description}
            Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer
            lacinia, lacu
          </span>
          <Price
            price={price}
            oldPrice={oldPrice}
            type="sale"
            className={s.mobilePrice}
          />
        </span>
      </div>
      <div className={s.price}>
        <Price
          price={price}
          oldPrice={oldPrice}
          type="sale"
          className={s.priceBlock}
        />
      </div>
      <div className={s.counter}>
        <ItemCounter />
      </div>
      <div className={s.amountPrice}>
        <h3>Order amount</h3>
        <Price price={price} />
      </div>
    </div>
  )
}

export default CartItem
