import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "next-i18next"

import { Button, CreditCard, Input } from "UI"

import s from "./cardForm.module.scss"

interface CardFormProps {
  onClose?: () => void
}

interface CardInfoProps {
  cardNumber: string
  cardholderName: string
  cardExpiration: string
  cardSecurity: string
}

const CardForm: React.FC<CardFormProps> = ({ onClose }) => {
  const { t } = useTranslation(["payment", "common"])

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isDirty, isValid },
    reset,
    setValue,
    watch,
  } = useForm<CardInfoProps>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      cardNumber: "",
      cardholderName: "",
      cardExpiration: "",
      cardSecurity: "",
    },
  })

  const cardNumberValidation = register("cardNumber", {
    required: true,
    minLength: 19,
    onChange: (e) => {
      if (e.target.value.length < 19) {
        setValue(
          "cardNumber",
          e.target.value.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 "),
        )
      } else {
        setValue("cardNumber", e.target.value.substr(0, 19))
      }
    },
  })

  const cardholderNameValidation = register("cardholderName", {
    required: true,
    minLength: 5,
    onChange: (e) => {
      if (e.target.value.length < 20) {
        setValue("cardholderName", e.target.value.replace(/^\p{L}/, ""))
      } else {
        setValue("cardholderName", e.target.value.substr(0, 20))
      }
    },
  })

  const cardExpirationValidation = register("cardExpiration", {
    required: true,
    minLength: 4,
    onChange: (e) => {
      if (e.target.value.length < 5) {
        setValue(
          "cardExpiration",
          e.target.value.replace(/[^0-9]/, "").replace(/^(.{2})/, "$1/"),
        )
      } else {
        setValue("cardExpiration", e.target.value.substr(0, 5))
      }
    },
  })

  const cardSecurityValidation = register("cardSecurity", {
    required: true,
    minLength: 3,
    onChange: (e) => {
      if (e.target.value.length < 3) {
        setValue("cardSecurity", e.target.value.replace(/[^0-9]/, ""))
      } else {
        setValue("cardSecurity", e.target.value.substr(0, 3))
      }
    },
  })

  const onSubmit = () => {
    onClose?.()
    reset()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.input_wrapper}>
        <Controller
          name={"cardNumber"}
          control={control}
          rules={{ required: true, maxLength: 19 }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={t("cardNumber")}
              setValue={onChange}
              value={value}
              placeholder={"0000 0000 0000 0000"}
              type={"tel"}
              isRequired={true}
              className={s.input_long}
              errorText={"This field cannot be left blank"}
              validation={cardNumberValidation}
            />
          )}
        />

        <Controller
          name={"cardholderName"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              label={t("nameOnTheCard")}
              setValue={onChange}
              value={value}
              placeholder={"CARDHOLDER NAME"}
              type={"text"}
              isRequired={true}
              className={s.input_long}
              errorText={"This field cannot be left blank"}
              validation={cardholderNameValidation}
            />
          )}
        />

        <div className={s.flex_row}>
          <Controller
            name={"cardExpiration"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={t("expirationDate")}
                setValue={onChange}
                value={value}
                placeholder={"01/22"}
                type={"tel"}
                isRequired={true}
                className={s.input_short}
                errorText={"This field cannot be left blank"}
                validation={cardExpirationValidation}
              />
            )}
          />

          <Controller
            name={"cardSecurity"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={t("securityInfo")}
                setValue={onChange}
                value={value}
                placeholder={"CVC/CVV"}
                type={"password"}
                isRequired={true}
                className={s.input_short}
                errorText={"This field cannot be left blank"}
                validation={cardSecurityValidation}
              />
            )}
          />
        </div>

        <Button
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          className={s.button_desktop}
        >
          {t("common:save")}
        </Button>
      </div>

      <div className={s.card_wrapper}>
        <CreditCard
          isActive
          large
          id={1}
          cardNumber={watch("cardNumber") || "0000 0000 0000 0000"}
          cardHolder={watch("cardholderName") || "CARDHOLDER NAME"}
          expireDate={watch("cardExpiration") || "01/22"}
          onDelete={() => {
            reset()
          }}
        />
      </div>

      <Button
        disabled={!isValid}
        className={s.button_mobile}
        onClick={handleSubmit(onSubmit)}
      >
        Save
      </Button>
    </form>
  )
}

export default CardForm
