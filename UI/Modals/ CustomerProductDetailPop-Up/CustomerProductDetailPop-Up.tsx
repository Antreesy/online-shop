import React from "react"
import s from "./CustomerProductDetailPopUp.module.scss"
import { Button } from "../../Button"
import {useTranslation} from "next-i18next";

interface CustomerProductDetailPopUp {
    title: string
    content: string
}

export const CustomerProductDetailPopUp: React.FC<
  CustomerProductDetailPopUp
> = ({ title, content }) => {
    const { t } = useTranslation("modal")
    return (
    <>
      <div className={s.tittle}>
        <p>{t("productDetailTitle")}</p>
      </div>
      <div className={s.content}>
        <p>{t("productDetailContent")}</p>
      </div>
      <div className={s.button}>
        <Button className={s.back}>{t("productDetailBackButton")}</Button>
        <Button className={s.go}>{t("productDetailGoButton")}</Button>
      </div>
    </>
  )
}
