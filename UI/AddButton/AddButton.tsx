import React from "react"
import cn from "classnames"
import { useTranslation } from "next-i18next"

import { Button } from "UI"
import { Icon } from "UI"

import s from "./addButton.module.scss"

interface AddButtonProps {
  title?: string
  color?: "primary" | "secondary"
  bgColor?: "grey" | "white"
  large?: boolean
  onClick?: () => void
  className?: string
}

const AddButton: React.FC<AddButtonProps> = ({
  title,
  color = "primary",
  bgColor = "grey",
  large,
  onClick,
  className,
}) => {
  const { t } = useTranslation("orderAddress")
  const addButtonClass = cn(
    s.add_button,
    {
      [s.color_primary]: color === "primary",
      [s.back_color_grey]: bgColor === "grey",
      [s.large]: large,
    },
    className,
  )

  const iconClass = cn(s.icon_wrapper, { [s.large]: large })

  return (
    <Button
      onClick={onClick}
      className={addButtonClass}
      disableElevation={large}
    >
      <div className={iconClass}>
        <Icon type="plus" />
      </div>
      {title && <div className={s.title}>{t("buttonTitle")}</div>}
    </Button>
  )
}

export default AddButton
