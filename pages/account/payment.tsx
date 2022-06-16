import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Card } from "@mui/material"
import { CardForm, SectionHeader } from "Сomponents"
import { AddButton, CreditCard } from "UI"

import { creditcardsData } from "shared/constants/creditcardsData"

import s from "styles/pages/account/payment.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
      ])),
    },
  }
}

const Profile: NextPage = () => {
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
