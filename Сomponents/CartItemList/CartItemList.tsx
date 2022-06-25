import { useTranslation } from "next-i18next"

import { CartItem, CartItemProps } from "./CartItem/CartItem"

import s from "./cartItemList.module.scss"

interface CartListProps {
  list: CartItemProps[]
}

export const CartItemList: React.FC<CartListProps> = ({ list }) => {
  const { t } = useTranslation("order")

  return (
    <>
      {list.length ? (
        <>
          <div className={s.cart_header}>
            <p className={s.names}>{t("nameOfTheProduct")}</p>
            <p className={s.price}>{t("price")}</p>
            <p className={s.piece}>{t("piece")}</p>
            <p className={s.total}>{t("total")}</p>
          </div>
          {list.map((item, index) => (
            <CartItem {...item} key={index} />
          ))}
        </>
      ) : null}
    </>
  )
}
