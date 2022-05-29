import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Radio, 
    RadioGroup,
    Typography 
} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FC, useState } from "react"

import s from "./radioButtons.module.scss"

interface RadioButton {
    value: string;
    label: string;
}

interface RadioButtonGroupProps {
    title: string;
    initialValue: string;
    elements?: RadioButton[];
    acordion?: boolean;
    className?: string;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = (props) => {
    const {
        title,
        initialValue,
        elements = [{value:'female',label:'Female'},{value:'male',label:'Male'}],
        acordion=false,
        className
    } = props
    
    const [value, setValue] = useState(initialValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    if (acordion) {
        return(
            <Accordion className={className}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={s.radio_group}
                >
                    <Typography
                        className={s.title}
                    >{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup
                        value={value}
                        onChange={handleChange}
                        className={s.radio_buttons}
                    >
                    {elements && elements.map(({value, label}, index) => {
                        return(
                            <FormControlLabel
                                key={index}
                                className={s.radio_button}
                                value={value}
                                control={<Radio checkedIcon={<SvgFill/>} />}
                                label={label}
                            />
                        )
                    })}
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        )
    } else {
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
                {elements && elements.map(({value, label}, index) => {
                    return(
                        <FormControlLabel
                            key={index}
                            className={s.radio_button}
                            value={value}
                            control={<Radio checkedIcon={<SvgFill/>} />}
                            label={label}
                        />
                    )
                })}
                </RadioGroup>
            </div>
        )
    }    
}

const SvgFill = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g data-name="Ellipse 538" fill="#8100ef">
                <circle cx="10" cy="10" r="10" style={{stroke:'none'}}/>
                <circle cx="10" cy="10" r="9.25" style={{fill:'none'}}/>
            </g>
        </svg>
    )
}

export default RadioButtonGroup