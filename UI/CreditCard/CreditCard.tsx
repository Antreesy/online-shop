import React from "react"
import cn from "classnames"

import { Card, CardContent, IconButton } from "@mui/material"
import { Icon } from "UI"

import { creditcardConsts } from "shared/constants/creditcard"

import s from "./creditCard.module.scss"

export interface CreditCardProps {
  size?: number
  isColored?: boolean
  cardNumber: string
  cardHolder: string
  expireDate: string
  isHidden?: boolean
  id?: number
  onDelete?: (id: number) => void
}

const CreditCard: React.FC<CreditCardProps> = ({
  size = creditcardConsts.MIN_HEIGHT,
  isColored = false,
  cardNumber,
  cardHolder,
  expireDate,
  isHidden = false,
  id,
  onDelete,
}) => {
  const sizeNumber =
    size < creditcardConsts.MIN_HEIGHT ? creditcardConsts.MIN_HEIGHT : size
  const cardRightSideClasses = cn(s.right_group, { [s.with_button]: onDelete })

  const getRatio = (baseIndex: number): number => {
    return (size / baseIndex) * creditcardConsts.ASPECT_RATIO
  }
  return (
    <Card
      className={isColored ? s.card_colored : s.card_default}
      style={{
        width: sizeNumber * creditcardConsts.ASPECT_RATIO,
        height: sizeNumber,
      }}
    >
      <CardContent className={s.content}>
        <div
          className={s.left_group}
          style={{
            fontSize: `${getRatio(creditcardConsts.BASE_CARD_NUMBER_INDEX)}px`,
          }}
        >
          <div>{isHidden ? creditcardConsts.HIDDEN_MASK : cardNumber}</div>
          <div>{cardHolder}</div>
        </div>

        <div className={cardRightSideClasses}>
          {onDelete && id && (
            <IconButton
              className={s.delete_btn}
              style={{
                width: getRatio(creditcardConsts.BASE_DELETE_BTN_INDEX),
                height: getRatio(creditcardConsts.BASE_DELETE_BTN_INDEX),
              }}
              onClick={() => onDelete(id)}
            >
              <Icon type="trash_can" />
            </IconButton>
          )}
          <div>
            <Card
              style={{
                width:
                  (sizeNumber * creditcardConsts.ASPECT_RATIO) /
                  creditcardConsts.WIDTH_DIVISOR,
                height: sizeNumber / creditcardConsts.HEIGHT_DIVISOR,
                marginRight: creditcardConsts.CARD_MARGIN_RATIO,
              }}
            ></Card>
            <div
              className={s.expire_date}
              style={{
                fontSize: `${getRatio(
                  creditcardConsts.BASE_EXPIRENUMBER_INDEX,
                )}px`,
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
