import { FormControlLabel, Radio } from "@mui/material"
import { FC } from "react";

import s from "./radioButton.module.scss"

export interface RadioButtonProps {
    value: string;
    label: string;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
    const {
        value,
        label,
    } = props

    return(
        <FormControlLabel
            className={s.radio_button}
            value={value}
            control={<Radio />}
            label={label}
        />
    )
}

export default RadioButton