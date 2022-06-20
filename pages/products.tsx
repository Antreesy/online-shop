import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import Link from "next/link"
import {
  Background,
  ColorPicker,
  PhotoSlider,
  SizePicker,
  ReturnButton,
} from "Сomponents"
import { Button, Icon, Price } from "UI"

import { colors } from "shared/constants/colors"

import bg from "public/assets/img/fallback-pic.png"
import img from "public/assets/img/product-img.png"

import s from "styles/pages/Products.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "modal",
        "product",
        "orderCart",
      ])),
    },
  }
}

const Products: NextPage = () => {
  const { t } = useTranslation("product")
  return (
    <>
      <Background
        className={s.fallback}
        image={bg}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut velit officia."
        }
        title={"some-title"}
        link={"some-link"}
        actionText={"button"}
      />
      <div className={s.container}>
        <ReturnButton />
        <div className={s.productsSection}>
          <div className={s.photoslider}>
            <PhotoSlider photos={[img, img, img]} />
          </div>
          <div className={s.productInfo}>
            <p className={s.title}>Prada</p>
            <p className={s.subtitle}>{t("productSuTitle")}</p>
            <p className={s.description}>{t("productDescription")}</p>
            <div className={s.price}>
              <Price price={2020} oldPrice={2050} type="sale_black" />
            </div>
            <h3>{t("productColor")} :</h3>
            <div className={s.colorPicker}>
              <ColorPicker colors={colors} />
            </div>
            <h2>
              <span>{t("productSize")} :</span>
              <span>
                <Icon type="size" /> {t("productSizeChart")}
              </span>
            </h2>
            <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
            <Link href="/order-cart">
              <Button className={s.button} iconLeft="basket">
                {t("productButton")}
              </Button>
            </Link>
          </div>
        </div>
        <h3>{t("productDetail")}:</h3>
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
        <h3>{t("productDetail")}:</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  )
}
export default Products
