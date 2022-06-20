import { NextPage } from "next"
import Head from "next/head"

import { Grid } from "@mui/material"
import {
  Background,
  Breadcrumbs,
  ColorPicker,
  ProductItem,
  Toolbar,
} from "Сomponents"
import { Accordion, Button, CheckboxGroup, Pagination, Slider } from "UI"

import { colors } from "shared/constants/colors"
import picture from "public/assets/img/products-background.png"
import picture_mobile from "public/assets/img/products-page-mob.png"

import s from "styles/pages/products-page.module.scss"

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Influencers</title>
      </Head>

      <div className={s.desktop_image}>
        <Background
          image={picture}
          title="Tuana Yücel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit risus, nec pharetra ex scelerisque non. Aenean quis porttitor elit. Sed eu dignissim ex. Proin non laoreet risus. Donec volutpat.
            "
          link={"tuanaycl"}
          className={s.background__desktop}
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
          <div className={s.sidebar}>
            <Accordion
              header={"Gender"}
              className={s.sidebar__accordion}
              summaryClassName={s.sidebar__accordion__summary}
              iconClassName={s.sidebar__accordion__icon}
            >
              <CheckboxGroup
                inColumn
                rounded
                labels={["Men", "Women", "Unisex"]}
              />
            </Accordion>
            <Accordion
              header={"Category"}
              className={s.sidebar__accordion}
              summaryClassName={s.sidebar__accordion__summary}
              iconClassName={s.sidebar__accordion__icon}
            >
              <CheckboxGroup
                inColumn
                rounded
                labels={[
                  "Dress",
                  "Shoes",
                  "Clothing",
                  "Dress",
                  "Shoes",
                  "Clothing",
                ]}
              />
            </Accordion>
            <Accordion
              header={"Brand"}
              className={s.sidebar__accordion}
              summaryClassName={s.sidebar__accordion__summary}
              iconClassName={s.sidebar__accordion__icon}
            >
              <CheckboxGroup
                inColumn
                rounded
                labels={[
                  "Adidas",
                  "Beymen",
                  "Nike",
                  "Dolce&Gabbana",
                  "Adidas",
                  "Nike",
                ]}
              />
            </Accordion>
            <Accordion
              header={"Size"}
              className={s.sidebar__accordion}
              summaryClassName={s.sidebar__accordion__summary}
              iconClassName={s.sidebar__accordion__icon}
            >
              <CheckboxGroup
                inColumn
                rounded
                labels={["S", "M", "L", "XL", "XXL"]}
              />
            </Accordion>
            <Accordion
              header={"Color"}
              className={s.sidebar__accordion}
              summaryClassName={s.sidebar__accordion__summary}
              iconClassName={s.sidebar__accordion__icon}
            >
              <ColorPicker
                className={s.sidebar__color_picker}
                colors={colors}
              />
            </Accordion>
            <div className={s.sidebar__price_slider}>
              <span>Price</span>
              <Slider
                min={0}
                max={50}
                value={[0, 50]}
                className={s.sidebar__price_slider_wrapper}
              />
            </div>
            <Button className={s.sidebar__btn}>Apply</Button>
          </div>
          <div className={s.items}>
            {Array.from(Array(24)).map((item, index) => (
              <Grid item key={index} xs={2.4} justifyContent="space-evenly">
                <ProductItem
                  title="Yves Saint Laurent"
                  subtitle="Black long sleeve men’s jacket"
                  itemHref="/products"
                  description="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu"
                  id={1}
                  price={{
                    oldPrice: 2030,
                    price: 2030,
                    type: "sale",
                  }}
                  imageSrc="/assets/img/T_shirt.png"
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
