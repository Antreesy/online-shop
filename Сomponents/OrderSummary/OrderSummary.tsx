import { useState } from "react"
import { Button } from "UI"
import { Input } from "UI"
import { Accordion } from "UI"
import { CheckboxGroup } from "UI"
import s from "./OrderSummary.module.scss"

interface OrderSummaryProps {
  subtotal: Number
  shipping: Number
  discount: Number
  kdv: Number
}

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { subtotal, shipping, discount, kdv } = props
  const [inputValue, setInputValue] = useState<string>("")
  const sum =
    Number(subtotal) + Number(shipping) + Number(discount) + Number(kdv)
  const getData = [
    { name: "Subtotal", value: subtotal },
    { name: "Shipping cost", value: shipping },
    { name: "Discount", value: discount },
    { name: "KDV", value: kdv },
  ]

  return (
    <>
      <h3 className={s.title}>Order Summary</h3>
      <div className={s.coupon}>
        <Accordion header={"Use discount coupon"}>
          <div className={s.details}>
            <div className={s.input}>
              <Input
                label={null}
                setValue={setInputValue}
                value={inputValue}
                placeholder={"HZDASK2410AS"}
              />
            </div>
            <Button className={s.button}>Apply</Button>
          </div>
        </Accordion>
      </div>

      <div className={s.reciept}>
        <ul className={s.prices}>
          {getData.map((data) => (
             <li key={data.name} className={s.price}>
             <p className={s.name}>{data.name}</p>
             <p className={s.dots}>:</p>
             <p className={s.priceValue}>
               <>₺{data.value}</>
             </p>
           </li> 
          ))}
        </ul>

        <div className={s.submitField}>
          <div className={s.totalField}>
            <p className={s.total}>Total:</p>
            <p className={s.totalPrice}>₺{sum}</p>
          </div>

          <CheckboxGroup
            className={s.checkbox}
            rounded
            labels={
              "I have read and approved the Preliminary Information Form and the Distance Sales Agreement."
            }
          />
          <Button className={s.submitBtn}>Complete Order</Button>
        </div>
      </div>
    </>
  )
}

export default OrderSummary
