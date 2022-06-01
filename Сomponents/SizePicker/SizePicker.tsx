import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"

import s from "./sizePicker.module.scss"

export type SizePickerLabels = "S" | "M" | "L" | "XL" | "XXL" | "3XL"

type SizePickerProps = {
  labels: SizePickerLabels[]
}

const SizePicker: React.FC<SizePickerProps> = (props) => {
  const { labels } = props

  const BpIcon = () => <span className={s.radioIcon} />
  const BpCheckedIcon = () => <span className={s.radioIconChecked} />

  return (
    <FormControl>
      <RadioGroup className={s.sizePicker}>
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
