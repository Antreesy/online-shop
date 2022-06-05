import type { NextPage } from "next"
import Head from "next/head"

import { Card } from "@mui/material"
import { AddButton, CreditCard } from "UI"

import { Footer, Header, SectionHeader } from "Сomponents"

import { footerNav } from "shared/constants/footernav"
import useResize from "shared/hooks/useResize"
import { creditcardsData } from "shared/consts/creditcardsData"

import { CardForm } from "UI/CardForm"

import s from "styles/pages/payment.module.scss"

const Payment: NextPage = () => {
  const width = useResize()

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Payment Page</title>
      </Head>

      <Header />

      <main className={s.main}>
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
        <CardForm />
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default Payment
