import React from "react"
import cn from "classnames"

import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./inventoryButton.module.scss"

export interface InventoryButtonProps {
  onClick: () => void
  appearance?: "purple" | "white"
  text?: string
  number?: number
  icon: IconType
}
const InventoryButton: React.FC<InventoryButtonProps> = (props) => {
  const {
    onClick,
    appearance,
    icon,
    text = "Total something",
    number = 0,
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
        <div className={s.total_num}>{number}</div>
        <div className={s.total_text}>
          <span>{text}</span>{" "}
          <span className={cn(s.total_mobile)}>{number}</span>{" "}
        </div>
        <div className={s.bg_icon_wrapper}>
          <Icon type={icon} className={s.bg_icon} />
        </div>
      </div>
    </div>
  )
}

export default InventoryButton
