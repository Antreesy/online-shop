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
}

const BgInput: React.FC<InputProps> = (props) => {
  const { value, className, isEditable, boxClassname, reverse } = props
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
  return isEditing ? (
    <div className={cn(s.area, boxClassname)}>
      <input
        type="text"
        className={cn(className, s.inputEditer)}
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
