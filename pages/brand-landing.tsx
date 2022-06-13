import React from "react"
import { useTranslation } from "next-i18next"
import Head from "next/head"

import { OrderStatusButton, InventoryButton } from "Сomponents"
import { Icon } from "UI"

import s from "styles/pages/brand-landing.module.scss"

const BrandLanding: React.FC = () => {
  const { t } = useTranslation("brandLanding")

  const refunds = 67899
  const cancellation = 4567
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brands Statistic</title>
      </Head>

      <main className={s.main}>
        <div className={s.container}>
          <div className={s.infoText}>
            <h4>{t("Add Product")}</h4>
            <h4>{t("Brand Information")}</h4>
            <h4>{t("All Products")}</h4>
            <h4>{t("All Cancellations")}</h4>
            <h4>{t("On Sale")}</h4>
            <h4>{t("Brand Visual Operations")}</h4>
          </div>
          <div className={s.orderStatus}>
            <OrderStatusButton
              icon={"hanger"}
              appearance={"purple"}
              title={`${t("All Orders")}`}
              orderNumbers={3547}
              lastDay={20000}
              delays={200}
              onClick={() => console.log("hello")}
            />

            <OrderStatusButton
              icon={"getting_ready"}
              appearance={"white"}
              title={`${t("Getting Ready")}`}
              orderNumbers={1679}
              lastDay={20000}
              delays={200}
              onClick={() => console.log("hello")}
            />

            <OrderStatusButton
              icon={"delivery_ready"}
              appearance={"white"}
              title={`${t("Delivery Ready")}`}
              orderNumbers={2500}
              lastDay={20000}
              delays={200}
              onClick={() => console.log("hello")}
            />
          </div>
          <div className={s.titleBetween}>
            <h3>{t("Inventory")}</h3>
          </div>
          <div className={s.inventoryStatus}>
            <InventoryButton
              onClick={() => console.log("hello")}
              icon={"bell_outlined"}
              appearance={"purple"}
              text={`${t("Total Product")}`}
              number={1399}
            />
            <InventoryButton
              onClick={() => console.log("hello")}
              icon={"brand_display_name"}
              appearance={"white"}
              text={`${t("Products on Sale")}`}
              number={9876}
            />
            <InventoryButton
              onClick={() => console.log("hello")}
              icon={"discount"}
              appearance={"white"}
              text={`${t("Critical Stock Level")}`}
              number={2798}
            />
            <InventoryButton
              onClick={() => console.log("hello")}
              icon={"exclamation"}
              appearance={"white"}
              text={`${t("Out of Stock Products")}`}
              number={5609}
            />
            <InventoryButton
              onClick={() => console.log("hello")}
              icon={"out_of_stock"}
              appearance={"white"}
              text={`${t("Off-Sale Products")}`}
              number={76}
            />
          </div>
          <div className={s.titleBetween}>
            <h3>{t("Customer Demands")}</h3>
          </div>
          <div className={s.cancellation}>
            <div className={s.cancellationButton}>
              <div className={s.iconSquare}>
                <Icon type={"out_of_stock"} className={s.squareIcon} />
              </div>
              <div className={s.staticText}>
                {t("Cancellation Requests")}: <span>{cancellation}</span>
              </div>
            </div>
            <div className={s.cancellationButton}>
              <div className={s.iconSquare}>
                <Icon type={"critical_stock"} className={s.squareIcon} />
              </div>
              <div className={s.staticText}>
                {t("Refund Requests")}: <span>{refunds}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BrandLanding
