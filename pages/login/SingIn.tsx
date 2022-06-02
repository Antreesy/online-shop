import React from "react"
import { Controller, useForm } from "react-hook-form"
import s from "./Login.module.scss"
import { Button, CheckboxGroup, Input } from "../../UI"
import cn from "classnames"
import Link from "next/link"

interface LoginType {
  name: string
  email: string
  phone: string
  password: string
  isAgreement: boolean
  isPromo: boolean
}

export const SingIn = () => {
  const { handleSubmit, control } = useForm<LoginType>({
    criteriaMode: "all",
    defaultValues: {
      isAgreement: false,
      isPromo: false,
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <form className={s.form}>
        <div className={s.inputs}>
          <Controller
            name={"name"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={""}
                setValue={onChange}
                value={value}
                placeholder={"Name Surname"}
              />
            )}
          />
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
            name={"phone"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={""}
                setValue={onChange}
                value={value}
                placeholder={"Phone Number"}
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
                placeholder={"Password"}
              />
            )}
          />
        </div>
        <div className={s.checkboxes}>
          <Controller
            name={"isAgreement"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                setValue={onChange}
                value={value}
                className={s.text}
                labels={
                  "I have read and accept the terms of the Membership Agreement."
                }
              />
            )}
          />
          <Controller
            name={"isPromo"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <CheckboxGroup
                setValue={onChange}
                value={value}
                className={s.text}
                labels={
                  "I consent to be contacted by me for marketing and promotional purposes."
                }
              />
            )}
          />
        </div>
        <div className={s.text} style={{ marginBottom: "9px" }}>
          <span>
            You can reach ilonsi.com Personal Data Protection and Processing
            Conditions within the scope of
            <Link href="#">
              <a style={{ textDecoration: "underline" }}> KVKK here</a>
            </Link>.
          </span>
        </div>
        <Button className={s.btn} onClick={onSubmit}>
          Sign In
        </Button>
      </form>
      <div className={s.form_footer}>
        <span>Not Registered Yet ? Sign Up</span>
        <Button variant={"outlined"} className={cn(s.facebook, s.btn)}>
          Sign In with Facebook
        </Button>
        <span>Forget Password ?</span>
      </div>
    </>
  )
}
