import { NextPage } from "next"
import { Header } from "Сomponents"
import cn from 'classnames'
import s from '../styles/pages/faq-page.module.scss'
import SupportSection from "Сomponents/SupportSection/SupportSection"
import { Accordion } from "UI"
const FaqPage: NextPage = () => {
    return (
        <>
            <Header />
            <div className={s.breadCrumbs}>Breadcrumbs</div>
            <div className={s.container}>
                <div className={s.leftSide}></div>
                <div className={s.mainContent}>
                    <SupportSection />
                    <h1 className={s.heading}>FAQ</h1>
                    <div className={s.accordions}>
                        <Accordion header={'first'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam dolorem odio ea quasi alias repellat dignissimos? Nostrum eaque eum doloribus minima quaerat numquam dolores illo? Nam consequatur doloribus nostrum.
                        </Accordion>
                        <Accordion header={'second'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam dolorem odio ea quasi alias repellat dignissimos? Nostrum eaque eum doloribus minima quaerat numquam dolores illo? Nam consequatur doloribus nostrum.
                        </Accordion>
                        <Accordion header={'third'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam dolorem odio ea quasi alias repellat dignissimos? Nostrum eaque eum doloribus minima quaerat numquam dolores illo? Nam consequatur doloribus nostrum.
                        </Accordion>
                        <Accordion header={'fourth'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam dolorem odio ea quasi alias repellat dignissimos? Nostrum eaque eum doloribus minima quaerat numquam dolores illo? Nam consequatur doloribus nostrum.
                        </Accordion>
                        <Accordion header={'fivth'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam dolorem odio ea quasi alias repellat dignissimos? Nostrum eaque eum doloribus minima quaerat numquam dolores illo? Nam consequatur doloribus nostrum.
                        </Accordion>
                        <Accordion header={'six'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam dolorem odio ea quasi alias repellat dignissimos? Nostrum eaque eum doloribus minima quaerat numquam dolores illo? Nam consequatur doloribus nostrum.
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqPage