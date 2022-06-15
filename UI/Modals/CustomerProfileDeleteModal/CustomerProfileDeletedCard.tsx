import React from "react";
import s from "./CustomerProfileDeleted.module.scss"
import {Button} from "../../Button";

interface CustomerProfileDeletedCardProps {
    labels: {
        tittle: string
    }
}


export const CustomerProfileDeletedCard: React.FC<CustomerProfileDeletedCardProps> = ({labels}) => {
    return(
        <>
            <div className={s.tittle}>
                <p>{labels.tittle}</p>
            </div>
            <div className={s.button}>
                <Button>Yes</Button>
            </div>
        </>
    )
}
