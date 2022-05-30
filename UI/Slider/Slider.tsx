import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import s from './Slider.module.scss'

import { ThemeProvider, createMuiTheme } from "@mui/material";
const theme = createMuiTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          borderRadius: '2px',
          background: '#8100ef',
          width: '15px',
          height: '15px',

        },
        track: {
          background: '#8100ef',
          height: '1.5px'
        },
        rail: {
          background: 'gray',
          height: '3px'
        },
        markLabel: {
          color: 'black',
          fontSize: '1.2rem',
          top: '30px'
        },
        mark: {
          display: 'none'
        },
        active: {
          boxShadow: '0px 0px 0px 8px rgb(0 0 0 / 16%)'
        }
      }
    }
  }
}

)

interface SliderProps {
  min?: number,
  max: number,
  values: number[]
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
    <ThemeProvider theme={theme}>

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
        />
      </Box>
    </ThemeProvider>

  );
}
export default SliderLabel;