import { Controller, useForm } from "react-hook-form"
import cn from "classnames"

import Link from "next/link"
import { Button, CheckboxGroup, Input } from "UI"

import s from "styles/pages/login.module.scss"

interface LoginType {
  name: string
  email: string
  phone: string
  password: string
  isAgreement: boolean
  isPromo: boolean
}

interface SignProps {
  tabSwitch: () => void
}

const SignUp: React.FC<SignProps> = ({ tabSwitch }) => {
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

  const onClickHandler = () => {
    console.log("Login via Facebook")
  }

  return (
    <div className={s.form_container}>
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
        <div className={s.login_text}>
          <span>
            You can reach ilonsi.com Personal Data Protection and Processing
            Conditions within the scope of
            <Link href="#">
              <a style={{ textDecoration: "underline" }}> KVKK here</a>
            </Link>
            .
          </span>
        </div>
        <Button className={s.btn} onClick={onSubmit}>
          Sign Up
        </Button>
      </form>
      <div className={s.form_footer}>
        <Button
          variant="text"
          onClick={tabSwitch}
          className={s.tab_switcher}
        >
          Registered Already? Sign In
        </Button>
        <Button
          variant={"outlined"}
          className={cn(s.btn_facebook, s.btn)}
          onClick={onClickHandler}
        >
          Sign Up with Facebook
        </Button>
      </div>
    </div>
  )
}

export default SignUp
