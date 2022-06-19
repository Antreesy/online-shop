import { ColorPicker, PhotoSlider, SizePicker } from "Сomponents"
import { Button, Icon, Price } from "UI"

import { PriceProps } from "shared/interfaces/orderProps"
import { productInfo } from "shared/constants/productInfo"
import { colors } from "shared/constants/colors"
import productImage from "public/assets/img/product-img.png"

import s from "./productInfo.module.scss"

interface ProductInfoProps {
  title: string
  subtitle: string
  description: string
  price: PriceProps
}

const ProductInfo: React.FC<ProductInfoProps> = (props) => {
  const { title, subtitle, description, price } = props

  return (
    <div className={s.product}>
      <div className={s.information}>
        <div className={s.swiper}>
          <PhotoSlider photos={[productImage, productImage, productImage]} />
        </div>
        <div className={s.text_wrapper}>
          <span className={s.title}>{title}</span>
          <span className={s.subtitle}>{subtitle}</span>
          <span className={s.description}>{description}</span>
          <div className={s.price}>
            <Price {...price} />
          </div>
          <div className={s.color_picker}>
            <span className={s.caption}>{productInfo.colorPickerTitle}</span>
            <ColorPicker colors={colors} />
          </div>
          <div className={s.size_picker}>
            <div className={s.caption}>
              <span>{productInfo.sizePickerTitle}</span>
              <div className={s.charts}>
                <Icon type="size" />
                <span>{productInfo.sizeChartTitle}</span>
              </div>
            </div>
            <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
          </div>
          <Button className={s.add_button}>
            <Icon type="basket" />
            {productInfo.buttonText}
          </Button>
        </div>
      </div>
      <div className={s.details}>
        <h3>{productInfo.cargoDetailTitle}</h3>
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
          bibendum laoreet, dui tellus iaculis
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
          pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque
          non. Aenean quis porttitor elit. Sed eu dignissim ex. Proin non
          laoreet risus. Donec volutpat, ligula sed bibendum laoreet, dui tellus
          iaculis est, sit amet rhoncus risus felis
        </p>
        <h3>{productInfo.cargoDetailTitle}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default ProductInfo
