import { Button } from "UI"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import s from "./returnButton.module.scss"

const ReturnButton: React.FC = () => {
  const { t } = useTranslation("product")
  const router = useRouter()
  return (
    <div className={s.button_wrapper}>
      <Button
        icon
        iconLeft="arrow_left"
        className={s.button}
        onClick={() => router.back()}
      />
      {t("productsTopButton")}
    </div>
  )
}

export default ReturnButton
