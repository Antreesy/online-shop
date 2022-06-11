import { NextPage } from "next";
import { CartItemList } from "Сomponents/CartItemList/CartItemList";
import s from 'styles/pages/cart.module.scss'
import { OrderSummary } from "Сomponents";

const Cart: NextPage = () => {
    return (
        <div className={s.cart}>
            <table className={s.cartItemlist}>
                <p>My cart - 3 items</p>
                <tr className={s.cartItemsHeader}>
                    <td className={s.names}>Name Of The Product</td>
                    <td className={s.price}>Price</td>
                    <td className={s.piece}>piece</td>
                    <td className={s.total}>Total</td>
                </tr>
                <CartItemList />
            </table>
            <div className={s.orderSummary}>
                <OrderSummary discount={123} kdv={132} shipping={100} subtotal={150} />
            </div>
        </div>
    )
}
export default Cart;