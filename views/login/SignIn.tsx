import { Controller, useForm } from "react-hook-form"
import cn from "classnames"

import Link from "next/link"
import { Button, Input } from "UI"

import s from "styles/pages/login.module.scss"

interface LoginType {
  email: string
  password: string
}

interface SignProps {
  tabSwitch: () => void
}

const SignIn: React.FC<SignProps> = ({ tabSwitch }) => {
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
        <div className={cn(s.inputs, s.inputs__sign_in)}>
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
        <Button variant="text" onClick={tabSwitch} className={s.tab_switcher}>
          Not Registered Yet ? Sign Up
        </Button>
        <Button
          variant={"outlined"}
          className={cn(s.btn_facebook, s.btn, s.btn_facebook__signup)}
          onClick={onClickHandler}
        >
          Sign In with Facebook
        </Button>
        <Link href="#">
          <a> Forget Password ?</a>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
