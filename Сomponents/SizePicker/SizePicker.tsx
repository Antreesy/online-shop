import { FormControl, FormControlLabel, Radio, RadioProps } from "@mui/material"
import { styled } from "@mui/material/styles"

import s from "./sizePicker.module.scss"

interface SizePickerProps {
  labels: string[]
}

const SizePicker: React.FC<SizePickerProps> = (props) => {
  const { labels } = props
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "3px",
    width: 40,
    height: 40,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
  }))

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#cccccc",
    border: "1px solid #cccccc",
    "&:before": {
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#969696",
    },
  })

  // Inspired by blueprintjs
  function BpRadio(props: RadioProps) {
    return (
      <Radio
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    )
  }
  return (
    <div className={s.SizePicker}>
      <FormControl className="">
        {labels.map((label) => (
          <FormControlLabel
            key={label}
            value={label}
            control={<BpRadio />}
            label={label}
          />
        ))}
      </FormControl>
    </div>
  )
}

export default SizePicker
