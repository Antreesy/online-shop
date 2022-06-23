import { Button } from "UI"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import s from "./returnButton.module.scss"

const ReturnButton: React.FC = () => {
  const { t } = useTranslation("product")
  const router = useRouter()
  return (
    <div className={s.button_wrapper} onClick={() => router.back()}>
      <Button icon iconLeft="arrow_left" className={s.button} />
      {t("productsTopButton")}
    </div>
  )
}

export default ReturnButton
