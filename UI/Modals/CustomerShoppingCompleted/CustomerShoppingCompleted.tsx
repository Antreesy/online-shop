import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "./customerShoppingCompleted.module.scss"

interface CustomerShoppingCompletedProps {
  title: string
  content: string
}

export const CustomerShoppingCompleted: React.FC<
  CustomerShoppingCompletedProps
> = ({ title, content }) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.title}>{t("ShoppingIsCompleteTitle")}</p>
      <p className={s.content}>{t("ShoppingIsCompleteContent")}</p>

      <div className={s.button_wrapper}>
        <Button>{t("ShoppingIsCompleteButtonContinue")}</Button>
        <Button variant="outlined">{t("ShoppingIsCompleteButtonClose")}</Button>
      </div>
    </>
  )
}
