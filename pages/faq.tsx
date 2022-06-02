import { NextPage } from "next"

import Head from "next/head"
import { Footer, Header, ProfileSidebar, SupportSection } from "Сomponents"
import { Accordion } from "UI"
import { footerNav } from "shared/constants/footernav"
import { questions } from "shared/constants/questions"
// import {  } from "shared/constants/footernav"


import s from '../styles/pages/faq-page.module.scss'

const FaqPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>ILONSI SHOP | FAQ page</title>
            </Head>
            <Header />
            <div className={s.breadCrumbs}>Breadcrumbs</div>
            <div className={s.container}>
                <div className={s.leftSide}>
                    <ProfileSidebar
                        labels={[
                            "profile",
                            "Address",
                            "Order",
                            "Payment",
                            "Notification",
                            "Favorite",
                            "Help",
                            "Sign Out",
                        ]} />
                </div>
                <div className={s.mainContent}>
                    <SupportSection />
                    <h1 className={s.heading}>FAQ</h1>
                    <div className={s.accordions}>
                        {questions.map(({ header, content }) => {
                            return <Accordion header={header} headerClassName={s.active}>
                                {content}
                            </Accordion>
                        })}


                    </div>
                </div>
            </div>
            <Footer links={footerNav} />
        </>
    )
}

export default FaqPage