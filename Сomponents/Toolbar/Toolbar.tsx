import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { Box } from "@mui/system"
import React, { useState } from "react"
import { Icon, Input } from "UI"
import s from "./toolbar.module.scss"

interface ToolbarProps {
  values: string[]
  inputValue: string
  setInputValue: (inputValue: string) => void
  selectValue: string
  setSelectValue: (selectValue: string) => void
}

export const Toolbar: React.FC<ToolbarProps> = (props) => {
  const { values, inputValue, selectValue, setInputValue, setSelectValue } =
    props

  return (
    <div className={s.toolbar}>
      <div className={s.search}>
        <Input
          variant="black_outline"
          value={inputValue}
          setValue={setInputValue}
          label=""
          placeholder="Search"
        />
        <Icon type="search" className={s.icon} />
      </div>
      <div className={s.select}>
        <FormControl>
          <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} displayEmpty>
            <MenuItem value="">Filter</MenuItem>
            {values.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className={s.icon}>
          <Icon type={"arrow_down"} />
        </div>
      </div>
    </div>
  )
}
