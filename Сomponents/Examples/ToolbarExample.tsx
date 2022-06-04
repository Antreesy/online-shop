import { SelectChangeEvent } from "@mui/material"
import React, { useState } from "react"
import { Toolbar } from "Сomponents/Toolbar"

export const ToolbarExample = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [selectValue, setSelectValue] = useState<string>("")
  const values = ["first", "second", "third"]

  return (
    <div>
      <Toolbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        values={values}
        setSelectValue={setSelectValue}
        selectValue={selectValue}
      />
    </div>
  )
}
