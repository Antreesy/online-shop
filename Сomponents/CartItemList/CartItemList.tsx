import { Button } from "UI"
import { CartItem, CartItemProps } from "./CartItem/CartItem"

import s from "./cartItemList.module.scss"

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
    </>
  )
}
