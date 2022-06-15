import React from "react";
import s from "./memberAynIPopup.module.scss";
import {Button} from "../../Button";

interface MemberAynPopupDesktopProps {
    labels: {
        tittle:string
        content:string
    }
}



 export const MemberAynPopupDesktop: React.FC<MemberAynPopupDesktopProps> = ({labels}) => {
    return(
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
