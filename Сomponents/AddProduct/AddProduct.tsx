import React from "react"
import s from "./AddProduct.module.scss"
import { Background } from "Сomponents/Background"
import { AddButton } from "UI"
import { ProductItemList } from "../ProductItemList"
import { productItems } from "shared/constants/productItems"
import ProductItem, {
  ProductItemProps,
} from "Сomponents/ProductItem/ProductItem"

interface AddProductInfluencerProps {
  products?: ProductItemProps[]
}

const AddProductInfluencer: React.FC<AddProductInfluencerProps> = (props) => {
  const { products } = props
  return (
    <>
      <div className={s.addProduct_main}>
        <Background
          title={"Hello"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque non. Aenean quis "
          }
          link={"@tuanaycl"}
          isEditable={true}
          gradientBg="none"
        />
      </div>

      {!products ? (
        <div className={s.addProduct_noProducts}>
          <div className={s.addProduct_noProducts_title}>
            <h1>You do not have a product</h1>
          </div>
          <div className={s.addProduct_noProducts_subtitle}>
            <p>
              <a href="#">Please click </a>to add products belonging to brands
            </p>
          </div>
        </div>
      ) : null}

      <div className={s.addProduct_addbutton}>
        <AddButton
          title="Add Product"
          bgColor="white"
          color="secondary"
          large={true}
        />
      </div>

      {products ? (
        <>
          <div className={s.addProduct_productList}>
            <ProductItemList productItemList={productItems} />
          </div>
        </>
      ) : null}
    </>
  )
}

export default AddProductInfluencer
