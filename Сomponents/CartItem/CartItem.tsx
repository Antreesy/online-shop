import Image from "next/image"
import { Button, ItemCounter, Price } from "UI"
import img from "public/assets/img/product-img.png"

import s from "./CartItem.module.scss"
import { Counter } from "Сomponents/Counter"

const CartItem: React.FC = () => {
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
          <span className={s.title}>Beymen</span>
          <span className={s.subtitle}>Knitted dress with metallic thread</span>
          <span className={s.description}>
            Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer
            lacinia, lacu
          </span>
          <Price
            price={2000}
            oldPrice={1999}
            type="sale"
            className={s.mobilePrice}
          />
        </span>
      </div>
      <div className={s.price}>
        <Price
          price={2000}
          oldPrice={1999}
          type="sale"
          className={s.priceBlock}
        />
      </div>
      <div className={s.counter}>
        <ItemCounter />
      </div>
      <div className={s.amountPrice}>
        <h3>Order amount</h3>
        <Price price={2000} />
      </div>
    </div>
  )
}

export default CartItem
