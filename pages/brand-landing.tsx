import React from "react"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import SimpleBar from "simplebar-react"
import { OrderStatusButton, InventoryButton } from "Сomponents"
import { Icon } from "UI"

import s from "styles/pages/brand-landing.module.scss"
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "brandLanding"
      ])),
    },
  }
}
const BrandLanding: React.FC = () => {
  const { t } = useTranslation("brandLanding")

  const refunds = 67899
  const cancellation = 4567
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brands Statistic</title>
      </Head>

      <div className={s.container}>
        <nav className={s.navigation}>
          <SimpleBar className={s.scrollbar}>
            <ul>
              <li>{t("addProduct")}</li>
              <li>{t("brandInformation")}</li>
              <li>{t("allProducts")}</li>
              <li>{t("allCancellations")}</li>
              <li>{t("onSale")}</li>
              <li>{t("brandVisualOperations")}</li>
            </ul>
          </SimpleBar>
        </nav>

        <SimpleBar className={s.scrollbar}>
          <div className={s.order_wrapper}>
            <OrderStatusButton
              icon={"hanger"}
              appearance={"purple"}
              title={t("allOrders")}
              orderNumbers={3547}
              lastDay={20000}
              delays={200}
            />

            <OrderStatusButton
              icon={"getting_ready"}
              appearance={"white"}
              title={t("gettingReady")}
              orderNumbers={1679}
              lastDay={20000}
              delays={200}
            />

            <OrderStatusButton
              icon={"delivery_ready"}
              appearance={"white"}
              title={t("deliveryReady")}
              orderNumbers={2500}
              lastDay={20000}
              delays={200}
            />
          </div>
        </SimpleBar>

        <div className={s.caption}>
          <h3>{t("inventory")}</h3>
        </div>

        <SimpleBar className={s.scrollbar}>
          <div className={s.inventory_wrapper}>
            <InventoryButton
              icon={"bell_outlined"}
              appearance={"purple"}
              text={t("totalProduct")}
              number={1399}
            />
            <InventoryButton
              icon={"brand_display_name"}
              appearance={"white"}
              text={t("productsOnSale")}
              number={9876}
            />
            <InventoryButton
              icon={"discount"}
              appearance={"white"}
              text={t("criticalStockLevel")}
              number={2798}
            />
            <InventoryButton
              icon={"exclamation"}
              appearance={"white"}
              text={t("outOfStockProducts")}
              number={5609}
            />
            <InventoryButton
              icon={"out_of_stock"}
              appearance={"white"}
              text={t("offSaleProducts")}
              number={76}
            />
          </div>
        </SimpleBar>

        <div className={s.caption}>
          <h3>{t("customerDemands")}</h3>
        </div>

        <div className={s.demands_wrapper}>
          <div className={s.demands_button}>
            <div className={s.icon_wrapper}>
              <Icon type={"out_of_stock"} className={s.icon} />
            </div>
            <div className={s.text}>
              {t("cancellationRequests")}: <span>{cancellation}</span>
            </div>
          </div>
          <div className={s.demands_button}>
            <div className={s.icon_wrapper}>
              <Icon type={"critical_stock"} className={s.icon} />
            </div>
            <div className={s.text}>
              {t("refundRequests")}: <span>{refunds}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandLanding
