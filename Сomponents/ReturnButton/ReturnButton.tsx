import { Button } from "UI"

import s from "./returnButton.module.scss"
import {useTranslation} from "next-i18next";

const ReturnButton: React.FC = () => {
    const { t } = useTranslation("product")
  return (
    <div className={s.button_wrapper}>
      <Button icon iconLeft="arrow_left" variant="text" className={s.button} />
      <span>{t("productsTopButton")}</span>
    </div>
  )
}

export default ReturnButton
