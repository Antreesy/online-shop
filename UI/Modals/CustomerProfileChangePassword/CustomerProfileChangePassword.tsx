import React, { useState } from "react"
import s from "./CustomerProfileChangePassword.module.scss"
import { Button } from "../../Button"
import { Input } from "../../Input"
import {useTranslation} from "next-i18next";

interface CustomerProfileChangePassword {
    content: string
    nextPasswordModal: boolean
    setNextPasswordModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerProfileChangePassword: React.FC<
  CustomerProfileChangePassword
> = ({ content, nextPasswordModal, setNextPasswordModal }) => {
  const [inputValue, setInputValue] = useState<string>("")
    const { t } = useTranslation("modal")
  return (
    <div className={s.container}>
      <div className={s.content}>
        <p>{t("CustomerProfileChangePasswordContent")}</p>
      </div>

      <div className={s.inputs}>
        <Input
          label={t("CustomerProfileChangeOldPass")}
          setValue={setInputValue}
          value={inputValue}
        />
        <Input
          label={t("CustomerProfileChangeNewPass")}
          setValue={setInputValue}
          value={inputValue}
        />
        <Input
          label={t("CustomerProfileChangeNewPassAgain")}
          setValue={setInputValue}
          value={inputValue}
        />
      </div>

      <div className={s.button}>
        <Button
          onClick={() => setNextPasswordModal(!nextPasswordModal)}
        >
            {t("CustomerProfileChangePassword")}
        </Button>
      </div>
    </div>
  )
}
