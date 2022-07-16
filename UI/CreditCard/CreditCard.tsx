import React from "react"
import cn from "classnames"

import { IconButton } from "@mui/material"
import { Icon } from "UI"

import { creditcardConsts } from "shared/constants/creditcard"

import s from "./creditCard.module.scss"

export interface CreditCardProps {
  id: number
  cardNumber: string
  cardHolder: string
  expireDate: string
  isHidden?: boolean
  isActive?: boolean
  large?: boolean
  onClick?: () => void
  onDelete?: (id: number) => void
  className?: string
}

const CreditCard: React.FC<CreditCardProps> = ({
  id,
  cardNumber,
  cardHolder,
  expireDate,
  isHidden = false,
  isActive = false,
  large = false,
  onClick,
  onDelete,
  className,
}) => {
  return (
    <div
      className={cn(
        s.card,
        { [s.active]: isActive, [s.large]: large },
        className,
      )}
      onClick={onClick}
    >
      <div className={s.left_group}>
        <span className={s.card_number}>
          {isHidden ? creditcardConsts.HIDDEN_MASK : cardNumber}
        </span>
        <span className={s.card_holder}>{cardHolder}</span>
      </div>

      <div className={s.right_group}>
        <div className={s.secure_code} />
        <span className={s.expire_date}>{expireDate}</span>
      </div>

      {onDelete && (
        <IconButton className={s.delete_btn} onClick={() => onDelete(id)}>
          <Icon type="trash_can" color="#fff" />
        </IconButton>
      )}
    </div>
  )
}

export default CreditCard
