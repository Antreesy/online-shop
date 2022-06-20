import { useState } from "react"

import Image, { ImageProps } from "next/image"
import { Button, ItemCounter, Price } from "UI"

import s from "../cartItemList.module.scss"
import { useTranslation } from "next-i18next"

export interface CartItemProps {
  title: string
  subtitle: string
  description: string
  imageSrc: ImageProps["src"]
  price: number
  oldPrice?: number
  amount: number
  index: number
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const {
    title,
    subtitle,
    imageSrc,
    description,
    price,
    oldPrice,
    amount,
    index,
  } = props
  const [currentAmount, setCurrentAmount] = useState<number>(amount)
  const total = price * currentAmount
  const { t } = useTranslation("orderCart")

  return (
    <div className={s.cart_item} key={index}>
      <div className={s.item}>
        <Button
          icon
          iconLeft="trash_can"
          variant="text"
          className={s.delete_button}
        />
        <span className={s.image_wrapper}>
          <Image src={imageSrc} />
        </span>
        <span className={s.product_info}>
          <span className={s.title}>{title}</span>
          <span className={s.subtitle}>{t("orderSubTitle")}</span>
          <span className={s.description}>
            {description}
            Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer
            lacinia, lacu
          </span>
          <Price
            price={price}
            oldPrice={oldPrice}
            type="sale"
            className={s.price_mobile}
          />
        </span>
      </div>

      <div className={s.price_desktop}>
        <Price
          price={price}
          oldPrice={oldPrice}
          type="sale"
          className={s.price}
        />
      </div>
      <div className={s.counter}>
        <ItemCounter initValue={amount} onChange={setCurrentAmount} />
      </div>
      <div className={s.amount}>
        <h3>{t("orderAmount")}</h3>
        <Price price={total} />
      </div>
    </div>
  )
}
