import { useState } from "react"
import { useTranslation } from "next-i18next"

import { Button, Input } from "UI"

import s from "./customerPasswordChange.module.scss"

interface CustomerPasswordChangeProps {
  nextModal: boolean
  setNextModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomerPasswordChange: React.FC<CustomerPasswordChangeProps> = ({
  nextModal,
  setNextModal,
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const { t } = useTranslation("modal")
  return (
    <>
      <p className={s.content}>{t("CustomerProfileChangePasswordContent")}</p>

      <Input
        className={s.input}
        placeholder={t("CustomerProfileChangeOldPass")}
        setValue={setInputValue}
        value={inputValue}
      />
      <Input
        className={s.input}
        placeholder={t("CustomerProfileChangeNewPass")}
        setValue={setInputValue}
        value={inputValue}
      />
      <Input
        className={s.input}
        placeholder={t("CustomerProfileChangeNewPassAgain")}
        setValue={setInputValue}
        value={inputValue}
      />

      <Button className={s.button} onClick={() => setNextModal(!nextModal)}>
        {t("CustomerProfileChangePassword")}
      </Button>
    </>
  )
}
