import React from "react"

import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./dashStatisticButton.module.scss"

export interface DashStatisticButtonProps {
  icon: IconType
  title: string
  value?: number
  lastUpdated: Date | string | number
  onClick?: () => void
}

const DashStatisticButton: React.FC<DashStatisticButtonProps> = (props) => {
  const { icon, title, value, lastUpdated, onClick } = props

  return (
    <div onClick={onClick} className={s.main}>
      <div className={s.icon_wrapper}>
        <Icon type={icon} className={s.icon} />
      </div>
      <div className={s.info_wrapper}>
        <h3 className={s.title}>{title}</h3>
        <h3 className={s.title_value}>{value}</h3>
        <p className={s.date}>{`Last Updated: ${lastUpdated}`}</p>
      </div>
      <div className={s.right_icon_wrapper}>
        <Icon type={icon} className={s.icon} />
      </div>
    </div>
  )
}

export default DashStatisticButton
