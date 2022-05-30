import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import s from './Slider.module.scss'

interface SliderProps {
  min?: number,
  max: number,
  values: number[],
}

const SliderLabel: React.FC<SliderProps> = (props) => {
  const { min = 0, max, values } = props

  const [value, setValue] = React.useState<number[]>(values);
  const marks = [
    {
      value: min,
      label: `Min:${value[0]}`,
    },
    {
      value: max,
      label: `Max:${value[1]}`,
    },
  ];
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
      <Box sx={{ width: 200 }}>
        <Slider
          getAriaLabel={() => 'range'}
          value={value}
          defaultValue={0}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={marks}
          min={min}
          max={max}
          className={s.slider}
        />
      </Box>
  );
}
export default SliderLabel;