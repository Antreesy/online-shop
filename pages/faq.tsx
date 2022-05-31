import { NextPage } from "next"
import { Header } from "Сomponents"
import cn from 'classnames'
import s from '../styles/pages/faq-page.module.scss'
const FaqPage: NextPage = () => {
    return (
        <>
            <Header />
            <div className={s.breadCrumbs}>Breadcrumbs</div>
                <div className={s.container}>

                </div>
        </>
    )
}

export default FaqPage