import React from "react"
import s from "./CustomerProfileUpdate.module.scss"
import { Button } from "../../Button"

interface CustomerProfileUpdate {
    labels: {
        tittle: string
        content:string
    }
}

export const  CustomerProfileUpdate: React.FC<
    CustomerProfileUpdate
    > = ({ labels }) => {
    return (
        <>
            <div className={s.tittle}>
                <p>{labels.tittle}</p>
            </div>
            <div className={s.content}>
                <p>{labels.content}</p>
            </div>
            <div className={s.button}>
                <Button>All Right</Button>
            </div>
        </>
    )
}
