import { NextPage } from "next"

import SignUp from "views/login/SignUp"
import SignIn from "views/login/SignIn"
import { Tabs } from "UI"

import s from "styles/pages/Login.module.scss"

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
