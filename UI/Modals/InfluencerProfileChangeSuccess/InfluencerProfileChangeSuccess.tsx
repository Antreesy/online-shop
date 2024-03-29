import React from "react"
import s from "./InfluencerProfileChangeSuccess.module.scss"
import { Button } from "UI/Button"

interface InfluencerProfileChangeSuccessProps {
  title: string
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  btnName: string
}

export const InfluencerProfileChangeSuccess: React.FC<
  InfluencerProfileChangeSuccessProps
> = ({ title, text, onClick, btnName }) => {
  return (
    <>
      <div>
        <p className={s.title}>{title}</p>
      </div>
      <div>
        <p className={s.text}>{text}</p>
      </div>
      <Button onClick={onClick} className={s.button}>
        {btnName}
      </Button>
    </>
  )
}
