import { useState } from "react"
import cn from "classnames"

import { Tab, Tabs } from "@mui/material"

import s from "./tabs.module.scss"

interface TabsProps {
  labels: string[]
  variant?: "default" | "spaces" | "no_border"
  values: React.ReactNode[]
  value?: number
  className?: string
}

const CustomTabs: React.FC<TabsProps> = (props) => {
  const {
    labels,
    variant = "default",
    values,
    value,
    className,
  } = props

  const [tabIndex, setTabIndex] = useState<number>(value || 0)
  const [tabValue, setTabValue] = useState<number>(value || 0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const tabsClass = cn(
    s.tabs,
    {
      [s.tabs_default]: variant === "default",
      [s.tabs_spaces]: variant === "spaces",
      [s.tabs_no_border]: variant === "no_border",
    },
    className,
  )

  return (
    <div className={s.tabs_container}>
      <Tabs
        value={value || tabValue}
        onChange={handleChange}
        className={tabsClass}
      >
        {labels &&
          labels.map((label, index) => {
            return (
              <Tab
                key={label}
                label={label}
                className={`${s.tab} ${index === tabValue && s.active}`}
                onClick={() => {
                  setTabIndex(index)
                }}
              />
            )
          })}
      </Tabs>

      {values && values[value || tabIndex]}
    </div>
  )
}

export default CustomTabs
