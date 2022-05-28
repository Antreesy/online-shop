//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

//Project Styles
import styles from "styles/Index.module.scss"

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ILONSI SHOP | Homepage</title>
      </Head>

      <main className={styles.main}>
        <h1>Welcome to Ilonsi shop!</h1>

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
