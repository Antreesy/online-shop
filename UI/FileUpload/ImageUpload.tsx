import { useTranslation } from "next-i18next"

import { InputLabel } from "@mui/material"
import { FileUpload, Button } from "UI"

import s from "./fileUpload.module.scss"

interface ImageUploadProps {
  label?: string
  amount?: number
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, amount = 1 }) => {
  const { t } = useTranslation("common")

  return (
    <div>
      {label && <InputLabel className={s.label}>{label}</InputLabel>}
      <div className={s.image_upload}>
        <h4 className={s.caption}>{t("imageUpload.selectNewImage")}</h4>
        <div className={s.wrapper}>
          {Array.from(Array(amount)).map((item, index) => (
            <FileUpload
              key={index}
              className={s.uploader}
              title={t("imageUpload.JPGJPEGPNG")}
            />
          ))}
        </div>
        <p className={s.text}>
        {t("imageUpload.theImageFormat")}
        </p>
        <p className={s.text}>
        {t("imageUpload.theImageSize")}
        </p>
        <p className={s.text}>
          <a>{t("click")}</a>{" "}{t("imageUpload.toViewVisualRules")}
        </p>
        <Button className={s.button}>{t("load")}</Button>
      </div>
    </div>
  )
}

export default ImageUpload
