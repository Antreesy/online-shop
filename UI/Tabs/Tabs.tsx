import { Tab, Tabs } from "@mui/material"
import React, { ReactNode, useState } from "react"
import s from "./tabs.module.scss"

interface TabsProps {
  labels: string[]
  width?: string
  variant: "spaces" | "default" | "without_border"
  values: ReactNode[] | string[]
}

const CustomTabs: React.FC<TabsProps> = (props) => {
  const [valueIndex, setValueIndex] = useState<number>(0)
  const [value, setValue] = useState<number>(0)
  const { labels, width = "10px", variant, values } = props

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        className={s["tabs" + "_" + variant]}
      >
        {labels &&
          labels.map((label, index) => {
            return (
              <Tab
                key={label}
                label={label}
                className={s.tab}
                sx={{ width }}
                onClick={() => setValueIndex(index)}
              />
            )
          })}
      </Tabs>
      {values && values[valueIndex]}
    </div>
  )
}

export default CustomTabs
