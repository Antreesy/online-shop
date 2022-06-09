import { useState } from "react"
import cn from "classnames"
import s from "./productItem.module.scss"

import { Icon, Price, PriceProps } from "UI"
import Image, { ImageProps } from "next/image"

export interface ProductItemProps {
  title: string
  subtitle: string
  description: string
  id: number
  price: PriceProps
  imageSrc: ImageProps["src"]
  isFavorite?: boolean
  addButton?: boolean
  toggleFavorite?: (id: number) => void
  onAddClick?: (id: number) => void
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
  const {
    title,
    subtitle,
    description,
    id,
    price,
    imageSrc,
    isFavorite = true,
    onAddClick,
    addButton = false,
    toggleFavorite,
  } = props

  const [isAddButton, toggleAddButton] = useState<boolean>(addButton)

  return (
    <div className={s.product_item_container}>
      <div className={s.product_item_top}>
        {toggleFavorite && (
          <div
            className={cn(s.product_favorites, { [s.isFavorite]: isFavorite })}
            onClick={() => toggleFavorite(id)}
          >
            <Icon type={"heart"} color={"inherit"} />
          </div>
        )}
        <div className={s.product_item_image}>
          <Image src={imageSrc} className={s.img} alt={title} layout="fill" />
        </div>
      </div>
      <div className={s.product_item_bottom}>
        {onAddClick && (
          <div
            onClick={() => {
              onAddClick(id)
              toggleAddButton(!isAddButton)
            }}
            className={s.add_button}
          >
            <Icon type={isAddButton ? "plus" : "minus"} />
          </div>
        )}

        <div className={s.product_item_description}>
          <div className={s.product_title}> {title} </div>
          <div className={s.product_subtitle}> {subtitle} </div>
          <p className={s.product_description}> {description} </p>
        </div>

        <div className={s.price}>
          <Price {...price} />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
