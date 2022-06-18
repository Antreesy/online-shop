import { useRouter } from "next/router"

import { Button } from "UI"

import s from "./backButton.module.scss"

const BackButton = () => {
  const router = useRouter()

  return (
    <Button
      className={s.button}
      onClick={() => router.back()}
      iconLeft="arrow_left"
    >
      Back
    </Button>
  )
}

export default BackButton
