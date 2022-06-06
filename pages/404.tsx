import type { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Button } from "UI"

import s from "../styles/pages/page-not-found.module.scss"


export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["404"])),
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
        <h1>{t("404page")}</h1>
        <p>
          {t("404text")}
        </p>
        <br />
        <Button onClick={handleClick} className={s.button_purple}>
          {t("404button")}
        </Button>
      </div>
    </>
  )
}

export default PageNotFound
