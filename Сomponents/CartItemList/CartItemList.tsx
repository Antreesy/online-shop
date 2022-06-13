import { cartlist } from "shared/constants/cart-list"
import { Button } from "UI"
import CartItem from "Сomponents/CartItem/CartItem"
import s from "./CartItemList.module.scss"

export const CartItemList: React.FC = () => {
  return (
    <>
      {cartlist.length ? (
        cartlist.map((item) => {
          return <CartItem {...item} />
        })
      ) : (
        <div className={s.noItemBox}>
          <Button
            icon
            iconLeft="basket"
            className={s.cartNoItemsBtn}
            variant="text"
          />
          <p className={s.title}>There are no items in your cart</p>
          <p className={s.subtitle}>Add items to your cart to buy</p>
        </div>
      )}
    </>
  )
}
