import { useState } from "react"
import cn from "classnames"
import s from "./productItem.module.scss"

import { Icon } from "../Icon/Icon"
import Image from "next/image"

import { Price } from "UI/Price"
import { CurrencyType } from "UI/Price/Price"

import T_shirt from "public/assets/img/T_shirt.png"


interface ProductItemProps {
  title: string
  subtitle: string
  description: string
  id: string
  price: number
  image: string
  isFavorite: boolean
  oldPrice?: number
  currency?: CurrencyType
  currencyFirst?: boolean
  type: "order" | "cart" | "old" | "sale" | "sale_black" | "primary"
  addButton?: boolean
  influencer?: boolean
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const [isAddButton, toggleAddButton] = useState<boolean>(true)

  const {
    title = "Yves Saint Laurent",
    subtitle = "Black long sleeve men’s jacket",
    description = "Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu",
    id = "123fdref44f",
    price,
    image = T_shirt,
    isFavorite = true,
    oldPrice,
    currency,
    currencyFirst,
    type = "sale",
    influencer = false,
    addButton = true,
  } = props

  const toggleFavorite = () => {
    console.log("add to user favourite store")
  }

  const addToCart = () => {
    console.log("add to user favourite store")
    toggleAddButton(!isAddButton)
  }

  return (
    <div className={s.product_item_container}>
      <div className={s.product_item_top}>
        {!influencer ? (
          <div
            className={cn(s.product_favourites, { [s.isFavorite]: isFavorite })}
            onClick={toggleFavorite}
          >
            <Icon type="heart" />
          </div>
        ) : null}
        <div className={s.product_item_image}>
          <Image src={image} className={s.img} />
        </div>
      </div>
      <div className={s.product_item_bottom}>
        {addButton ? (
          <div
            onClick={addToCart}
            className={isAddButton ? s.add_button_true : s.add_button_false}
          ></div>
        ) : null}

        <div className={s.product_item_description}>
          <div className={s.product_title}> {title} </div>
          <div className={s.product_subtitle}> {subtitle} </div>
          <p className={s.product_description}> {description} </p>
        </div>

        <div className={s.price}>
          <Price price={730} oldPrice={1030} type={type} />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
