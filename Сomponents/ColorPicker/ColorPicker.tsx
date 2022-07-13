import cn from "classnames"

import { Checkbox } from "@mui/material"
import { Color } from "shared/interfaces/colorProps"

import s from "./colorPicker.module.scss"

interface ColorPickerProps {
  colors: Color[]
  className?: string
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, className }) => {
  return (
    <div className={cn(s.color_picker, className)}>
      {colors.map((item) => (
        <Checkbox
          key={item.color}
          disableRipple
          checkedIcon={
            <span
              className={s.square}
              style={{ backgroundColor: item.color }}
            />
          }
          icon={
            <span
              className={cn(s.square, s.square_active)}
              style={{ backgroundColor: item.color }}
            />
          }
        />
      ))}
    </div>
  )
}

export default ColorPicker
