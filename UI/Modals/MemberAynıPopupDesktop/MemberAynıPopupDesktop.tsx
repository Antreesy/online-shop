import React from "react"
import s from "./memberAynIPopup.module.scss"
import { Button } from "../../Button"
import { useTranslation } from "next-i18next"

interface MemberAynPopupDesktopProps {
  title: string
  content: string
}

export const MemberAynPopupDesktop: React.FC<MemberAynPopupDesktopProps> = ({
  title,
  content,
}) => {
  const { t } = useTranslation("modal")
  return (
    <>
      <div className={s.tittle}>
        <p>{t("memberTitle")}</p>
      </div>
      <div className={s.content}>
        <p>{t("memberContent")}</p>
      </div>
      <div className={s.button}>
        <Button>{t("memberButton")}</Button>
      </div>
    </>
  )
}
