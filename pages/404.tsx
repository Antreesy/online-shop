import { NextPage } from "next"
import { useRouter } from "next/router"

import { Button } from "UI"

import s from "../styles/pages/page-not-found.module.scss"

const PageNotFound: NextPage = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/")
  }

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
        <Button onClick={handleClick} className={s.button_purple}>
          Return to homepage
        </Button>
      </div>
    </>
  )
}

export default PageNotFound
