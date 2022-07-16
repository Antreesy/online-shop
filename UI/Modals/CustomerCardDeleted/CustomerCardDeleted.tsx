import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "./customerCardDeleted.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CustomerCardDeletedProps {}

export const CustomerCardDeleted: React.FC<CustomerCardDeletedProps> = () => {
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.title}>{t("profileDeleteCard")}</p>
      <Button className={s.button}>{t("profileButton")}</Button>
    </>
  )
}
