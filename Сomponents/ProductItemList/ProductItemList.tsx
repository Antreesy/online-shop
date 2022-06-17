import React from "react"
import ProductItem, {
  ProductItemProps,
} from "Сomponents/ProductItem/ProductItem"
import { Grid } from "@mui/material"

interface ProductItemListProps {
  productItemList: ProductItemProps[]
}

export const ProductItemList: React.FC<ProductItemListProps> = (props) => {
  const { productItemList } = props
  return (
    <Grid container spacing={2}>
      {productItemList.map((item, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          justifyContent="space-around"
        >
          <ProductItem {...item} />
        </Grid>
      ))}
    </Grid>
  )
}
