import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import { CartItemList, OrderSummary } from "Сomponents"
import { Button } from "UI"

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
          <CartItemList list={cartList} />
        ) : (
          <div className={s.empty_wrapper}>
            <Button
              icon
              iconLeft="basket"
              className={s.empty_button}
              variant="text"
            />
            <p className={s.title}>There are no items in your cart</p>
            <p className={s.subtitle}>Add items to your cart to buy</p>
          </div>
        )}
      </div>

      {cartList.length ? (
        <div className={s.orderSummary}>
          <OrderSummary
            discount={123}
            kdv={132}
            shipping={100}
            subtotal={150}
            buttonHref="/order-page"
          />
        </div>
      ) : null}
    </div>
  )
}
export default Cart
