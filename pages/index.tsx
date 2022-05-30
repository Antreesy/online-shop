//Global Dependencies
import type { GetStaticProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

//Project Components
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import LangRoute from "Сomponents/LanguageRouting/LangRoute"
import { Header } from "Сomponents/Header"

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
    <div className={styles.container}>
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
          Redux example is on{" "}
          <Link href="/redux-example">
            <a className={styles.title__link}>/redux-example</a>
          </Link>{" "}
          page
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Index
