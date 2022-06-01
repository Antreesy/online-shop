import { NextPage } from "next"

import Link from "next/link"
import { Button } from "UI"

import s from "../styles/pages/page-not-found.module.scss"

const PageNotFound: NextPage = () => {
  return (
    <>
      <div className={s.background}></div>
      <div className={s.content}>
        <h1>Page Not Found</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          porta pharetra. Curabitur dolor sit amet venenatis purus ante.
        </p>
        <br />
        <Button className={s.button_purple}>Return to homepage</Button>
      </div>
    </>
  )
}

export default PageNotFound
