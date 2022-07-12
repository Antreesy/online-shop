import { useState } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Head from "next/head"
import { Grid } from "@mui/material"
import { Background, Breadcrumbs, Toolbar } from "Сomponents"
import { Card, Pagination, Button } from "UI"

import card_image from "public/assets/img/zara.png"
import picture from "public/assets/img/fallback-pic.png"
import picture_mobile from "public/assets/img/brands_mobile-bgr.png"

import s from "styles/pages/brands/brands.module.scss"

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

const PRODUCTS_AMOUNT = 24187
const BRANDS_AMOUNT = 35298

const brands: NextPage = () => {
  const [path, setActivePath] = useState<string>("brands")
  const router = useRouter()

  const toggleButton = (path: string) => {
    router.push(`/${path}`)
    setActivePath(path)
  }

  const goToBrand = (brand: string) => {
    router.push(`brands/${brand}`)
  }

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
          link="tuanaycl"
          isEditable={true}
        />
      </div>

      <div className={s.mobile_image}>
        <Background
          className={s.background}
          image={picture_mobile}
          title="Tuana Yücel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed pretium enim. Cras faucibus velit rise.
              "
          link="tuanaycl"
          isEditable={true}
        />
      </div>

      <div className={s.breadcrumbs_mobile}>
        <Breadcrumbs />
      </div>
      <div className={s.container}>
        <div className={s.return_button} onClick={() => router.back()}>
          <div>
            <span></span>
          </div>
          <div>Return Your Shop</div>
        </div>
        <div className={s.wrapper_toolbar}>
          <Button
            disabled={path === "products"}
            variant="outlined"
            className={path === "products" ? s.button_active : ""}
            onClick={() => {
              toggleButton("products")
            }}
          >
            Products ({PRODUCTS_AMOUNT})
          </Button>
          <Button
            disabled={path === "brands"}
            variant="outlined"
            className={path === "brands" ? s.button_active : ""}
            onClick={() => {
              toggleButton("brands")
            }}
          >
            Brands ({BRANDS_AMOUNT})
          </Button>
          <Toolbar className={s.toolbar} values={[]} />
        </div>

        <Grid container spacing={2} className={s.card_wrapper}>
          {Array.from(Array(24)).map((item) => (
            <Grid
              item
              key={item}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={2}
              justifyContent="space-evenly"
            >
              <Card
                onClick={() => goToBrand("zara")}
                className={s.card}
                imageSrc={card_image}
                buttonTitle={"Go to Brand"}
                isButtonHidden={true}
              />
              <p className={s.card_caption}>Zara</p>
            </Grid>
          ))}
        </Grid>
        <Pagination className={s.pagination} pagesCount={4} isShort />
      </div>
    </>
  )
}

export default brands
