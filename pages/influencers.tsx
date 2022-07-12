import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Head from "next/head"
import { Grid } from "@mui/material"
import { Breadcrumbs, Toolbar } from "Сomponents"
import { Card, Pagination } from "UI"

import card_image from "public/assets/img/card.png"

import s from "styles/pages/influencers.module.scss"

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

const influencers: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Influencers</title>
      </Head>

      <div className={s.background} />
      <div className={s.breadcrumbs_mobile}>
        <Breadcrumbs />
      </div>
      <div className={s.container}>
        <Toolbar className={s.toolbar} values={[]} />

        <Grid container spacing={2} className={s.card_wrapper}>
          {Array.from(Array(24)).map((item, index) => (
            <Grid
              item
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={2}
              justifyContent="space-evenly"
            >
              <Card
                className={s.card}
                imageSrc={card_image}
                buttonTitle={"Go to store"}
                buttonHref={"/products-page"}
                isButtonHidden={true}
                topButtonTitle={"Follow"}
              />
              <p className={s.card_caption}>Tuana Yücel</p>
            </Grid>
          ))}
        </Grid>
        <div className={s.wrapper_pagination}>
          <Pagination className={s.pagination} pagesCount={4} isShort />
        </div>
      </div>
    </>
  )
}

export default influencers
