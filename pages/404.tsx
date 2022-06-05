// import { NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import { Button } from "UI"

import s from "../styles/pages/page-not-found.module.scss"

import type { GetStaticProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer", "pnt"])),
  },
})



const PageNotFound: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation("pnt")

  const handleClick = () => {
    router.push("/")
  }

  return (
    <>
      <div className={s.background}></div>
      <div className={s.content}>
        <h1>{t("page")}</h1>
        <p>
          {t("text")}
        </p>
        <br />
        <Button onClick={handleClick} className={s.button_purple}>
          {t("btn")}
        </Button>
      </div>
    </>
  )
}

export default PageNotFound
