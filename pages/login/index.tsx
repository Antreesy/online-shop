import { NextPage } from "next"

import { HeaderLight } from "Сomponents"
import { Tabs } from "UI"
import { SignUp } from "./SignUp"
import { SignIn } from "./SignIn"

import s from "./login.module.scss"

const Login: NextPage = () => {
  return (
    <>
      <HeaderLight />
      <main className={s.main}>
        <div className={s.wrapper}>
          <div className={s.tabs}>
            <Tabs
              labels={["Sign In", "Sign Up"]}
              values={[<SignIn key={"Sign In"} />, <SignUp key={"Sign Up"} />]}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
