import cn from "classnames";

import s from "./price.module.scss"

interface PriceProps {
    price: number;
    currency?: string;
    currencyFirst?: boolean;
    type?: "def" | "old" | "sale";
    
}


const Price:React.FC<PriceProps> = (props) => {

    const {price, currency = "TL", currencyFirst=false, type="def"} = props

    const priceClass = cn(s.price, {
        [s.def]: type === "def",
        [s.old]: type === "old",
        [s.sale]: type === "sale"   
    });

    return (
        <div className={s.price}>
            {
                !currencyFirst 
                ?
                <span className={priceClass}>
                    {` ${price} ${currency}`}
                </span>
                :
                <span className={priceClass}>
                    {` ${currency} ${price}`}
                </span>
            }
        </div>
    )
}

export default Price