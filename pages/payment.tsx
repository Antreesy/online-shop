import { useState, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"

import { Card } from "@mui/material"
import { AddButton, CreditCard } from "UI"

import { Footer, Header, SectionHeader } from "Сomponents"

import { throttle } from "utils/utils"
import { footerNav } from "shared/constants/footernav"

import s from "styles/pages/payment.module.scss"

function getWindowWidth(): number {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window
    return width
  }
  return -1
}

const Home: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener("resize", () => throttle(handleResize, 100))
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <Header />

      <main className={s.main}>
        <SectionHeader className={s.title} title={"My Registered Cards"} />
        <Card className={s.cards}>
          <CreditCard
            size={164}
            key={1}
            isHidden
            id={8375}
            cardNumber="1234 8547 7294 3959"
            cardHolder="Test Test"
            expireDate="01/2023"
            onDelete={() => {
              console.log("test")
            }}
          />
          <CreditCard
            size={164}
            isColored
            key={2}
            isHidden
            id={8375}
            cardNumber="1234 8547 7294 3959"
            cardHolder="Test Test"
            expireDate="01/2023"
            onDelete={() => {
              console.log("test")
            }}
          />
          <CreditCard
            size={164}
            key={3}
            isHidden
            id={8375}
            cardNumber="1234 8547 7294 3959"
            cardHolder="Test Test"
            expireDate="01/2023"
            onDelete={() => {
              console.log("test")
            }}
          />
        </Card>
        <AddButton title="Add New Card" />
        <Card className={s.detailsContainer}>
          <CreditCard
            size={windowWidth <= 768 ? 210 : 300}
            isColored
            key={4}
            id={8375}
            cardNumber="1234 8547 7294 3959"
            cardHolder="Test Test"
            expireDate="01/2023"
            onDelete={() => {
              console.log("test")
            }}
          />
        </Card>
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default Home
