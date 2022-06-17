import { useState } from "react"
import cn from "classnames"

import { Button } from "UI"

import s from "./Background.module.scss"

interface InputProps {
  value?: string
  className?: string
  isEditable?: boolean
  boxClassname?: string
  reverse?: boolean
  gradientBg?: "none" | "black"
}

const BgInput: React.FC<InputProps> = (props) => {
  const { value, className, isEditable, boxClassname, reverse, gradientBg } =
    props
  const [currentValue, setCurrentValue] = useState(value)
  const [isEditing, setIsEditing] = useState(false)

  const inputIcon = isEditable ? (
    <Button
      className={s.editButton}
      iconLeft="edit"
      onClick={() => {
        setIsEditing(true)
      }}
    />
  ) : null

  const colorButtonClass = cn(
    s.inputEditer,
    gradientBg === "none" ? s.noneGradientBg : s.blackGradientBg,
  )

  return isEditing ? (
    <div className={cn(s.area, boxClassname)}>
      <input
        type="text"
        className={colorButtonClass}
        value={currentValue}
        onChange={(e) => {
          setCurrentValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setIsEditing(false)
        }}
        className={s.editBtn}
      >
        edit
      </button>
    </div>
  ) : (
    <div className={cn(s.area, boxClassname)}>
      <div className={cn(className, { [s.reverse]: reverse })}>
        <span>{inputIcon}</span>
        <span>{currentValue}</span>
      </div>
    </div>
  )
}
export default BgInput
