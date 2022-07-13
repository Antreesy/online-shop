import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"

import s from "./sizePicker.module.scss"

export type SizePickerLabels = "S" | "M" | "L" | "XL" | "2XL" | "3XL"

type SizePickerProps = {
  labels: SizePickerLabels[]
  className?: string
}

const SizePicker: React.FC<SizePickerProps> = (props) => {
  const { labels, className } = props

  const BpIcon = () => <span className={s.radio_icon} />
  const BpCheckedIcon = () => <span className={s.radio_icon_checked} />

  return (
    <FormControl className={className}>
      <RadioGroup className={s.size_picker}>
        {labels.length ? (
          labels.map((label) => (
            <FormControlLabel
              key={label}
              value={label}
              control={
                <Radio
                  className={s.radio}
                  disableRipple
                  icon={<BpIcon />}
                  checkedIcon={<BpCheckedIcon />}
                />
              }
              label={label}
            />
          ))
        ) : (
          <span>No available sizes</span>
        )}
      </RadioGroup>
    </FormControl>
  )
}

export default SizePicker
