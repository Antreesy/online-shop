import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "./customerCardDeleted.module.scss"

interface CustomerCardDeletedProps {
  title: string
}

export const CustomerCardDeleted: React.FC<CustomerCardDeletedProps> = ({
  title,
}) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.title}>{t("profileDeleteCard")}</p>
      <Button className={s.button}>{t("profileButton")}</Button>
    </>
  )
}
