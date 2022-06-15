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
      <div className={s.productInfo}>
        <div className={s.swiper}>
          <PhotoSlider photos={[productImage, productImage, productImage]} />
        </div>
        <div className={s.productInfoText}>
          <span className={s.title}>{title}</span>
          <span className={s.subtitle}>{subtitle}</span>
          <span className={s.description}>{description}</span>
          <div className={s.price}>
            <Price {...price} />
          </div>
          <div className={s.colorPickers}>
            <span className={s.colorPickerTitle}>
              {productInfo.colorPickerTitle}
            </span>
            <ColorPicker colors={colors} />
          </div>
          <div className={s.sizePicker}>
            <div className={s.sizePickerTitles}>
              <span>{productInfo.sizePickerTitle}</span>
              <div className={s.sizeChart}>
                <Icon type="size" />
                <span>{productInfo.sizeChartTitle}</span>
              </div>
            </div>
            <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
          </div>
          <Button className={s.addToMyCard}>
            <Icon type="basket" />
            {productInfo.buttonText}
          </Button>
        </div>
      </div>
      <div className={s.productDetails}>
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
