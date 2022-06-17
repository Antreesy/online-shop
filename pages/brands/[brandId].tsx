import { NextPage } from "next"
import { useRouter } from "next/router"

import Head from "next/head"
import { Grid } from "@mui/material"
import { Background, Breadcrumbs, ProductItem } from "Сomponents"
import { Pagination } from "UI"

import s from "styles/pages/brands/brands.module.scss"
import picture from "public/assets/img/Prada.png"
import { brandProductItems } from "shared/constants/brandProductItem"

const brand: NextPage = () => {
  const router = useRouter()
  const { brandId } = router.query

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brand {brandId}</title>
      </Head>

      <main className={s.main}>
        <div className={s.background} />
        <div className={s.brand_bgr}>
          <Background image={picture} title={"Prada"} />
        </div>

        <div className={s.breadcrumbs_mobile}>
          <Breadcrumbs />
        </div>

        <section className={s.brand_description}>
          <h1> Prada </h1>

          <p className={s.small_screen}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia, lacus
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia, lacus mattis semper lacinia, metus urna dapibus quam, eu
            maximus sapien ipsum at justo. In varius accumsan magna, vel
            eleifend nisi maximus et. Aliquam faucibus facilisis viverra. Fusce
            urna ipsum, tempor in erat
          </p>

          <p>
            Pellentesque faucibus leo magna, a convallis metus congue sit amet.
            Vestibulum ornare efficitur suscipit. Sed vitae vehicula dolor.
            Praesent sit amet dui justo. Maecenas id lorem vitae orci interdum
            commodo nec non dolor.
          </p>

          <div>Products (2354324)</div>
        </section>

        <div className={s.brands_container}>
          <Grid container spacing={2} justifyContent="center">
            {brandProductItems.map((item) => (
              <Grid
                item
                key={item.id}
                xs={6}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                justifyContent="space-between"
              >
                <ProductItem {...item} />
              </Grid>
            ))}
          </Grid>
          <Pagination className={s.pagination} pagesCount={4} isShort />
        </div>
      </main>
    </>
  )
}

export default brand
