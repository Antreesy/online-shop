import React from "react"
import { Controller, useForm } from "react-hook-form"
import s from "./Login.module.scss"
import { Button, Input } from "../../UI"
import cn from "classnames"
import Link from "next/link"

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

  const onClickHandler = () => {
    console.log("Login via Facebook")
  }

  return (
    <div className={s.form_container}>
      <form className={s.form}>
        <div
          className={cn(s.inputs, s.inputs__signup)}
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
        <Link href="#">
          <a>Not Registered Yet ? Sign Up</a>
        </Link>
        <Button
          variant={"outlined"}
          className={cn(s.btn_facebook, s.btn, s.btn_facebook__signup)}
          onClick={onClickHandler}
        >
          Sign In with Facebook
        </Button>
      </div>
    </div>
  )
}
