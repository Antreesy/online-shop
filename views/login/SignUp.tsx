import { Controller, useForm } from "react-hook-form"
import cn from "classnames"

import Link from "next/link"
import { Button, Input } from "UI"

import s from "styles/pages/Login.module.scss"

interface LoginType {
  email: string
  password: string
}

const SignUp = () => {
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

export default SignUp
