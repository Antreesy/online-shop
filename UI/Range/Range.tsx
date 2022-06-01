import { Box } from "@mui/material"
import React  from "react"
import s from "./range.module.scss"


interface RangeProps {
  minQuantity: number, 
  maxQuantity: number, 
  currency: string,
}

const Range: React.FC<RangeProps> = (props) => {

const {minQuantity, maxQuantity, currency} = props

  return (
    <Box
      className={s.box}
      sx={{
        width: 410,
        hegth: 65,
        borderRadius: 1,
        backgroundColor: "#ccc",
      }}
    >
      <div>
        <span className={s.min}>{minQuantity}{currency}</span>
        <span className={s.space}>-</span>
        <span className={s.max}>{maxQuantity}{currency}</span>
      </div>
    </Box>
  )
}

export default Range
