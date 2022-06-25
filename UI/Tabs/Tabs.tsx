import { useState } from "react"
import cn from "classnames"

import { Tab, Tabs } from "@mui/material"
import SimpleBar from "simplebar-react"

import s from "./tabs.module.scss"

interface TabsProps {
  labels: string[]
  isScrollable?: boolean
  variant?: "default" | "spaces" | "no_border"
  values: React.ReactNode[]
  className?: string
}

const CustomTabs: React.FC<TabsProps> = (props) => {
  const {
    labels,
    variant = "default",
    values,
    isScrollable = false,
    className,
  } = props

  const [valueIndex, setValueIndex] = useState<number>(0)
  const [value, setValue] = useState<number>(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
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
  const TabsHeader = () => (
    <Tabs value={value} onChange={handleChange} className={tabsClass}>
      {labels &&
        labels.map((label, index) => {
          return (
            <Tab
              key={label}
              label={label}
              className={`${s.tab} ${index === value && s.active}`}
              onClick={() => setValueIndex(index)}
            />
          )
        })}
    </Tabs>
  )

  return (
    <div className={s.tabs_container}>
      {isScrollable ? (
        <SimpleBar className={s.scrollbar}>
          <TabsHeader />
        </SimpleBar>
      ) : (
        <TabsHeader />
      )}

      {values && values[valueIndex]}
    </div>
  )
}

export default CustomTabs
