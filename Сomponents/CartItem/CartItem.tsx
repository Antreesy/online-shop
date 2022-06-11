import Image from "next/image"
import { Button, ItemCounter, Price } from "UI"
import img from 'public/assets/img/product-img.png'

import s from './CartItem.module.scss'
import { Counter } from "Сomponents/Counter"

const CartItem: React.FC = () => {
    return (
        <tr className={s.cartItem} >
            <td className={s.productItem}>
                <Button icon iconLeft="trash_can" variant="text" className={s.trashBtn} />
                <span className={s.imageWrapper}>
                    <Image src={img} className={s.productImage} />
                </span>
                <span className={s.productInfo}>
                    <p className={s.title}>Beymen</p>
                    <p className={s.subtitle}>Knitted dress with metallic thread</p>
                    <p className={s.description}>Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu</p>
                    <Price price={2000} oldPrice={1999} type='sale' className={s.mobilePrice} />
                </span>
            </td>
            <td className={s.price}>
                <Price price={2000} oldPrice={1999} type='sale' className={s.priceBlock} />
            </td>
            <td className={s.counter}>
                <ItemCounter />
            </td>
            <td className={s.amountPrice}>
                <h3>Order amount</h3>
                <Price price={2000} />
            </td>
        </tr>



    )
}

export default CartItem