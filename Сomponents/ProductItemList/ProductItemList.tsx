import React from "react"

import { Grid } from "@mui/material"
import ProductItem, { ProductItemProps } from "./ProductItem/ProductItem"
import s from "./producItemList.module.scss"

interface ProductItemListProps {
  productItemList: ProductItemProps[]
  justifyContent?: "center"
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const ProductItemList: React.FC<ProductItemListProps> = (props) => {
  const {
    productItemList,
    justifyContent,
    xs = 12,
    sm = 6,
    md = 4,
    lg = 3,
    xl = 3,
  } = props
  return (
    <Grid container spacing={2} justifyContent={justifyContent}>
      {productItemList.map((item, index) => (
        <Grid
          key={index}
          item
          xs={xs}
          sm={sm}
          md={md}
          lg={lg}
          xl={xl}
          justifyContent="space-around"
          className={s.grid}
        >
          <ProductItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
