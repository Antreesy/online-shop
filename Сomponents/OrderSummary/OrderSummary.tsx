import { useState } from "react"

import { Accordion, Button, CheckboxGroup, Input } from "UI"

import s from "./orderSummary.module.scss"

interface OrderSummaryProps {
  subtotal: number
  shipping: number
  discount: number
  kdv: number
}

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { subtotal, shipping, discount, kdv } = props
  const [inputValue, setInputValue] = useState<string>("")
  const sum = subtotal + shipping + discount + kdv
  const getData = [
    { name: "Subtotal", value: subtotal },
    { name: "Shipping cost", value: shipping },
    { name: "Discount", value: discount },
    { name: "KDV", value: kdv },
  ]

  return (
    <div className={s.order_wrapper}>
      <h3 className={s.title}>Order Summary</h3>
      <div className={s.coupon}>
        <Accordion
          header={"Use discount coupon"}
          headerClassName={s.accordion_header}
          headerActiveClassName={s.accordion_header_active}
          arrowColor="#000"
        >
          <div className={s.details}>
            <div>
              <Input
                label={null}
                setValue={setInputValue}
                value={inputValue}
                placeholder={"HZDASK2410AS"}
                className={s.input}
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
              <p className={s.price_value}>
                <>₺{data.value}</>
              </p>
            </li>
          ))}
        </ul>

        <div className={s.submit_field}>
          <div className={s.total_wrapper}>
            <p className={s.caption}>Total:</p>
            <p className={s.price}>₺{sum}</p>
          </div>

          <CheckboxGroup
            className={s.checkbox}
            rounded
            labels={
              "I have read and approved the Preliminary Information Form and the Distance Sales Agreement."
            }
          />
          <Button className={s.submit_button}>Complete Order</Button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
