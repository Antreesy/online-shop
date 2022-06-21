import { CardForm, SectionHeader } from "../../../Сomponents"
import s from "../../../styles/pages/account/payment.module.scss"
import { Card } from "@mui/material"
import { creditcardsData } from "../../../shared/constants/creditcardsData"
import { AddButton, CreditCard } from "../../../UI"
import {useTranslation} from "next-i18next";

export const Payment: React.FC = () => {
    const {t} = useTranslation("payment")
  return (
    <>
      <SectionHeader className={s.title} title={t("title")} />
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
      <AddButton title={t("cardAdd")} />
      <CardForm />
    </>
  )
}
