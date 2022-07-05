import { useState, useEffect } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"

import Head from "next/head"
import Image from "next/image"
import { BackButton } from "Сomponents"
import { Button, Icon, Price } from "UI"

import cardImage from "public/assets/img/order_card_img.png"
import {
  customerInfo,
  orderInfo,
  invoiceInfo,
} from "shared/constants/orderinfoitems"

import s from "styles/pages/order-info.module.scss"

export interface LabelInfo {
  label: string
  content: string
}

interface OrderInfoProps {
  customer: LabelInfo
  order: LabelInfo
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "orderInfo",
      ])),
    },
  }
}

const OrderInfoPage: NextPage<OrderInfoProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeRoute("Product List"))
  }, [])

  const [IsActive, setIsActive] = useState<boolean>(false)
  const { t } = useTranslation(["orderInfo", "common"])

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Order Detail</title>
      </Head>

      <div className={s.container}>
        <div className={s.button_wrapper}>
          <BackButton />
        </div>

        <div className={s.content}>
          <div className={s.content_info}>
            <h3 className={s.heading}>{t("customerInformation")}</h3>
            <div className={s.labels}>
              {customerInfo.length
                ? customerInfo.map((item, index) => (
                    <div key={index} className={s.label_wrapper}>
                      <p>{t(item.label)}</p>
                      <p>:</p>
                      <p>{item.content}</p>
                    </div>
                  ))
                : null}
            </div>

            <h3 className={s.heading}>{t("orderInformation")}</h3>
            <div className={s.labels}>
              {orderInfo.length
                ? orderInfo.map((item, index) => (
                    <div key={index} className={s.label_wrapper}>
                      <p>{t(item.label)}</p>
                      <p>:</p>
                      <p>{item.content}</p>
                    </div>
                  ))
                : null}
            </div>

            <h3 className={s.heading}>{t("invoiceInformation")}</h3>
            <div className={s.labels}>
              {invoiceInfo.length
                ? invoiceInfo.map((item, index) => (
                    <div key={index} className={s.label_wrapper}>
                      <p>{t(item.label)}</p>
                      <p>:</p>
                      <p>{item.content}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className={s.divider} />

          <div className={s.card_wrapper}>
            <div className={s.card}>
              <div className={s.image}>
                <Image src={cardImage} layout="fill" />
              </div>

              <div className={s.card_content}>
                <div className={s.title_wrapper}>
                  <p className={s.title}>{"Prada"}</p>
                  <div
                    className={s.button}
                    onClick={() => setIsActive(!IsActive)}
                  >
                    <Icon className={s.icon} type="close_cross" wrapped />
                    {t("common:cancel")}
                  </div>
                </div>
                <p className={s.card_description}>
                  {"Green zero sleeve women’s dress"}
                </p>

                <div className={s.price_wrapper}>
                  <div className={s.group}>
                    <div className={s.row}>
                      <p>{t("number")}</p>
                      <p>:</p>
                      <p>1</p>
                    </div>

                    <div className={s.row}>
                      <p>{t("price")}</p>
                      <p>:</p>
                      <Price oldPrice={2030} price={1930} type="order" />
                    </div>
                  </div>

                  <div className={s.group}>
                    <div className={s.row}>
                      <p>{t("VAT")} %18</p>
                      <p>:</p>
                      <p>1</p>
                    </div>

                    <div className={s.row}>
                      <p className={s.total}>{t("total")}</p>
                      <p className={s.total}>:</p>
                      <Price oldPrice={2030} price={1930} type="cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {IsActive && (
              <div className={s.approve}>
                <p className={s.approve_text}>{t("areYouConfirming")}</p>

                <div className={s.button_wrapper}>
                  <Button className={s.button_purple}>
                    {t("common:approve")}
                  </Button>
                  <Button
                    className={s.button_black}
                    onClick={() => setIsActive(!IsActive)}
                  >
                    {t("common:reject")}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default OrderInfoPage
