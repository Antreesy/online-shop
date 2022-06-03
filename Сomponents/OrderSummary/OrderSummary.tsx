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
  const summ =
    Number(subtotal) + Number(shipping) + Number(discount) + Number(kdv)

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
                placeholder={"value"}
              />
            </div>
            <Button className={s.button}>Apply</Button>
          </div>
        </Accordion>
      </div>

      <div className={s.reciept}>
        <ul className={s.prices}>
          <li className={s.price}>
            <p className={s.name}>Subtotal</p>
            <p className={s.dots}>:</p>
            <p className={s.priceValue}>
              <>₺{subtotal}</>
            </p>
          </li>
          <li className={s.price}>
            <p className={s.name}>Shipping cost</p>
            <p className={s.dots}>:</p>
            <p className={s.priceValue}>
              <>₺{shipping}</>
            </p>
          </li>
          <li className={s.price}>
            <p className={s.name}>Discount</p>
            <p className={s.dots}>:</p>
            <p className={s.priceValue}>
              <>₺{discount}</>
            </p>
          </li>
          <li className={s.price}>
            <p className={s.name}>KDV</p>
            <p className={s.dots}>:</p>
            <p className={s.priceValue}>
              <>₺{kdv}</>
            </p>
          </li>
        </ul>

        <div className={s.submitField}>
          <div className={s.totalField}>
            <p className={s.total}>Total:</p>
            <p className={s.totalPrice}>₺{summ}</p>
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
