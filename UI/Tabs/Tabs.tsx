import { Tab, Tabs } from "@mui/material"
import React from "react"
import s from "./tabs.module.scss"

interface TabsProps {
  labels: string[]
  width?: string
  variant: string
}

const CustomTabs: React.FC<TabsProps> = (props) => {
  const [value, setValue] = React.useState(0)
  const { labels, width = "10px", variant } = props

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      className={s["tabs" + "_" + variant]}
    >
      {labels.map((label) => (
        <Tab key={label} label={label} className={s.tab} sx={{ width }} />
      ))}
    </Tabs>
  )
}

export default CustomTabs
