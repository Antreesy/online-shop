import { useEffect, useState } from "react"
import cn from "classnames"

import { Tab, Tabs } from "@mui/material"

import s from "./tabs.module.scss"

interface TabsProps {
  labels: string[]
  variant?: "default" | "spaces" | "no_border"
  values: React.ReactNode[]
  value?: number
  className?: string
  onChange?: (value: number) => void
}

const CustomTabs: React.FC<TabsProps> = (props) => {
  const {
    labels,
    variant = "default",
    values,
    value = 0,
    onChange,
    className,
  } = props

  const [tabValue, setTabValue] = useState<number>(value)

  useEffect(() => {
    setTabValue(value)
  }, [value])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    onChange?.(newValue)
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
        value={tabValue}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
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
                  setTabValue(index)
                }}
              />
            )
          })}
      </Tabs>

      {values && values[tabValue]}
    </div>
  )
}

export default CustomTabs
