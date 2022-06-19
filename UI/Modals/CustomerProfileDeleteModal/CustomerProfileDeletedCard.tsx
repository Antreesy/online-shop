import React from "react"
import s from "./CustomerProfileDeleted.module.scss"
import { Button } from "../../Button"
import { useTranslation } from "next-i18next"

interface CustomerProfileDeletedCardProps {
  title: string
}

export const CustomerProfileDeletedCard: React.FC<
  CustomerProfileDeletedCardProps
> = ({ title }) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <div className={s.tittle}>
        <p>{t("profileDeleteCard")}</p>
      </div>
      <div className={s.button}>
        <Button>{t("profileButton")}</Button>
      </div>
    </>
  )
}
