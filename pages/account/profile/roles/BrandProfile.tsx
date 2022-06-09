import { Controller, useForm } from "react-hook-form"

import { Button, Input } from "UI"
import { SectionHeader } from "Сomponents"

import s from "styles/pages/account/profile.module.scss"

export interface BrandProfileProps {
  brand_name: string
  brandDisplayName: string
  email: string
  phone: string
  address: string
  password: string
}

export const BrandProfile: React.FC<BrandProfileProps> = (props) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<BrandProfileProps>({
    criteriaMode: "all",
    defaultValues: {
      brand_name: props.brand_name,
      brandDisplayName: props.brandDisplayName,
      email: props.email,
      phone: props.phone,
      address: props.address,
      password: props.password,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className={s.content}>
      <SectionHeader className={s.title} title={"Profile"} />
      <form className={s.form}>
        <Controller
          name={"brand_name"}
          control={control}
          rules={{ required: true, minLength: 2 }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={"Brand Name"}
              setValue={onChange}
              value={value}
              placeholder={"Enter the store name"}
              type={"text"}
              isRequired={true}
              className={errors.brand_name ? "error" : ""}
              errorText={"This field cannot be left blank"}
            />
          )}
        />

        <Controller
          name={"brandDisplayName"}
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={"Brand Display Name"}
              setValue={onChange}
              value={value}
              placeholder={"Enter the brand display name"}
              type={"text"}
            />
          )}
        />

        <Controller
          name={"email"}
          control={control}
          rules={{ required: true, pattern: /.+@.+\..+/i, minLength: 6 }}
          render={({ field: { onChange, value } }) => (
            <Input
              label={"E-Mail"}
              value={value}
              setValue={onChange}
              type={"email"}
              isRequired={true}
              className={errors.email ? "error" : ""}
              errorText={"This field cannot be left blank"}
              placeholder={"Enter the E-mail"}
            />
          )}
        />

        <Controller
          name={"phone"}
          control={control}
          rules={{ required: false, pattern: /[0-9]{3}[0-9]{3}[0-9]{4}/i }}
          render={({ field: { onChange, value }, fieldState }) => (
            <Input
              label={"Phone Number"}
              value={value}
              setValue={onChange}
              type={"tel"}
              placeholder={"Enter the phone number"}
            />
          )}
        />

        <Controller
          name={"address"}
          control={control}
          rules={{ required: false }}
          render={({ field: { onChange, value }, fieldState }) => (
            <Input
              label={"Address"}
              setValue={onChange}
              value={value}
              placeholder={"Enter the address"}
              type={"text"}
            />
          )}
        />

        <Controller
          name={"password"}
          control={control}
          rules={{ required: true, minLength: 8 }}
          render={({ field: { onChange, value }, fieldState }) => (
            <Input
              label={"Password"}
              setValue={onChange}
              value={value}
              type={"password"}
              isRequired={true}
              errorText={"This field cannot be left blank"}
              placeholder={"Enter the password"}
              className={errors.password ? "error" : ""}
            />
          )}
        />

        {isDirty ? (
          <div className={s.button}>
            <Button className={s.save_button} onClick={onSubmit}>
              {" "}
              Save{" "}
            </Button>
          </div>
        ) : null}
      </form>
    </div>
  )
}
