import { Controller, useForm } from "react-hook-form"

import { Button, CreditCard, Input } from "UI"

import s from "./cardForm.module.scss"

interface CardInfoProps {
  cardNumber: string
  cardholderName: string
  cardExpiration: string
  cardSecurity: string
}

const CardForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isDirty, isValid },
    reset,
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
    onChange: (e) =>
      (e.target.value =
        e.target.value.length < 19
          ? e.target.value.replace(/[^\dA-Z]/g, "").replace(/(.{4})/g, "$1 ")
          : e.target.value.substr(0, 19)),
  })

  const cardholderNameValidation = register("cardholderName", {
    required: true,
    minLength: 5,
    onChange: (e) =>
      (e.target.value =
        e.target.value.length < 20
          ? e.target.value.replace(/[^a-zA-Z ]/, "")
          : e.target.value.substr(0, 20)),
  })

  const cardExpirationValidation = register("cardExpiration", {
    required: true,
    minLength: 4,
    onChange: (e) =>
      (e.target.value =
        e.target.value.length < 5
          ? e.target.value.replace(/[^0-9]/, "").replace(/^(.{2})/, "$1/")
          : e.target.value.substr(0, 5)),
  })

  const cardSecurityValidation = register("cardSecurity", {
    required: true,
    minLength: 3,
    onChange: (e) =>
      (e.target.value =
        e.target.value.length < 3
          ? e.target.value.replace(/[^0-9]/, "")
          : e.target.value.substr(0, 3)),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <form className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.cardInputs}>
        <Controller
          name={"cardNumber"}
          control={control}
          rules={{ required: true, maxLength: 19 }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={"Card number"}
              setValue={onChange}
              value={value}
              placeholder={"0000 0000 0000 0000"}
              type={"tel"}
              isRequired={true}
              className={s.longInput}
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
              label={"Name on the card"}
              setValue={onChange}
              value={value}
              placeholder={"Yalçın Topkaya"}
              type={"text"}
              isRequired={true}
              className={s.longInput}
              errorText={"This field cannot be left blank"}
              validation={cardholderNameValidation}
            />
          )}
        />

        <div className={s.flex}>
          <Controller
            name={"cardExpiration"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={"Expiration date"}
                setValue={onChange}
                value={value}
                placeholder={"06/2026"}
                type={"tel"}
                isRequired={true}
                className={s.shortInput}
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
                label={"Security info"}
                setValue={onChange}
                value={value}
                placeholder={"CVC/CVV"}
                type={"password"}
                isRequired={true}
                className={s.shortInput}
                errorText={"This field cannot be left blank"}
                validation={cardSecurityValidation}
              />
            )}
          />
        </div>
        <Button
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          className={s.desktopButton}
        >
          Save
        </Button>
      </div>
      <CreditCard
        isColored
        key={4}
        id={8375}
        cardNumber={watch("cardNumber")}
        cardHolder={watch("cardholderName")}
        expireDate={watch("cardExpiration")}
        onDelete={() => {
          reset()
        }}
      />
      <Button disabled={!isValid} className={s.mobileButton}>
        Save
      </Button>
    </form>
  )
}

export default CardForm
