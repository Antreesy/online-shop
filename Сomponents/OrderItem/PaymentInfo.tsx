import s from "./OrderItem.module.scss"

interface PaymentInfoProps {
    type?: string,
    cardNumber: number,
    orderAmount: number,
    shipping: number,
    total: number
}

const PaymentInfo: React.FC<PaymentInfoProps> = (props) => {

    const { type, cardNumber, orderAmount, shipping, total } = props
    return (
        <>
            <p>
                <span>Payment method :</span>
                <span>{type} {cardNumber}</span>
            </p>
            <p>
                <span>Order Amount :</span>
                <span>{orderAmount}</span>
            </p>
            <p>
                <span>Shipping cost  :</span>
                <span>{shipping}</span>
            </p>
            <p>
                <span>Total amount :</span>
                <span>{total}</span>
            </p>
            <p className={s.amountPaid}>
                <span>Amount Paid :</span>
                <span>{total}</span>
            </p>
        </>
    )
}
export default PaymentInfo