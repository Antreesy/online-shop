import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Head from "next/head"
import { Grid } from "@mui/material"
import {
  Background,
  Breadcrumbs,
  FilterSidebar,
  ProductItem,
  Toolbar,
} from "Сomponents"
import { Pagination } from "UI"

import picture from "public/assets/img/products-background.png"
import picture_mobile from "public/assets/img/products-page-mob.png"

import s from "styles/pages/products-page.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
      ])),
    },
  }
}

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Products</title>
      </Head>

      <div className={s.desktop_image}>
        <Background
          image={picture}
          title="Tuana Yücel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque non. Aenean quis porttitor elit. Sed eu dignissim ex. Proin non laoreet risus. Donec volutpat.
            "
          link={"tuanaycl"}
          className={s.background__desktop}
          actionText={"Follow"}
        />
      </div>

      <div className={s.mobile_image}>
        <Background
          image={picture_mobile}
          title="Tuana Yücel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim."
          link={"tuanaycl"}
          className={s.background__desktop}
        />
      </div>

      <div className={s.breadcrumbs_mobile}>
        <Breadcrumbs />
      </div>
      <div className={s.container}>
        <Toolbar className={s.toolbar} values={[]} />
        <div className={s.container__content}>
          <FilterSidebar />
          <div className={s.items}>
            {Array.from(Array(24)).map((item, index) => (
              <Grid item key={index} xs={2.4} justifyContent="space-evenly">
                <ProductItem
                  title="Yves Saint Laurent"
                  subtitle="Black long sleeve men’s jacket"
                  itemHref="/product"
                  description="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu"
                  id={1}
                  price={{
                    oldPrice: 2030,
                    price: 2030,
                    type: "sale",
                  }}
                  imageSrc="/assets/img/T_shirt.png"
                  toggleFavorite={() => console.log("toggleFavorite")}
                />
              </Grid>
            ))}
          </div>
        </div>
        <div className={s.pagination__container}>
          <Pagination className={s.pagination} pagesCount={4} isShort />
        </div>
      </div>
    </>
  )
}

export default ProductsPage
