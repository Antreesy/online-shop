import React from "react"

import s from "./BrandCancelOrder.module.scss"
import { Select } from "UI/Select"
import { Button } from "UI/Button"

interface BrandCancelOrderProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const BrandCancelOrder: React.FC<BrandCancelOrderProps> = ({
  onClick,
}) => {
  return (
    <>
      <div className={s.container}>
        <h3 className={s.title}>
          Do you approve your request to cancel the order? If you want to
          continue the transaction, please select your reason for cancellation.
        </h3>
        <Select
          placeholder="Reason"
          values={[
            { title: "Body Incompatibility", value: 1 },
            { title: "Incorrect Product Delivery", value: 2 },
            { title: "Delivery Date", value: 3 },
            { title: "Wrong Product Shipment", value: 4 },
          ]}
          onChange={() => {
            return
          }}
          className={s.block}
        />
        <div className={s.btn_container}>
          <Button variant="outlined" className={s.btn}>
            Cancel Order
          </Button>
          <Button className={s.btn_black} onClick={onClick}>
            Refuse
          </Button>
        </div>
      </div>
    </>
  )
}
