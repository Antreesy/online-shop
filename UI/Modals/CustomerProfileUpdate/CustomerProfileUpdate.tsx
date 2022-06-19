import React from "react"
import s from "./CustomerProfileUpdate.module.scss"
import { Button } from "../../Button"
import { useTranslation } from "next-i18next"

interface CustomerProfileUpdate {
  title: string
  content: string
}

export const CustomerProfileUpdate: React.FC<CustomerProfileUpdate> = ({
  title,
  content,
}) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <div className={s.tittle}>
        <p>{t("CustomerProfileUpdateTitle")}</p>
      </div>
      <div className={s.content}>
        <p>{t("CustomerProfileUpdateContent")}</p>
      </div>
      <div className={s.button}>
        <Button>{t("CustomerProfileUpdateButton")}</Button>
      </div>
    </>
  )
}
