//Global Dependencies
import type {NextPage} from "next"

//Project Components
import Head from "next/head"

import {Footer, Header} from "Сomponents"

//Project Styles
import s from "styles/pages/address.module.scss"
import {footerNav} from "../../shared/constants/footernav";
import CustomBreadcrumbs from "../../Сomponents/Breadcrumbs/Breadcrumbs";
import {Button} from "UI"
import {AddButton} from "../../UI";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>ILONSI SHOP | Address</title>
            </Head>

            <Header/>
            <div className={s.breadcrumbs}>
                <CustomBreadcrumbs/>
            </div>


            <div className={s.content}>
                <div className={s.sidebar}>1</div>
                <main className={s.main}>
                    <div className={s.info}><span>My Address Information</span></div>
                    <div className={s.addresses}></div>
                    <div className={s.addBtn}>
                        <AddButton/>
                    </div>
                    <div className={s.btn}>
                        <Button>Save</Button>
                    </div>
                </main>
            </div>

            <Footer links={footerNav} />
        </>
    )
}

export default Home
