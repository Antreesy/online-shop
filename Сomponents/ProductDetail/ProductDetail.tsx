import { ColorPicker, PhotoSlider, SizePicker } from "Сomponents"
import { colors } from "shared/constants/colors"

import productImage from "public/assets/img/product-img.png"
import { Price, PriceProps } from "UI/Price"

import s from "./productDetail.module.scss"
import { Icon } from "UI/Icon"
import { Button } from "UI/Button"

interface ProductDetailProps {
  title: string
  subtitle: string
  description: string
  price: PriceProps
}

const ProductDetail: React.FC<ProductDetailProps> = (props) => {
  const { title, subtitle, description, price } = props

  return (
    <div className={s.product}>
      <div className={s.productInfo}>
        <div className={s.swiper}>
          <PhotoSlider photos={[productImage, productImage, productImage]} />
        </div>
        <div className={s.productInfoText}>
          <div className={s.title}>{title}</div>
          <div className={s.subtitle}>{subtitle}</div>
          <div className={s.description}>{description}</div>
          <div className={s.price}>
            <Price {...price} />
          </div>
          <div className={s.colorPickers}>
            <div className={s.colorPickerTitle}>Color:</div>
            <ColorPicker colors={colors} />
          </div>
          <div className={s.sizePicker}>
            <div className={s.sizePickerTitles}>
              <span>Size:</span>
              <div className={s.sizeChart}>
                <Icon type="size" />
                <span>Size Chart</span>
              </div>
            </div>
            <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
          </div>
          <Button className={s.addToMyCard}>
            <Icon type="basket" />
            Add to My card
          </Button>
        </div>
      </div>
      <div className={s.productDetails}>
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
          bibendum laoreet, dui tellus iaculis
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
          pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque
          non. Aenean quis porttitor elit. Sed eu dignissim ex. Proin non
          laoreet risus. Donec volutpat, ligula sed bibendum laoreet, dui tellus
          iaculis est, sit amet rhoncus risus felis
        </p>
        <h3>Cargo Detail:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default ProductDetail
