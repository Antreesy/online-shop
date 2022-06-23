import { useState } from "react"
import cn from "classnames"

import Image, { ImageProps } from "next/image"
import Link from "next/link"
import { Icon, Price } from "UI"
import { PriceProps } from "shared/interfaces/orderProps"

import s from "./productItem.module.scss"

export interface ProductItemProps {
  title: string
  subtitle: string
  description: string
  itemHref?: string
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
    itemHref = "",
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
    <div className={s.container}>
      <div className={s.top_group}>
        {toggleFavorite && (
          <div
            className={cn(s.favorites, { [s.is_favorite]: isFavorite })}
            onClick={() => toggleFavorite(id)}
          >
            <Icon type={"heart"} color={"inherit"} />
          </div>
        )}
        <Link href={itemHref}>
          <div className={s.image}>
            <Image src={imageSrc} alt={title} layout="fill" />
          </div>
        </Link>
      </div>
      <div className={s.bottom_group}>
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

        <div className={s.info_wrapper}>
          <Link href={itemHref}>
            <a className={s.title}> {title} </a>
          </Link>
          <div className={s.subtitle}> {subtitle} </div>
          <p className={s.description}> {description} </p>
        </div>

        <div className={s.price}>
          <Price {...price} />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
