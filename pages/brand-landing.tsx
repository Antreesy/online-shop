import React from "react"
import { useTranslation } from "next-i18next"
import Head from "next/head"

import SimpleBar from "simplebar-react"
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

      <div className={s.container}>
        <nav className={s.navigation}>
          <SimpleBar className={s.scrollbar}>
            <ul>
              <li>{t("Add Product")}</li>
              <li>{t("Brand Information")}</li>
              <li>{t("All Products")}</li>
              <li>{t("All Cancellations")}</li>
              <li>{t("On Sale")}</li>
              <li>{t("Brand Visual Operations")}</li>
            </ul>
          </SimpleBar>
        </nav>

        <SimpleBar className={s.scrollbar}>
          <div className={s.order_wrapper}>
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
        </SimpleBar>

        <div className={s.caption}>
          <h3>{t("Inventory")}</h3>
        </div>

        <SimpleBar className={s.scrollbar}>
          <div className={s.inventory_wrapper}>
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
        </SimpleBar>

        <div className={s.caption}>
          <h3>{t("Customer Demands")}</h3>
        </div>

        <div className={s.demands_wrapper}>
          <div className={s.demands_button}>
            <div className={s.icon_wrapper}>
              <Icon type={"out_of_stock"} className={s.icon} />
            </div>
            <div className={s.text}>
              {t("Cancellation Requests")}: <span>{cancellation}</span>
            </div>
          </div>
          <div className={s.demands_button}>
            <div className={s.icon_wrapper}>
              <Icon type={"critical_stock"} className={s.icon} />
            </div>
            <div className={s.text}>
              {t("Refund Requests")}: <span>{refunds}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandLanding
