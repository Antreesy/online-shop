import {
  InputLabel,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"
import cn from "classnames"

import s from "./select.module.scss"
import { Icon } from "UI"

interface IProps {
  className?: string
  selectClassName?: string
  itemClassName?: string
  error?: boolean
  disabled?: boolean
  label?: string
  placeholder?: string
  items: string[]
  initValue?: string
  onChange(selected: string): void
}

const CustomSelect = (props: IProps) => {
  const {
    className,
    selectClassName,
    itemClassName,
    items,
    placeholder = "Choose option",
    label,
    onChange,
    initValue,
  } = props

  const [value, setValue] = useState<string>(initValue ?? placeholder)

  const onChangeValue = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value)
    setValue(event.target.value)
  }

  const selectIcon = () => <Icon type="arrow_down" className={s.selectIcon} />

  const labelClass = cn(s.select_label, className)
  const selectClass = cn(s.select, selectClassName)
  const itemClass = cn(s.item, itemClassName)

  return (
    <>
      <InputLabel className={labelClass} id="select-label">
        {label}
      </InputLabel>

      <Select
        className={selectClass}
        IconComponent={selectIcon}
        variant="outlined"
        labelId="select-label"
        value={value}
        onChange={onChangeValue}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "0 0 5px 5px",
              borderTop: "2px solid black",
              maxHeight: "200px",
              scrollbarColor: "#8100ef",
            },
          },
        }}
      >
        <MenuItem
          sx={{ display: "none" }}
          key={placeholder}
          value={placeholder}
        >
          {placeholder}
        </MenuItem>
        {items.map((item) => {
          return (
            <MenuItem className={itemClass} key={item} value={item}>
              {item}
            </MenuItem>
          )
        })}
      </Select>
    </>
  )
}

export default CustomSelect
