import { Checkbox, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"

import s from "./colorPicker.module.scss"

const BpIcon = styled("span")(({ color }) => ({
  display: "block",
  width: 50,
  height: 50,
  backgroundColor: color,
}))

const BpCheckedIcon = styled(BpIcon)(() => ({
  backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
}))

interface ColorPickerProps {
  colors: { name: string; color: string }[]
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
  return (
    <Grid container>
      <Grid item md={8} sm={6} xs={4}>
        {colors.map((item) => (
          <Checkbox
            key={item.color}
            disableRipple
            checkedIcon={<BpCheckedIcon color={item.color} />}
            icon={<BpIcon color={item.color} />}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default ColorPicker
