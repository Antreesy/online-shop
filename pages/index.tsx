//Global Dependencies
import React from "react"
import type { GetStaticProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

//Project Components
import Head from "next/head"
import Link from "next/link"
import LangRoute from "Сomponents/LanguageRouting/LangRoute"
import { Header, Footer } from "Сomponents"

import { footerNav } from "shared/constants/footernav"

//Project Styles
import styles from "styles/pages/Index.module.scss"

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
})

const Index: NextPage = (props: any) => {
  const { t } = useTranslation("common")
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Homepage</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <h2>
          {props.locale}
          {t("hello")}
        </h2>
        <LangRoute lng="en" />
        <LangRoute lng="ru" />

        <p className={styles.description}>
          UI Kit is on{" "}
          <Link href="/components-example">
            <a className={styles.title__link}>/components-example</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Register is on{" "}
          <Link href="/register">
            <a className={styles.title__link}>/register</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Order success page{" "}
          <Link href="/order-success">
            <a className={styles.title__link}>/order-success</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Redux example is on{" "}
          <Link href="/redux-example">
            <a className={styles.title__link}>/redux-example</a>
          </Link>{" "}
          page
        </p>
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default Index
