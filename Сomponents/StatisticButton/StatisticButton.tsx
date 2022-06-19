import React from "react"
import dayjs from "dayjs"
import cn from "classnames"

import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./statisticButton.module.scss"

export interface StatisticButtonProps {
  onClick: () => void
  appearance: "purple" | "white"
  icon: IconType
  lastUpdate?: Date | string
  rightIcon?: boolean
  title: string
  totalNumber: number
}

const StatisticButton: React.FC<StatisticButtonProps> = (props) => {
  const {
    onClick,
    appearance,
    lastUpdate,
    rightIcon = false,
    icon,
    title,
    totalNumber,
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
        <div className={s.text_wrapper}>
          <p className={s.title}>{title}</p>
          <p className={s.value}>{totalNumber}</p>
          <p className={s.update}>
            Last Updated: <span>{dayjs(lastUpdate).format("llll")}</span>
          </p>
        </div>
        {rightIcon && (
          <div className={s.right_icon_wrapper}>
            <Icon type={icon} className={s.icon} />
          </div>
        )}
      </div>
    </div>
  )
}

export default StatisticButton
