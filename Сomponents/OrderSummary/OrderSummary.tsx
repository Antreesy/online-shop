import { useState } from "react"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import { Accordion, Button, CheckboxGroup, Input } from "UI"

import s from "./orderSummary.module.scss"

interface OrderSummaryProps {
  subtotal: number
  shipping: number
  discount: number
  kdv: number
  buttonHref?: string
}

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { subtotal, shipping, discount, kdv, buttonHref = "" } = props
  const [inputValue, setInputValue] = useState<string>("")
  const { t } = useTranslation(["order", "common"])

  const sum = subtotal + shipping + discount + kdv
  const dataFields = [
    { name: t("subtotal"), value: subtotal },
    { name: t("shippingCost"), value: shipping },
    { name: t("discount"), value: discount },
    { name: t("kdv"), value: kdv },
  ]

  const router = useRouter()
  const handleClick = () => {
    router.push(buttonHref)
  }

  return (
    <div className={s.order_wrapper}>
      <h3 className={s.title}>{t("orderSummary")}</h3>
      <div className={s.coupon}>
        <Accordion
          header={t("useDiscountCoupon")}
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
            <Button className={s.button}>{t("common:apply")}</Button>
          </div>
        </Accordion>
      </div>

      <div className={s.reciept}>
        <ul className={s.prices}>
          {dataFields.map((data) => (
            <li key={data.name} className={s.price}>
              <p className={s.name}>{data.name}</p>
              <p className={s.dots}>:</p>
              <p className={s.price_value}>
                <>{data.value}</>
              </p>
            </li>
          ))}
        </ul>

        <div className={s.submit_field}>
          <div className={s.total_wrapper}>
            <p className={s.caption}>{t("total")}</p>
            <p className={s.price}>{sum}</p>
          </div>

          <CheckboxGroup
            className={s.checkbox}
            rounded
            labels={t("iHaveRead")}
          />
          <Button className={s.submit_button} onClick={handleClick}>
            {t("completeOrder")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
