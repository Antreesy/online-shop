import { useForm } from "react-hook-form"
import { Button } from "UI/Button"
import { CreditCard } from "UI/CreditCard"
import { Input } from "UI/Input"

import s from "./cardForm.module.scss"

const CardForm: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <form className={s.cardForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.cardInputs}>
        <Input
          type="tel"
          label="Card number"
          placeholder="1234 8547 7294 3959"
          className={s.longInput}
          validation={register("cardNumber", {
            required: true,
            minLength: 19,
            onChange: (e) =>
              (e.target.value =
                e.target.value.length < 19
                  ? e.target.value
                      .replace(/[^\dA-Z]/g, "")
                      .replace(/(.{4})/g, "$1 ")
                  : e.target.value.substr(0, 19)),
          })}
        />
        <Input
          type="text"
          label="Name on the card"
          placeholder="Yalçın Topkaya"
          className={s.longInput}
          validation={register("cardName", {
            required: true,
            minLength: 5,
            onChange: (e) =>
              (e.target.value =
                e.target.value.length < 20
                  ? e.target.value.replace(/[^a-zA-Z ]/, "")
                  : e.target.value.substr(0, 20)),
          })}
        />
        <div className={s.flex}>
          <Input
            type="tel"
            label="Expiration date"
            placeholder="06/2026"
            className={s.shortInput}
            validation={register("cardExpiration", {
              required: true,
              minLength: 4,
              onChange: (e) =>
                (e.target.value =
                  e.target.value.length < 5
                    ? e.target.value
                        .replace(/[^0-9]/, "")
                        .replace(/^(.{2})/, "$1/")
                    : e.target.value.substr(0, 5)),
            })}
          />
          <Input
            type="password"
            label="Security info"
            placeholder="CVC/CVV"
            className={s.shortInput}
            validation={register("cardSecCode", {
              required: true,
              minLength: 3,
              onChange: (e) =>
                (e.target.value =
                  e.target.value.length < 3
                    ? e.target.value.replace(/[^0-9]/, "")
                    : e.target.value.substr(0, 3)),
            })}
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
        cardHolder={watch("cardName")}
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
