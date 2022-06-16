import type { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import Head from "next/head"
import Link from "next/link"
import { Background } from "Сomponents"

import picture from "public/assets/img/fallback-pic.png"

import s from "styles/pages/Index.module.scss"

export async function getStaticProps(props: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(props.locale, ["app", "common"])),
    },
  }
}

const Index: NextPage = (props) => {
  const { t } = useTranslation()

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
        {/* TEST */}
        <p>{t("hello")}</p>
        <p className={s.description}>Common:</p>
        <Link href="/login">
          <a className={s.title__link}>Login page</a>
        </Link>{" "}
        <Link href="/register">
          <a className={s.title__link}>
            Register page (for brands / influencers)
          </a>
        </Link>{" "}
        <Link href="/register-page">
          <a className={s.title__link}>Register page</a>
        </Link>{" "}
        <Link href="/influencers">
          <a className={s.title__link}>Influencers Page</a>
        </Link>{" "}
        <Link href="/brands">
          <a className={s.title__link}>Brands Page</a>
        </Link>{" "}
        <Link href="/order-success">
          <a className={s.title__link}>Order success page</a>
        </Link>{" "}
        <Link href="/components-example">
          <a className={s.title__link}>Сomponents examples</a>
        </Link>{" "}
        <Link href="/visual-operations">
          <a className={s.title__link}>Visual-operations</a>
        </Link>{" "}
        <p className={s.description}>Account:</p>
        <Link href="/account/profile">
          <a className={s.title__link}>Profile</a>
        </Link>{" "}
        <Link href="/account/notifications">
          <a className={s.title__link}>Notifications</a>
        </Link>{" "}
        <Link href="/account/payment">
          <a className={s.title__link}>Payment</a>
        </Link>{" "}
        <Link href="/account/help">
          <a className={s.title__link}>Help</a>
        </Link>{" "}
        <Link href="/account/orders">
          <a className={s.title__link}>Orders</a>
        </Link>{" "}
        <Link href="/account/favorites">
          <a className={s.title__link}>Favorites</a>
        </Link>{" "}
      </div>
    </>
  )
}

export default Index
