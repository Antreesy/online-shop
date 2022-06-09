import { NextPage } from "next"

import {
  Background,
  ColorPicker,
  PhotoSlider,
  SizePicker,
  ProductReturn,
} from "Сomponents"
import { Button, Icon, Price } from "UI"

import { colors } from "shared/constants/colors"

import bg from "public/assets/img/fallback-pic.png"
import img from "public/assets/img/product-img.png"

import s from "styles/pages/Products.module.scss"

const Products: NextPage = () => {
  return (
    <>
      <Background
        className={s.fallback}
        image={bg}
        description={
          "cbjsbckjdslcjnslacnlscnlsncjcc hfib fuhj uifibsdkflj dfjkf jfgsdlk hfkjsd kjh"
        }
        title={"some-title"}
        link={"some-link"}
        actionText={"button"}
      />
      <div className={s.container}>
        <ProductReturn />
        <div className={s.productsSection}>
          <PhotoSlider photos={[img, img, img]} className={s.photoslider} />
          <div className={s.productInfo}>
            <p className={s.title}>Prada</p>
            <p className={s.subtitle}>Black long sleeve men’s jacket</p>
            <p className={s.description}>
              Lorem amet voluptatibus autem, magnam nulla ad. Quo non vel . Hic,
              commodi et!
            </p>
            <div className={s.price}>
              <Price price={2020} oldPrice={2050} type="sale_black" />
            </div>
            <h3>Color :</h3>
            <div className={s.colorPicker}>
              <ColorPicker colors={colors} />
            </div>
            <h2>
              <span>Size :</span>{" "}
              <span>
                <Icon type="size" /> Size chart
              </span>
            </h2>
            <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
            <Button className={s.button} iconLeft="basket">
              Add to my cart
            </Button>
          </div>
        </div>
        <h3>Product Detail:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
          pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque
          non. Aenean quis porttitor elit. Sed eu dignissim ex. Proin non
          laoreet risus. Donec volutpat, ligula sed bibendum laoreet, dui tellus
          iaculis est, sit amet rhoncus risus felis at est. Praesent eget est ac
          nisl suscipit consectect Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit risus,
          nec pharetra ex scelerisque non. Aenean quis porttitor elit. Sed eu
          dignissim ex. Proin non laoreet risus. Donec volutpat, ligula sed
          bibendum laoreet, dui tellus iaculis Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus
          velit risus, nec pharetra ex scelerisque non. Aenean quis porttitor
          elit. Sed eu dignissim ex. Proin non laoreet risus. Donec volutpat,
          ligula sed bibendum laoreet, dui tellus iaculis est, sit amet rhoncus
          risus felis
        </p>
        <h3>Product Detail:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  )
}
export default Products
