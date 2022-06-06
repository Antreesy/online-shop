import { useState } from "react"
import SimpleBar from "simplebar-react"
import cn from "classnames"
import "simplebar-react/dist/simplebar.min.css"

import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { Icon } from "UI"

import s from "./select.module.scss"

export type SelectItem = {
  title: string
  value: string | number
}

interface SelectProps {
  className?: string
  selectClassName?: string
  itemClassName?: string
  iconClassName?: string
  isError?: boolean
  isDisabled?: boolean
  label?: string
  placeholder?: string
  values: SelectItem[]
  initValue?: string
  onChange?: (selected: string | number) => void
}

const CustomSelect: React.FC<SelectProps> = (props) => {
  const {
    className,
    selectClassName,
    itemClassName,
    iconClassName,
    values,
    placeholder = "Choose option",
    label,
    onChange,
    initValue,
    isError,
    isDisabled,
  } = props

  const [value, setValue] = useState<string | number>(initValue ?? placeholder)

  const handleSelect = (value: string | number) => {
    onChange?.(value)
    setValue(value)
  }


  const labelClass = cn(s.select_label, className)
  const selectClass = cn(s.select, selectClassName)
  const itemClass = cn(s.item, itemClassName)
  const iconClass = cn(s.selectIcon, iconClassName)

  const selectIcon = () => <Icon type="arrow_down" className={iconClass} />

  return (
    <>
      {label && (
        <InputLabel className={labelClass} id="select-label">
          {label}
        </InputLabel>
      )}

      <Select
        className={selectClass}
        IconComponent={selectIcon}
        disabled={isDisabled}
        variant="outlined"
        labelId="select-label"
        value={value}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "0 0 5px 5px",
              borderTop: "2px solid black",
              maxHeight: "200px",
              overflow: "hidden",
            },
          },
        }}
        classes={{
          select: s.select,
        }}
      >
        {/* Hidden values */}
        <MenuItem
          sx={{ display: "none" }}
          key={placeholder}
          value={placeholder}
        >
          {placeholder}
        </MenuItem>
        {values.map((item) => (
          <MenuItem
            sx={{ display: "none" }}
            key={item.title}
            value={item.value}
          >
            {item.title}
          </MenuItem>
        ))}

        {/* Visible values */}
        <SimpleBar
          style={{ maxHeight: 180 }}
          className={s.scrollbar}
          autoHide={false}
        >
          {values.map((item) => {
            return (
              <MenuItem
                className={itemClass}
                key={item.title}
                value={item.value}
                onClick={() => {
                  handleSelect(item.value)
                }}
              >
                {item.title}
              </MenuItem>
            )
          })}
        </SimpleBar>
        {!values.length && (
          <MenuItem sx={{ pointerEvents: "none" }} key={"no-values"} value={""}>
            Nothing to select
          </MenuItem>
        )}
      </Select>
      {isError && <span className={s.error}>error</span>}
    </>
  )
}

export default CustomSelect
