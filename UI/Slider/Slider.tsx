import React from "react"
import cn from "classnames"

import { Box, Slider } from "@mui/material"

import s from "./slider.module.scss"

interface SliderProps {
  min?: number
  max?: number
  value: [number, number]
  className?: string
}

const CustomSlider: React.FC<SliderProps> = (props) => {
  const { min = 0, max = 10, value, className } = props

  const [values, setValue] = React.useState<number[]>(value)
  const marks = [
    {
      value: min,
      label: `Min:${values[0]}`,
    },
    {
      value: max,
      label: `Max:${values[1]}`,
    },
  ]
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box className={cn(s.slider_wrapper, className)}>
      <Slider
        color="secondary"
        getAriaLabel={() => "range"}
        value={values}
        defaultValue={0}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        className={s.slider}
        marks={marks}
        classes={{
          rail: s.rail,
          mark: s.mark,
          markLabel: s.mark_label,
          valueLabel: s.value_label,
        }}
      />
    </Box>
  )
}
export default CustomSlider
