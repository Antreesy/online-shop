import { useState } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Tabs } from "UI"

import SignIn from "views/login/SignIn"
import SignUp from "views/login/SignUp"

import s from "styles/pages/login.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
      ])),
    },
  }
}

const Login: NextPage = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <>
      <main className={s.main}>
        <div className={s.wrapper}>
          <Tabs
            labels={["Sign In", "Sign Up"]}
            value={value}
            onChange={setValue}
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
      </main>
    </>
  )
}

export default Login
