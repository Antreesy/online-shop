import { useEffect } from "react"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Head from "next/head"
import Link from "next/link";
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
        "brandLanding",
      ])),
    },
  }
}
const BrandLanding: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeRoute("Brand"))
  }, [])

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
              <li><Link href={"/account/add-product"}>{t("addProduct")}</Link></li>
              <li><Link href={"/brand-information"}>{t("brandInformation")}</Link></li>
              <li><Link href={"/brand-products"}>{t("allProducts")}</Link></li>
              <li><Link href={"/brand-cancellation"}>{t("allCancellations")}</Link></li>
              <li><Link href={"/brand-products"}>{t("onSale")}</Link></li>
              <li><Link href={"/visual-operations"}>{t("brandVisualOperations")}</Link></li>
            </ul>
          </SimpleBar>
        </nav>

        <SimpleBar className={s.scrollbar}>
          <div className={s.order_wrapper}>
            <OrderStatusButton
              icon={"hanger"}
              title={t("allOrders")}
              orderNumbers={3547}
              lastDay={20000}
              delays={200}
            />

            <OrderStatusButton
              icon={"getting_ready"}
              title={t("gettingReady")}
              orderNumbers={1679}
              lastDay={20000}
              delays={200}
            />

            <OrderStatusButton
              icon={"delivery_ready"}
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
              text={t("totalProduct")}
              number={1399}
            />
            <InventoryButton
              icon={"brand_display_name"}
              text={t("productsOnSale")}
              number={9876}
            />
            <InventoryButton
              icon={"discount"}
              text={t("criticalStockLevel")}
              number={2798}
            />
            <InventoryButton
              icon={"exclamation"}
              text={t("outOfStockProducts")}
              number={5609}
            />
            <InventoryButton
              icon={"out_of_stock"}
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
