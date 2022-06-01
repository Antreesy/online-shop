import React from 'react'
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import s from './colorPcker.module.scss'


const ColorPicker: React.FC = () => {
  return (
    <div>
    <Checkbox  defaultChecked />
    <Checkbox defaultChecked color="secondary" />
    <Checkbox defaultChecked color="success" />
    <Checkbox defaultChecked color="default" />
    <Checkbox
      {...label}
      defaultChecked
      sx={{
        color: pink[800],
        '&.Mui-checked': {
          color: pink[600],
        },
      }}
    />
  </div>
  )
}

export default ColorPicker