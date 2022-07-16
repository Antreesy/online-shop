import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "./customerProductAdded.module.scss"

export const CustomerProductAdded: React.FC = () => {
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.title}>{t("productDetailTitle")}</p>
      <p className={s.content}>{t("productDetailContent")}</p>

      <div className={s.button_wrapper}>
        <Button>{t("productDetailGoButton")}</Button>
        <Button variant="outlined">{t("productDetailBackButton")}</Button>
      </div>
    </>
  )
}
