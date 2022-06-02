import React from "react"
import Checkbox from "@mui/material/Checkbox"
import { styled } from "@mui/material/styles"
import Grid from "@mui/material/Grid"

import s from "./colorPcker.module.scss"

const colors = [
  { name: "black", color: "#000" },
  { name: "brown", color: "#a57a2f" },
  { name: "darkGrey", color: "#716551" },
  { name: "grey", color: "#a2a2a2" },
  { name: "lightBlue", color: "#487f98" },
  { name: "blue", color: "#251d52" },
]
const BpIcon = styled("span")(({ color }) => ({
  width: 50,
  height: 50,
  backgroundColor: color,
}))

const BpCheckedIcon = styled(BpIcon)(({ color }) => ({
  display: "block",
  width: 50,
  height: 50,
  backgroundImage:
    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
    " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
    "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
  content: '""',
  backgroundColor: color,
}))

const ColorPicker: React.FC = () => {
  return (
    <Grid container>
      <Grid item md={12} sm={6} xs={6}>
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
