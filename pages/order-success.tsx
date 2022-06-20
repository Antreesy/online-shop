import type { NextPage } from "next"
import Head from "next/head"

import { orderSuccess } from "shared/constants/order-success"
import { Card, Icon } from "UI"
import { SectionHeader } from "Сomponents"

import s from "styles/pages/OrderSuccess.module.scss"
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";


export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "modal",
        "product",
        "orderCart",
        "orderSuccess"
      ])),
    },
  }
}

const OrderSuccess: NextPage = () => {
  const { t } = useTranslation("orderSuccess")
  const {
    title,
    textContent,
    order: {
      orderNumber,
      orderDate,
      situation,
      paymentMethod,
      sendingDate,
      shopingNumber,
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
            <h1 className={s.title}>{t("title")}</h1>
            <p className={s.description}>{t("textContent")}</p>
          </div>

          <SectionHeader
            className={s.section}
          />
          <div className={s.order}>
            <div className={s.orderTitle}>
              <span>{t("orderNumber")}: </span>
              {orderNumber}
            </div>
            <table className={s.table}>
              <div>
                <tr>
                  <td>{t("orderDate")}</td>
                  <td>{orderDate}</td>
                </tr>
                <tr>
                  <td>{t("situation")}</td>
                  <td>{situation}</td>
                </tr>
                <tr>
                  <td>{t("paymentMethod")}</td>
                  <td>{paymentMethod}</td>
                </tr>
              </div>
              <div>
                <tr>
                  <td>{t("sendingDate")}</td>
                  <td>{sendingDate}</td>
                </tr>
                <tr>
                  <td>{t("shoppingNumber")}</td>
                  <td>{shopingNumber}</td>
                </tr>
                <tr>
                  <td>{t("helpline")}</td>
                  <td>{helpline}</td>
                </tr>
              </div>
            </table>
          </div>

          <div className={s.cards}>
            {influencerRecomendations.map(({ id, title }) => {
              return (
                <Card
                  key={id}
                  className={s.card}
                  imageSrc="/assets/img/picture_2.png"
                  title={title}
                  buttonTitle="Go To Store"
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
