import React from "react"
import cn from "classnames"

import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./orderStatusButton.module.scss"

export interface OrderStatusButtonProps {
  icon: IconType
  appearance: "purple" | "white"
  title: string
  orderNumbers?: number
  lastDay: number
  delays: number
  onClick: () => void
}

const OrderStatusButton: React.FC<OrderStatusButtonProps> = (props) => {
  const {
    icon,
    title = "Some text",
    orderNumbers = 0,
    lastDay = 0,
    delays = 0,
    appearance = "white",
    onClick,
  } = props

  return (
    <div
      onClick={onClick}
      className={cn(s.main, {
        [s.purple]: appearance === "purple",
        [s.white]: appearance === "white",
      })}
    >
      <div className={s.wrapper}>
        <div className={s.icon_wrapper}>
          <Icon type={icon} className={s.icon} />
        </div>
        <div className={s.info_wrapper}>
          <h3>
            {" "}
            {title} : {orderNumbers}{" "}
          </h3>
          <div className={s.description}>
            <p>
              {" "}
              Last Day: <b> {lastDay} </b>
            </p>
            <p>
              {" "}
              Delays: <b> {delays} </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderStatusButton
