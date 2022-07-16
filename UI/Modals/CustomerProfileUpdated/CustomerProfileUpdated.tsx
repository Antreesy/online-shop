import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "./customerProfileUpdated.module.scss"

export const CustomerProfileUpdated: React.FC = () => {
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.title}>{t("CustomerProfileUpdateTitle")}</p>
      <p className={s.content}>{t("CustomerProfileUpdateContent")}</p>
      <Button className={s.button}>{t("CustomerProfileUpdateButton")}</Button>
    </>
  )
}
