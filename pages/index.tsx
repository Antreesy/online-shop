import type { GetStaticProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Head from "next/head"
import Link from "next/link"
import { Background } from "Сomponents"
import picture from "public/assets/img/fallback-pic.png"

import s from "styles/pages/Index.module.scss"

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
})

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Homepage</title>
      </Head>
      <div className={s.main}>
        <Background
          image={picture}
          title="TITLE"
          actionText="Follow"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos expedita saepe at ea quam dolorem mollitia soluta atque blanditiis quas in praesentium exercitationem delectus, quasi tempora porro ipsum ex voluptatum.
        "
          link="tuanaycl"
        />

        <p className={s.description}>
          Login -
          <Link href="/login">
            <a className={s.title__link}>/login</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Register (for brands / influencers) -
          <Link href="/register">
            <a className={s.title__link}>/register</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Influencers Page -
          <Link href="/influencers">
            <a className={s.title__link}>/influencers</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Order success
          <Link href="/order-success">
            <a className={s.title__link}>/order-success</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          UI Kit -{" "}
          <Link href="/components-example">
            <a className={s.title__link}>/components-example</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Notifications page -
          <Link href="/account/notifications">
            <a className={s.title__link}>/account/notifications</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Payment page is on{" "}
          <Link href="/account/payment">
            <a className={s.title__link}>/account/payment</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Help Page -
          <Link href="/account/help">
            <a className={s.title__link}>/account/help</a>
          </Link>{" "}
          page
        </p>

        <p className={s.description}>
          Orders Page -
          <Link href="/account/orders">
            <a className={s.title__link}>/account/orders</a>
          </Link>{" "}
          page
        </p>
      </div>
    </>
  )
}

export default Index
