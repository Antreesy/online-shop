//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"
import { footerNav } from "../../shared/constants/footernav"
import { Button } from "UI"
import { AddButton } from "../../UI"
import { AddressCard, Footer, Header, ProfileSidebar } from "Сomponents"

//Project Styles
import s from "styles/pages/address.module.scss"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Address</title>
      </Head>

      <Header withBreadcrumbs />

      <div className={s.content}>
        <div className={s.sidebar}>
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
            ]}
          />
        </div>
        <main className={s.main}>
          <div className={s.info}>
            <span>My Address Information</span>
          </div>
          <div className={s.addresses}>
            <div className={s.address}>
              <AddressCard
                title={"Yalçın’s Home"}
                text={
                  "lacus pretium est dapibus euismod. Aliquam in porta neque, quis pretium risus. Nunc ac libero vitae diam elementum laoreet et vel velit. Fusce molestie volutpat tellus eget rutrum. Curabitur aliquet, metus nec aliquet dapibus, nisl turpis gravida nisl, nec pharetra neque ligula vitae sem."
                }
                key={1}
              />
            </div>
            <div className={s.addBtn}>
              <AddButton title={"Add New Address"} />
            </div>
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
