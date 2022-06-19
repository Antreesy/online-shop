import React from "react"
import s from "./CustomerShoppingIsComplete.module.scss"
import { Button } from "../../Button"
import { useTranslation } from "next-i18next"

interface CustomerShoppingIsComplete {
  title: string
  content: string
}

export const CustomerShoppingIsComplete: React.FC<
  CustomerShoppingIsComplete
> = ({ title, content }) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <div className={s.tittle}>
        <p>{t("ShoppingIsCompleteTitle")}</p>
      </div>
      <div className={s.content}>
        <p>{t("ShoppingIsCompleteContent")}</p>
      </div>
      <div className={s.button}>
        <Button className={s.continue}>
          {t("ShoppingIsCompleteButtonContinue")}
        </Button>
        <Button className={s.close}>
          {t("ShoppingIsCompleteButtonClose")}
        </Button>
      </div>
    </>
  )
}
