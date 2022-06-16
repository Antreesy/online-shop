import React from "react"
import cn from "classnames"
import s from "./InventoryButton.module.scss"

import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

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
      <div className={s.insideSmall}>
        <div className={s.squareSmall}>
          <Icon type={icon} className={s.squareIcon} />
        </div>
        <div className={s.totalNumber}>{number}</div>
        <div className={s.totalText}>{text}</div>
        <div className={s.rightImage}>
          <Icon type={icon} className={s.rightIcon} />
        </div>
      </div>
    </div>
  )
}

export default InventoryButton
