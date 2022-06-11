import React from "react"
import s from "./AddProduct.module.scss"
import pic from "public/assets/img/Add-product-bg.jpg"
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
  return products ? (
    <>
      <div className={s.AddProduct_main}>
        <Background
          image={pic}
          title={"Hello"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque non. Aenean quis "
          }
          link={"@tuanaycl"}
          isEditable={true}
        />
      </div>
      <div className={s.AddProduct_addbutton}>
        <AddButton title="Add Product" bgColor="grey" color="secondary" />
      </div>
      <div className={s.AddProduct_productList}>
        <ProductItemList productItemList={productItems} />
      </div>
    </>
  ) : (
    <>
      <div className={s.AddProduct_main}>
        <Background
          image={pic}
          title={"Hello"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque non. Aenean quis "
          }
          link={"@tuanaycl"}
          isEditable={true}
        />
      </div>
      <div className={s.AddProduct_NoProducts}>
        <div className={s.AddProduct_NoProducts_title}>
          <h1>You do not have a product</h1>
        </div>
        <div className={s.AddProduct_NoProducts_subtitle}>
          <p>
            <a href="#">Please click </a>to add products belonging to brands
          </p>
        </div>
      </div>
      <div className={s.AddProduct_addbutton}>
        <AddButton title="Add Product" bgColor="white" color="secondary" />
      </div>
    </>
  )
}

export default AddProductInfluencer
