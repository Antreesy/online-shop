import { useTranslation } from "next-i18next"

import { Card } from "@mui/material"
import { CardForm, SectionHeader } from "Сomponents"
import { AddButton, CreditCard } from "UI"

import { creditcardsData } from "shared/constants/creditcardsData"

import s from "styles/pages/account/payment.module.scss"

export const UniversalPayment: React.FC = () => {
  const { t } = useTranslation("payment")

  return (
    <>
      <SectionHeader className={s.title} title={t("myRegisteredCards")} />
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
      <AddButton title={t("addNewCard")} />
      <CardForm />
    </>
  )
}
