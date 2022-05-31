import React from "react"
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioProps,
  RadioGroup,
} from "@mui/material"
import { styled } from "@mui/material/styles"

import s from "./sizePicker.module.scss"

interface SizePickerProps {
  labels: string[]
}

const SizePicker: React.FC<SizePickerProps> = (props) => {
  const { labels } = props
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "3px",
    width: 50,
    height: 50,
    border: "none",
    backgroundColor: "#e9e9e9",
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#b6b6b6" : "#b6b6b6",
    },
  }))

  const BpCheckedIcon = styled(BpIcon)({
    border: "2px solid #2c2c2c",
    "&:before": {
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#c2c2c2",
    },
  })

  function BpRadio(props: RadioProps) {
    return (
      <Radio
        className={s.radio}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    )
  }
  return (
    <div>
      <RadioGroup>
        <FormControl className={s.sizePicker}>
          {labels.map((label) => (
            <FormControlLabel
              key={label}
              value={label}
              control={<BpRadio />}
              label={label}
            />
          ))}
        </FormControl>
      </RadioGroup>
    </div>
  )
}

export default SizePicker
