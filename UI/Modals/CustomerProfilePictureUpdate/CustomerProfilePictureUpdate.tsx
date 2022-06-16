import React, { useState } from "react"
import s from "./CustomerProfilePictureUpdate.module.scss"
import { Button } from "../../Button"
import { FileSelect } from "../../FileSelect"
import ModalWindow from "../../ModalWindow/ModalWindow"
import { CustomerProfilePictureUpdateSuccess } from "./CustomerProfilePictureUpdateSuccess"

interface CustomerProfilePictureUpdate {
  labels: {
    tittle: string
    content: string
    nextModalPage: boolean
    setNextModalPage: React.Dispatch<React.SetStateAction<boolean>>
  }
}

export const CustomerProfilePictureUpdate: React.FC<
  CustomerProfilePictureUpdate
> = ({ labels }) => {
  const [value, setValue] = useState<File | null>(null)
  return (
    <div className={s.flex_box}>
      <div>
        <div className={s.pictures} />
      </div>

      <div className={s.container}>
        <div className={s.tittle}>
          <p>{labels.tittle}</p>
        </div>
        <div className={s.content}>
          <p>{labels.content}</p>
        </div>
        <div className={s.select}>
          <FileSelect value={value} setValue={setValue} />

          <div className={s.take_photo}>
            <u>Take a Photo</u>
          </div>
        </div>
        <div className={s.button}>
          <Button
            onClick={() => labels.setNextModalPage(!labels.nextModalPage)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
