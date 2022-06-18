import { NextPage } from "next"

import { CartItemList, OrderSummary } from "Сomponents"

import { cartList } from "shared/constants/cart-list"

import s from "styles/pages/cart.module.scss"

const Cart: NextPage = () => {
  return (
    <div className={s.cart}>
      <div className={s.cartItemlist}>
        <p>My cart - {cartList.length} items</p>
        <div className={s.cartItemsHeader}>
          <p className={s.names}>Name Of The Product</p>
          <p className={s.price}>Price</p>
          <p className={s.piece}>piece</p>
          <p className={s.total}>Total</p>
        </div>
        <CartItemList list={cartList} />
      </div>
      <div className={s.orderSummary}>
        <OrderSummary discount={123} kdv={132} shipping={100} subtotal={150} />
      </div>
    </div>
  )
}
export default Cart
