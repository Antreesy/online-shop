import React from "react"
import { Controller, useForm } from "react-hook-form"
import s from "./Login.module.scss"
import { Button, Input } from "../../UI"
import cn from "classnames"

interface LoginType {
  email: string
  password: string
}

export const SingUp = () => {
  const { handleSubmit, control } = useForm<LoginType>({
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <form className={s.form}>
        <div
          className={cn(s.inputs, s.inputs_signup)}
          style={{ marginBottom: "" }}
        >
          <Controller
            name={"email"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={""}
                setValue={onChange}
                value={value}
                placeholder={"E-Mail"}
              />
            )}
          />
          <Controller
            name={"password"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={""}
                setValue={onChange}
                value={value}
                type={"password"}
                placeholder={"Password"}
              />
            )}
          />
        </div>
        <Button className={s.btn} onClick={onSubmit}>
          Sign In
        </Button>
      </form>
      <div className={s.form_footer}>
        <span>Not Registered Yet ? Sign Up</span>
        <Button
          variant={"outlined"}
          className={cn(s.facebook, s.btn, s.facebook_signup)}
        >
          Sign In with Facebook
        </Button>
      </div>
    </>
  )
}
