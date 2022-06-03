import { NextPage } from "next"
import Head from "next/head"
import React, { useState } from "react"
import { Card, Input, Select, Icon } from "UI"
import { Footer, Header } from "Сomponents"
import s from "../styles/pages/influencers.module.scss"
import image from "../public/assets/img/card.png"
import { Grid } from "@mui/material"
import { footerNav } from "shared/constants/footernav"
import Image from "next/image"
import img from "../public/assets/img/background-influencers.png"

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const influencers: NextPage = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <Head>
        <title>ILONSI SHOP | Influencers</title>
      </Head>
      <Header />
      <main className={s.main}>
        <div className={s.background}>
          <Image src={img} />
        </div>
        <div className={s.toolbar}>
          <span className={s.search}>
            <Input
              label=""
              value={value}
              setValue={setValue}
              variant="black_outline"
              placeholder={"Search"}
            />
            <Icon type="search" className={s.icon} />
          </span>
          <span className={s.select}>
            <select placeholder="Filter" value="Filter">
              <option>Filter</option>
            </select>
            <Icon type="arrow_down" className={s.icon} />
          </span>
        </div>
        <Grid container spacing={2} className={s.cards}>
          {array.map((item) => (
            <Grid item key={item} sm={3} xs={6} md={2}>
              <Card
                className={s.card}
                imageSrc={image}
                buttonTitle={"Go to store"}
                isButtonHidden={true}
              />
              <div>Tuana Yücel</div>
            </Grid>
          ))}
        </Grid>
        <div className={s.pagination}>
          1 2 <span>3</span> 4 5
        </div>
      </main>
      <Footer links={footerNav} />
    </div>
  )
}

export default influencers
