import React, {useState} from "react"
import s from "./CustomerProfileChangePassword.module.scss"
import { Button } from "../../Button"
import {Input} from "../../Input";

interface CustomerProfileChangePassword {
    labels: {
        content:string
        nextPasswordModal:boolean
        setNextPasswordModal:  React.Dispatch<React.SetStateAction<boolean>>
    }
}

export const  CustomerProfileChangePassword: React.FC<
    CustomerProfileChangePassword
    > = ({ labels }) => {
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <div className={s.container}>
            <div className={s.content}>
                <p>{labels.content}</p>
            </div>

            <div className={s.inputs}>
                <Input label="Old Password" setValue={setInputValue} value={inputValue} />
                <Input label="New Password" setValue={setInputValue} value={inputValue} />
                <Input label="New Password Again" setValue={setInputValue} value={inputValue} />
            </div>

            <div className={s.button}>
                <Button onClick={() => labels.setNextPasswordModal(!labels.nextPasswordModal)}>Change Password</Button>
            </div>
        </div>
    )
}
