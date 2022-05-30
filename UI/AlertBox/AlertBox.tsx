import { Alert } from "@mui/material";
import classNames from "classnames";
import { FC } from "react";
import s from "./alertBox.module.scss"

interface AlertBoxProps {
    text: string;
    color?:
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
    variant?: "standart" | "filled" | "outlined";
    className?: string;
}

const AlertBox: FC<AlertBoxProps> = (props) => {
    const {
        text,
        color=,
        variant="standart",
        className,
    } = props

    return(
        <Alert
            variant={variant}
            className={classNames(s.alertBox, className)}
            classes={{filled: s.filled}}
            icon={false}
        >{text}</Alert>
    )
}

export default AlertBox