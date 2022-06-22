import { useState } from "react"
import { useTranslation } from "next-i18next"

import Image from "next/image"
import { Button, FileSelect } from "UI"

import card from "public/assets/img/card.png"

import s from "./customerPictureUpdated.module.scss"

interface CustomerPictureUpdatedProps {
  title: string
  content: string
  nextModal: boolean
  setNextModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerPictureUpdated: React.FC<CustomerPictureUpdatedProps> = ({
  nextModal,
  setNextModal,
}) => {
  const [value, setValue] = useState<File | null>(null)
  const { t } = useTranslation("modal")
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <Image src={card} layout="fill" />
      </div>

      <div className={s.container}>
        <p className={s.title}>{t("CustomerProfilePictureUpdateTitle")}</p>
        <p className={s.content}>{t("CustomerProfilePictureUpdateContent")}</p>
        <div className={s.select}>
          <FileSelect value={value} setValue={setValue} />
        </div>

        <a className={s.take_photo}>Take a Photo</a>

        <Button className={s.button} onClick={() => setNextModal(!nextModal)}>
          {t("CustomerProfilePictureUpdateButton")}
        </Button>
      </div>
    </div>
  )
}
