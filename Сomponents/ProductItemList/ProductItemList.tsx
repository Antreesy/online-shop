import React from "react"
import ProductItem from "Сomponents/ProductItem/ProductItem"
import { PriceProps } from "UI/Price/Price"
import { ImageProps } from "next/image"
import { Grid } from "@mui/material"

type productItem = {
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

interface ProductItemListProps {
  productItemList: productItem[]
}

export const ProductItemList: React.FC<ProductItemListProps> = (props) => {
  const { productItemList } = props
  return (
    <Grid container spacing={2}>
      {productItemList.map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          key={item.id}
          justifyContent="space-around"
        >
          <ProductItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
