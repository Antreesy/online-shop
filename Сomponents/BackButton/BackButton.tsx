import { useRouter } from "next/router"

import { Button } from "UI"

import s from "./backButton.module.scss"
import {useTranslation} from "next-i18next";

const BackButton = () => {
  const router = useRouter()
  const { t } = useTranslation("productInfo")

  return (
    <Button
      className={s.button}
      onClick={() => router.back()}
      iconLeft="arrow_left"
    >
      {t("buttonBack")}
    </Button>
  )
}

export default BackButton
