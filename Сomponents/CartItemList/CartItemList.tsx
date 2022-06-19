import { Button } from "UI"
import { CartItem, CartItemProps } from "./CartItem/CartItem"

import s from "./CartItemList.module.scss"

interface CartListProps {
  list: CartItemProps[]
}

export const CartItemList: React.FC<CartListProps> = ({ list }) => {
  return (
    <>
      {list.length ? (
        list.map((item,index) => {
          return <CartItem {...item} index={index}/>
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
