import type { NextPage } from "next"
import Head from "next/head"

import { Card } from "@mui/material"
import { AddButton, CreditCard } from "UI"

import { SectionHeader } from "Сomponents"

import useResize from "shared/hooks/useResize"
import { creditcardsData } from "shared/constants/creditcardsData"

import s from "styles/pages/payment.module.scss"

const Payment: NextPage = () => {
  const width = useResize()

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Payment Page</title>
      </Head>

      <div className={s.main}>
        <SectionHeader className={s.title} title={"My Registered Cards"} />
        <Card className={s.cards}>
          {creditcardsData.map((card) => (
            <CreditCard
              size={card.size}
              key={card.id}
              isHidden={card.isHidden}
              isColored={card.isColored}
              id={card.id}
              cardNumber={card.cardNumber}
              cardHolder={card.cardHolder}
              expireDate={card.expireDate}
              onDelete={card.onDelete}
            />
          ))}
        </Card>
        <AddButton title="Add New Card" />
        <Card className={s.detailsContainer}>
          <CreditCard
            size={width <= 768 ? 210 : 300}
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
      </div>
    </>
  )
}

export default Payment
