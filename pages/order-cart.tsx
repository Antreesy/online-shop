import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import { CartItemList, OrderSummary } from "Сomponents"

import { cartList } from "shared/constants/cart-list"

import s from "styles/pages/order-cart.module.scss"

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

const Cart: NextPage = () => {
  const { t } = useTranslation("order")
  return (
    <div className={s.container}>
      <div className={s.cartItemlist}>
        <p>{t("myCart", { number: cartList.length })}</p>
        {cartList.length ? (
          <>
            <div className={s.cartItemsHeader}>
              <p className={s.names}>{t("nameOfTheProduct")}</p>
              <p className={s.price}>{t("price")}</p>
              <p className={s.piece}>{t("piece")}</p>
              <p className={s.total}>{t("total")}</p>
            </div>
          </>
        ) : (
          ""
        )}

        <CartItemList list={cartList} />
      </div>
      {cartList.length ? (
        <>
          <div className={s.orderSummary}>
            <OrderSummary
              discount={123}
              kdv={132}
              shipping={100}
              subtotal={150}
              buttonHref="/order-page"
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  )
}
export default Cart
