import { useState } from "react";

import { Icon } from 'UI'

import cn from 'classnames'


import s from './Background.module.scss'
interface InputProps {
    value?: string,
    className?: string,
    iconVisible?: boolean,
    iconClassname?: string
}

const Input: React.FC<InputProps> = (props) => {
    const { value, className, iconVisible = false, iconClassname } = props
    const [state, setState] = useState('')

    return (
        <>
            {iconVisible ? <Icon type="edit" className={iconClassname} /> : null} <input type="text" className={cn(s.inputEdit, className)} defaultValue={value} onChange={(e) => setState(e.target.value)} />
        </>
    )
}
export default Input;