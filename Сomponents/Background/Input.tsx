import { SetStateAction, useState } from "react"

import { Button, Icon } from "UI"

import cn from "classnames"

import s from "./Background.module.scss"
interface InputProps {
  value?: string
  className?: string
  editable?: boolean
  boxClassname?: string
  reverse?: boolean
}

const Input: React.FC<InputProps> = (props) => {
  const { value, className, editable, boxClassname, reverse } = props
  const [currentValue, setCurrentValue] = useState(value)
  const [isEditing, setIsEditing] = useState(false)

  let icon = editable ? (
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
        <span>{icon}</span>
        <span>{currentValue}</span>
      </div>
    </div>
  )
}
export default Input
