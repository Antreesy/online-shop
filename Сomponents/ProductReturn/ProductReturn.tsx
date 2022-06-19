import { Button } from "UI"

import s from "styles/pages/Products.module.scss"
import {useTranslation} from "next-i18next";

const ProductReturn: React.FC = () => {
    const { t } = useTranslation("product")
  return (
    <div className={s.productsReturn}>
      <Button
        icon
        iconLeft="arrow_left"
        variant="text"
        className={s.productsReturnBtn}
      />
      <span>{t("productsTopButton")}</span>
    </div>
  )
}

export default ProductReturn
