import { useState } from "react"
import { NextPage } from "next"

import { Tabs } from "UI"

import SignIn from "views/login/SignIn"
import SignUp from "views/login/SignUp"

import s from "styles/pages/login.module.scss"

const Login: NextPage = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <>
      <main className={s.main}>
        <div className={s.wrapper}>
          <div className={s.tabs}>
            <Tabs
              labels={["Sign In", "Sign Up"]}
              value={value}
              values={[
                <SignIn
                  key={"Sign In"}
                  tabSwitch={() => {
                    setValue(1)
                  }}
                />,
                <SignUp
                  key={"Sign Up"}
                  tabSwitch={() => {
                    setValue(0)
                  }}
                />,
              ]}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
