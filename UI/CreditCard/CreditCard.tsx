import React from "react"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import IconButton from "@mui/material/IconButton"
import cn from "classnames"

import { Icon } from "UI/Icon"

import s from "./creditcard.module.scss"

interface CreditCardProps {
  size?: number
  colored?: boolean
  cardNumber: string
  cardHolder: string
  expireDate: string
  onDelete?: () => void
}

const aspectRatio = 1.85
const minHeight = 200
const baseCardNumberIndex = 16
const baseExpireNumberIndex = 22
const baseDeleteBtnIndex = 10

const CreditCard: React.FC<CreditCardProps> = ({
  size = minHeight,
  colored = false,
  cardNumber,
  cardHolder,
  expireDate,
  onDelete,
}) => {
  const sizeNumber = size < minHeight ? minHeight : size
  const cardClasses = colored ? s.cardColored : s.cardDefault
  const cardRightSideClasses = onDelete
    ? cn(s.withButton, s.cardLeftSide)
    : cn(s.withoutButton, s.cardLeftSide)

  return (
    <Card
      className={cardClasses}
      sx={{ width: sizeNumber * aspectRatio, height: sizeNumber }}
    >
      <CardContent className={s.cardContent}>
        <div
          className={s.cardLeftSideClasses}
          style={{
            fontSize: `${(size / baseCardNumberIndex) * aspectRatio}px`,
          }}
        >
          <div>{cardNumber}</div>
          <div>{cardHolder}</div>
        </div>
        <div className={cardRightSideClasses}>
          {onDelete && (
            <IconButton
              className={s.deleteBtn}
              sx={{
                width: (size / baseDeleteBtnIndex) * aspectRatio,
                height: (size / baseDeleteBtnIndex) * aspectRatio,
              }}
              onClick={onDelete}
            >
              <Icon type="trash_can" />
            </IconButton>
          )}
          <div>
            <Card
              sx={{
                width: (sizeNumber * aspectRatio) / 6,
                height: sizeNumber / 5,
                marginRight: 1.5,
              }}
            ></Card>
            <div
              className={s.expireDate}
              style={{
                fontSize: `${(size / baseExpireNumberIndex) * aspectRatio}px`,
              }}
            >
              {expireDate}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CreditCard
