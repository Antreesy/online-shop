import type { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import { orderSuccess } from "shared/constants/order-success"
import { Card, Icon } from "UI"
import { SectionHeader } from "Сomponents"

import s from "styles/pages/order-success.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "order",
      ])),
    },
  }
}

const OrderSuccess: NextPage = () => {
  const { t } = useTranslation(["order", "common"])
  const {
    order: {
      orderNumber,
      orderDate,
      situation,
      paymentMethod,
      sendingDate,
      shippingNumber,
      helpline,
    },
    influencerRecomendations,
  } = orderSuccess

  return (
    <>
      <Head>
        <title>Order Success Page</title>
      </Head>

      <div className={s.main}>
        <div className={s.container}>
          <Icon className={s.icon} type="mark" wrapped />
          <div className={s.textContent}>
            <h1 className={s.title}>{t("yourOrder", {number: 12345})}</h1>
            <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ligula sit amet ex pulvinar laoreet eu in odio. Nulla cursus condimentum augue accumsan placerat. Etiam mattis sit amet elit et dignissim. Vestibulum vel convallis diam. Vivamus rutrum diam a orci vestibulum vehicula. Nulla facilisi. Nam bibendum sit amet velit sit amet luctus</p>
          </div>

          <SectionHeader className={s.section} />
          <div className={s.order}>
            <div className={s.orderTitle}>
              <span>{t("orderNumber")}: </span>
              {orderNumber}
            </div>
            <div className={s.table}>
              <div>
                <div className={s.row}>
                  <div className={s.cell}>{t("orderDate")}</div>
                  <div className={s.cell}>{orderDate}</div>
                </div>
                <div className={s.row}>
                  <div className={s.cell}>{t("situation")}</div>
                  <div className={s.cell}>{situation}</div>
                </div>
                <div className={s.row}>
                  <div className={s.cell}>{t("paymentMethod")}</div>
                  <div className={s.cell}>{paymentMethod}</div>
                </div>
              </div>
              <div>
                <div className={s.row}>
                  <div className={s.cell}>{t("sendingDate")}</div>
                  <div className={s.cell}>{sendingDate}</div>
                </div>
                <div className={s.row}>
                  <div className={s.cell}>{t("shippingNumber")}</div>
                  <div className={s.cell}>{shippingNumber}</div>
                </div>
                <div className={s.row}>
                  <div className={s.cell}>{t("helpline")}</div>
                  <div className={s.cell}>{helpline}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.cards}>
            {influencerRecomendations.map(({ id, title }) => {
              return (
                <Card
                  key={id}
                  className={s.card}
                  imageSrc="/assets/img/picture_2.png"
                  title={title}
                  buttonTitle={t("common:goToStore")}
                  isButtonHidden
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderSuccess
