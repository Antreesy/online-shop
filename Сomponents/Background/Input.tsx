import { useState } from "react";

import { Button, Icon } from 'UI'

import cn from 'classnames'

import s from './Background.module.scss'
interface InputProps {
    value?: string,
    className?: string,
    editable?: boolean,
}

const Input: React.FC<InputProps> = (props) => {
    const { value, className, editable } = props
    const [state, setState] = useState(value)
    const [isEditing, setIsEditing] = useState(false)

    let icon = editable ? <Button className={s.editButton} iconLeft="edit" onClick={() => { setIsEditing(true) }} /> : null

    return (

        isEditing
            ?
            <div className={s.area}>
                <input
                    type="text"
                    className={cn(className, s.inputEditer)}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <button
                    onClick={() => {
                        setIsEditing(false);
                    }}
                    className={s.editBtn}
                >
                    edit
                </button>
            </div>

            :
            <div className={cn(className)}><span>{icon}</span><span>{state}</span></div>

    )
}
export default Input;