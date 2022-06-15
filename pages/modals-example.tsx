import { NextPage } from "next"
import Head from "next/head"

import React, {useState} from "react"
import {MemberAynPopupDesktop} from "../UI/Modals";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import {Button} from "../UI";
import s from "../styles/pages/ComponentsExample.module.scss";
import {CustomerProfileDeletedCard} from "../UI/Modals/CustomerProfileDeleteModal/CustomerProfileDeletedCard";


const ModalsExample: NextPage = () => {
    const [MemberAynIPopupDesktop, setMemberAynIPopupDesktop] = useState<boolean>(false)
    const [CustomerProfileDeleted, setCustomerProfileDeleted] = useState<boolean>(false)

    return (
        <>
            <Head>
                <title>ILONSI SHOP | Order Detail</title>
            </Head>

            {/*Nashkhoev Modals*/}
            <div style={{marginTop:"10px"}}>
                <h2>Nashkhoev modals example</h2>
               <div>
                   <Button onClick={() => setMemberAynIPopupDesktop(!MemberAynIPopupDesktop)} className={s.button_purple}>
                       MemberAynIPopupDesktop
                   </Button>
                   <ModalWindow
                       isOpen={MemberAynIPopupDesktop}
                       onClose={() => setMemberAynIPopupDesktop(!MemberAynIPopupDesktop)}
                       iconType="okay">
                       <MemberAynPopupDesktop labels={
                           {tittle:"You are now ready",
                            content:"We received the request to create a membership. We will get back to you via  e-mail within 24 hours."}
                       }/>
                   </ModalWindow>
               </div>
               <div style={{marginTop:"20px"}}>
                   <Button onClick={() => setCustomerProfileDeleted(!CustomerProfileDeleted)} className={s.button_purple}>
                       CustomerProfileDeletedCard
                   </Button>
                   <ModalWindow
                       isOpen={CustomerProfileDeleted}
                       onClose={() => setCustomerProfileDeleted(!CustomerProfileDeleted)}
                       iconType="okay">
                       <CustomerProfileDeletedCard labels={
                           {tittle:"The card has been successfully deleted"}
                       }/>
                   </ModalWindow>
               </div>
            </div>

            {/*Roman Modals*/}
            <div></div>
        </>

    )
}
export default ModalsExample;
