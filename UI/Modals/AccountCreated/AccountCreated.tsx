import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "./accountCreated.module.scss"

interface AccountCreatedProps {
  title: string
  content: string
}

export const AccountCreated: React.FC<AccountCreatedProps> = ({
  title,
  content,
}) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.title}>{t("memberTitle")}</p>
      <p className={s.content}>{t("memberContent")}</p>
      <Button className={s.button}>{t("memberButton")}</Button>
    </>
  )
}
