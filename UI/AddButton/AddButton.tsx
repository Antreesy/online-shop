import React from "react"
import cn from "classnames"

import { Button } from "UI"
import { Icon } from "UI"

import s from "./addbutton.module.scss"

interface AddButtonProps {
  title?: string
  titleColor?: "primary" | "secondary"
  bgColor?: "primary" | "secondary"
  largeSize?: boolean
  onClick?: () => void
}

const AddButton: React.FC<AddButtonProps> = ({
  titleColor = "primary",
  bgColor = "primary",
  title,
  largeSize,
  onClick,
}) => {
  const titleColorClass =
    titleColor === "primary" ? s.primaryColor : s.secondaryColor
  const bgColorClass = bgColor === "primary" ? s.primaryBG : s.secondaryBG
  const btnSizeStyles = largeSize ? s.largeSize : s.defaultSize
  const iconSize = largeSize ? s.iconLarge : s.iconDefault

  return (
    <Button
      onClick={onClick}
      className={cn(s.size, titleColorClass, bgColorClass, btnSizeStyles)}
    >
      <div className={cn(s.iconContainer, iconSize)}>
        <Icon type="plus" />
      </div>
      {title && <div className={s.title}>{title}</div>}
    </Button>
  )
}

export default AddButton

// const AddButton: React.FC<AddButtonProps> = ({
//   titleColor = "primary",
//   bgColor = "primary",
//   title,
//   largeSize,
//   onClick,
// }) => {
//   const addButtonClass = cn(
//     s.addButton,
//     titleColor === "primary" ? s.primaryColor : s.secondaryColor,
//     bgColor === "primary" ? s.primaryBG : s.secondaryBG,
//     largeSize ? s.largeSize : s.defaultSize,
//   )

//   const iconClass = cn(s.iconContainer, largeSize ? s.iconLarge : s.iconDefault)

//   return (
//     <Button
//       onClick={onClick}
//       className={addButtonClass}
//       // mode="defaultVariantOff"
//     >
//       <div className={iconClass}>
//         <Icon type="plus" />
//       </div>
//       {title && <div className={s.title}>{title}</div>}
//     </Button>
//   )
// }

// export default AddButton