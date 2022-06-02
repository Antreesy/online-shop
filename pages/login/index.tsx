import React from "react"
import { HeaderLight } from "../../Сomponents"
import { Tabs } from "./../../UI"
import s from "./Login.module.scss"
import { SingUp } from "./SingUp"
import { SingIn } from "./SingIn"

const Login = () => {
  return (
    <>
      <HeaderLight />
      <main className={s.main}>
        <div className={s.wrapper}>
          <div className={s.tabs}>
            <Tabs
              labels={["Sign In", "Sign Up"]}
              values={[<SingIn key={"SignIn"} />, <SingUp key={"SingUp"} />]}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
