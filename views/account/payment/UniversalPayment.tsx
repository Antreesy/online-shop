import { useState } from "react"
import { useTranslation } from "next-i18next"

import { CardForm, SectionHeader } from "Сomponents"
import { AddButton, CreditCard } from "UI"

import { creditcardsData } from "shared/constants/creditcardsData"

import s from "styles/pages/account/payment.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UniversalPaymentProps {}

export const UniversalPayment: React.FC = () => {
  const { t } = useTranslation("payment")
  const [active, setActive] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <SectionHeader className={s.title} title={t("myRegisteredCards")} />
      <div className={s.cards}>
        {creditcardsData.map((card, index) => (
          <CreditCard
            key={index}
            isHidden={card.isHidden}
            isActive={index === active}
            id={card.id}
            cardNumber={card.cardNumber}
            cardHolder={card.cardHolder}
            expireDate={card.expireDate}
            onDelete={card.onDelete}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
      <AddButton
        title={t("addNewCard")}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      />
      {isOpen && (
        <CardForm
          onClose={() => {
            setIsOpen((prev) => !prev)
          }}
        />
      )}
    </>
  )
}
