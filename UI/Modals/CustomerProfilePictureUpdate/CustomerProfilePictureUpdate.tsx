import React, { useState } from "react"
import s from "./CustomerProfilePictureUpdate.module.scss"
import { Button } from "../../Button"
import { FileSelect } from "../../FileSelect"
import {useTranslation} from "next-i18next";

interface CustomerProfilePictureUpdate {
    title: string
    content: string
    nextModalPage: boolean
    setNextModalPage: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerProfilePictureUpdate: React.FC<
  CustomerProfilePictureUpdate
> = ({ title, content, setNextModalPage, nextModalPage }) => {
  const [value, setValue] = useState<File | null>(null)
    const { t } = useTranslation("modal")
  return (
    <div className={s.flex_box}>
      <div>
        <div className={s.pictures} />
      </div>

      <div className={s.container}>
        <div className={s.tittle}>
          <p>{t("CustomerProfilePictureUpdateTitle")}</p>
        </div>
        <div className={s.content}>
          <p>{t("CustomerProfilePictureUpdateContent")}</p>
        </div>
        <div className={s.select}>
          <FileSelect value={value} setValue={setValue} />

          <div className={s.take_photo}>
            <u>Take a Photo</u>
          </div>
        </div>
        <div className={s.button}>
          <Button
            onClick={() => setNextModalPage(!nextModalPage)}
          >
              {t("CustomerProfilePictureUpdateButton")}
          </Button>
        </div>
      </div>
    </div>
  )
}
