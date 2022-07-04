import React from "react"
import cn from "classnames"

import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./orderStatusButton.module.scss"

export interface OrderStatusButtonProps {
  icon: IconType
  title: string
  orderNumbers?: number
  lastDay: number
  delays: number
  onClick?: () => void
}

const OrderStatusButton: React.FC<OrderStatusButtonProps> = (props) => {
  const {
    icon,
    title = "Some text",
    orderNumbers = 0,
    lastDay = 0,
    delays = 0,
    onClick,
  } = props

  return (
    <div
      onClick={onClick}
      className={s.main}
    >
      <div className={s.wrapper}>
        <div className={cn(s.icon_wrapper, s.desktop)}>
          <Icon type={icon} className={s.icon} />
        </div>
        <div className={s.info_wrapper}>
          <div className={s.title_row}>
            <div className={cn(s.icon_wrapper, s.mobile)}>
              <Icon type={icon} className={s.icon} />
            </div>
            <h3>
              {title} : {orderNumbers}
            </h3>
          </div>
          <div className={s.description_row}>
            <Icon type="exclamation" className={s.icon} />
            <p>
              Last Day: <b> {lastDay} </b>
            </p>
            <Icon type="exclamation" className={s.icon} />
            <p>
              Delays: <b> {delays} </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderStatusButton
