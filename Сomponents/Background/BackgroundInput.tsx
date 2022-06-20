import { useState } from "react"
import cn from "classnames"

import { Button } from "UI"

import s from "./background.module.scss"

interface InputProps {
  value?: string
  className?: string
  isEditable?: boolean
  boxClassName?: string
  reverse?: boolean
  gradientBg?: "none" | "black"
}

const BackgroundInput: React.FC<InputProps> = (props) => {
  const { value, className, isEditable, boxClassName, reverse, gradientBg } =
    props
  const [currentValue, setCurrentValue] = useState(value)
  const [isEditing, setIsEditing] = useState(false)

  const inputIcon = isEditable ? (
    <Button
      className={s.edit_button}
      iconLeft="edit"
      onClick={() => {
        setIsEditing(true)
      }}
    />
  ) : null

  const colorButtonClass = cn(
    s.input_editor,
    gradientBg === "none" ? s.no_gradient : s.black_gradient,
  )

  return isEditing ? (
    <div className={cn(s.area, boxClassName)}>
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
        className={s.cancel_button}
      >
        edit
      </button>
    </div>
  ) : (
    <div className={cn(s.area, boxClassName)}>
      <div className={cn(className, { [s.reverse]: reverse })}>
        <span>{inputIcon}</span>
        <span>{currentValue}</span>
      </div>
    </div>
  )
}
export default BackgroundInput
