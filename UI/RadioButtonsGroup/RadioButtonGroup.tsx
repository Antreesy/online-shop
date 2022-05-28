import { RadioGroup, Typography } from "@mui/material"
import { FC, useState } from "react"
import RadioButton, { RadioButtonProps } from "UI/RadioButton/RadioButton"

import s from "./radioButtons.module.scss"

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
                {
                    elements.map(({value, label}, index) => {
                        return(
                            <RadioButton key={index} value={value} label={label} />
                        )
                    })
                }
            </RadioGroup>
        </div>
        
    )
}

export default RadioButtonGroup