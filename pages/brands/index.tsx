import { NextPage } from "next"
import Head from "next/head"

import { Grid } from "@mui/material"
import { Background, Breadcrumbs, Toolbar } from "Сomponents"
import { Card, Pagination, Button, Icon } from "UI"

import card_image from "public/assets/img/zara.png"

import s from "styles/pages/brands/brands.module.scss"
import { useState } from "react"
import picture from "public/assets/img/fallback-pic.png"
import { useRouter } from "next/router"

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

      <div className={s.main}>
        <div className={s.wrapper_bcg}>
          <Background
            image={picture}
            title="TITLE"
            actionText="Follow"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita saepe at ea quam dolorem mollitia soluta atque blanditiis quas in praesentium exercitationem delectus, quasi tempora porro ipsum ex voluptatum.
          "
            link="tuanaycl"
          />
          <div className={s.add_button}>
            <Icon type="plus" />
          </div>
        </div>

        <div className={s.background} />
        <div className={s.breadcrumbs_mobile}>
          <Breadcrumbs />
        </div>
        <div className={s.container}>
          <div className={s.return_button}>
            <div onClick={() => router.push("/")}>
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
              Products (24187)
            </Button>
            <Button
              disabled={path === "brands"}
              variant="outlined"
              className={path === "brands" ? s.button_active : ""}
              onClick={() => {
                toggleButton("brands")
              }}
            >
              Brands (35298)
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
      </div>
    </>
  )
}

export default brands
