import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { FC, ReactNode, useState } from "react"

import s from "./radioButtons.module.scss"

interface RadioButtonProps {
    value: string;
    label: string;
}

interface RadioButtonGroupProps {
    title: string;
    elements: Array<RadioButtonProps>;
    initialValue: any;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
    const {
        title,
        elements,
    } = props
    
    const [value, setValue] = useState('female')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return(
        <div className={s.radio_group}>
            <Typography
                className={s.title}
            >{title}</Typography>
            <RadioGroup
                value={value}
                onChange={handleChange}
                className={s.radio_buttons}
            >
            {elements.map(({value, label}, index) => {
                return(
                    <FormControlLabel
                        className={s.radio_button}
                        value={value}
                        control={<Radio />}
                        label={label}
                    />
                )
            })}
            </RadioGroup>
        </div>
        
    )
}

export default RadioButtonGroup