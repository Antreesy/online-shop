import { NextPage } from "next"

import { CartItemList, OrderSummary } from "Сomponents"

import { cartList } from "shared/constants/cart-list"

import s from "styles/pages/orderCart.module.scss"
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
                "orderCart"
            ])),
        },
    }
}

const Cart: NextPage = () => {
    const { t } = useTranslation("orderCart")
  return (
    <div className={s.cart}>
      <div className={s.cartItemlist}>
        <p>My cart - {cartList.length} items</p>
        <div className={s.cartItemsHeader}>
          <p className={s.names}>{t("orderCartProductName")}</p>
          <p className={s.price}>{t("orderPrice")}</p>
          <p className={s.piece}>{t("orderPiece")}</p>
          <p className={s.total}>{t("orderTotal")}</p>
        </div>
        <CartItemList list={cartList} />
      </div>
      <div className={s.orderSummary}>
        <OrderSummary discount={123} kdv={132} shipping={100} subtotal={150} buttonHref="/order-page" />
      </div>
    </div>
  )
}
export default Cart
