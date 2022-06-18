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
import { Button, CheckboxGroup, Pagination, Slider } from "UI"

import s from "styles/pages/products-page.module.scss"
import CustomAccordion from "../UI/Accordion/Accordion"
import { colors } from "../shared/constants/colors"
import React from "react"
import picture from "../public/assets/img/products-background.png"
import picture_mobile from "../public/assets/img/products-page-mob.png"

const ProductsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Influencers</title>
      </Head>

      <main className={s.main}>
        <div className={s.wrapper_bcg}>
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
        </div>
        <div className={s.breadcrumbs_mobile}>
          <Breadcrumbs />
        </div>
        <div className={s.container}>
          <div style={{ paddingBottom: "10px" }}>
            <Toolbar className={s.toolbar} values={[]} />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{ width: "210px", marginRight: "91px" }}
              className={s.sidebar}
            >
              <CustomAccordion
                header={"Gender"}
                className={s.accordion}
                summaryClassName={s.accordion__summary}
              >
                <CheckboxGroup rounded labels={["Men", "Women", "Unisex"]} />
              </CustomAccordion>
              <CustomAccordion
                header={"Category"}
                className={s.accordion}
                summaryClassName={s.accordion__summary}
              >
                <CheckboxGroup
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
              </CustomAccordion>
              <CustomAccordion
                header={"Brand"}
                className={s.accordion}
                summaryClassName={s.accordion__summary}
              >
                <CheckboxGroup
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
              </CustomAccordion>
              <CustomAccordion
                header={"Size"}
                className={s.accordion}
                summaryClassName={s.accordion__summary}
              >
                <CheckboxGroup rounded labels={["S", "M", "L", "XL", "XXL"]} />
              </CustomAccordion>
              <CustomAccordion
                header={"Color"}
                className={s.accordion}
                summaryClassName={s.accordion__summary}
              >
                <ColorPicker className={s.colorPicker} colors={colors} />
              </CustomAccordion>
              <div className={s.sidebar__priceSlider}>
                <span>Price</span>
                <Slider
                  min={0}
                  max={50}
                  value={[0, 30]}
                  className={s.sidebar__priceSliderWrapper}
                />
              </div>
              <Button className={s.sidebar__btn}>Apply</Button>
            </div>
            <div className={s.items}>
              {Array.from(Array(24)).map((item) => (
                <Grid item key={item} xs={2.4} justifyContent="space-evenly">
                  <ProductItem
                    title="Yves Saint Laurent"
                    subtitle="Black long sleeve men’s jacket"
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination className={s.pagination} pagesCount={4} isShort />
          </div>
        </div>
      </main>
    </>
  )
}

export default ProductsPage
