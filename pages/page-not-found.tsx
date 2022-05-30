import { NextPage } from "next"
import Image from "next/image"
import React from "react"
import image from "../public/background1.png"
import s from "../styles/theme/page-not-found.module.scss"

const PageNotFound: NextPage = () => {
  return (
    <div className={s.background}>
      <Image src={image} />
    </div>
  )
}

export default PageNotFound
