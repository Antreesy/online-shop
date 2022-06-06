import { useState } from "react"

import { NextPage } from "next"
import Head from "next/head"

import { Grid } from "@mui/material"
import { Breadcrumbs } from "Сomponents"
import { Card, Input, Icon } from "UI"

import card_image from "public/assets/img/card.png"

import s from "styles/pages/influencers.module.scss"

const influencers: NextPage = () => {
  const [value, setValue] = useState("")

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Influencers</title>
      </Head>

      <main className={s.main}>
        <div className={s.background} />
        <div className={s.breadcrumbs_mobile}>
          <Breadcrumbs />
        </div>
        <div className={s.container}>
          <div className={s.toolbar}>
            <div className={s.search}>
              <Input
                label=""
                value={value}
                setValue={setValue}
                variant="black_outline"
                placeholder={"Search"}
              />
              <Icon type="search" className={s.icon} />
            </div>
            <div className={s.select}>
              <select placeholder="Filter" value="Filter">
                <option>Filter</option>
              </select>
              <Icon type="arrow_down" className={s.icon} />
            </div>
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
                  className={s.card}
                  imageSrc={card_image}
                  buttonTitle={"Go to store"}
                  isButtonHidden={true}
                />
                <p className={s.card_caption}>Tuana Yücel</p>
              </Grid>
            ))}
          </Grid>
          <div className={s.pagination}>
            1 2 <span>3</span> 4 5
          </div>
        </div>
      </main>
    </>
  )
}

export default influencers
