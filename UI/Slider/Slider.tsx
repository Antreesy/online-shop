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
          top: '20px'
        }
      }
    }
  }
}

)

const marks = [
  {
    value: 0,
    label: 'Min:',
  },
  {
    value: 100,
    label: 'Max:',
  },
];
export default function SliderLabel() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 140 }} >
        <Slider
          className={s.leftSquare}
          aria-label=""
          defaultValue={30}
          // getAriaValueText={valuetext}
          color="secondary"
          marks={marks}
        />
      </Box>
    </ThemeProvider>

  );
}
