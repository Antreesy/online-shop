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
          Login -
          <Link href="/login">
            <a className={styles.title__link}>/login</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Register (for brands / influencers) -
          <Link href="/register">
            <a className={styles.title__link}>/register</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Influencers Page -
          <Link href="/influencers">
            <a className={styles.title__link}>/influencers</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Order success
          <Link href="/order-success">
            <a className={styles.title__link}>/order-success</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          FAQ Page -
          <Link href="/faq">
            <a className={styles.title__link}>/faq</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          UI Kit -{" "}
          <Link href="/components-example">
            <a className={styles.title__link}>/components-example</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Profile page -
          <Link href="/account/profile">
            <a className={styles.title__link}>/account/profile</a>
          </Link>{" "}
          page
        </p>

        <p className={styles.description}>
          Payment page is on{" "}
          <Link href="/payment">
            <a className={styles.title__link}>/payment</a>
          </Link>{" "}
          page
        </p>
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default Index
