import { Button } from "UI"

import s from "./returnButton.module.scss"
import { useTranslation } from "next-i18next"
import {useRouter} from "next/router";

const ReturnButton: React.FC = () => {
  const { t } = useTranslation("product")
    const router = useRouter()
  return (
    <div className={s.button_wrapper}>
      <Button icon iconLeft="arrow_left" variant="text" className={s.button} onClick={() => router.back()} />
      <span>{t("productsTopButton")}</span>
    </div>
  )
}

export default ReturnButton
