import React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import s from "./Slider.module.scss"

interface SliderProps {
  min?: number
  max?: number
  value: number[]
}

const SliderLabel: React.FC<SliderProps> = (props) => {
  const { min = 0, max = 10, value } = props

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
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => "range"}
        value={values}
        defaultValue={0}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        className={s.slider}
        marks={marks}
      />
    </Box>
  )
}
export default SliderLabel
