import { NextPage } from "next"
import Head from "next/head"

import { Card } from "@mui/material"
import { SectionHeader } from "Сomponents"
import { AddButton, CreditCard } from "UI"

import useResize from "shared/hooks/useResize"
import { creditcardsData } from "shared/constants/creditcardsData"

import s from "styles/pages/account/payment.module.scss"
import { CardForm } from "UI/CardForm"

const Profile: NextPage = () => {
  const width = useResize()

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

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
    </>
  )
}

export default Profile
