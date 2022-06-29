import { NextPage } from "next"

import { Tabs } from "UI"

import SignIn from "views/login/SignIn"
import SignUp from "views/login/SignUp"

import s from "styles/pages/login.module.scss"

const Login: NextPage = () => {
  return (
    <>
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
