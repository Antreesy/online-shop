import { NextPage } from "next"
import Head from "next/head"

import { Footer, Header, ProfileSidebar } from "Сomponents"

import { footerNav } from "shared/constants/footernav"

import s from "styles/pages/faq.module.scss"
import { roleProfile } from "shared/constants/roleProfile"
import { BrandProfile } from "./components/brand_profile"

const role = "brand"

const accountProps = {
  brand_name: "Prada",
  brand_display_name: "",
  email: "prada@mail.ru",
  phone: "79117007070",
  address: "",
  password: "12345678",
}

const Profile: NextPage = () => {
  // useEffect(() => {
  //   dispatch get options for role

  //   dispatch push this options to store

  // }, []);

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <Header withBreadcrumbs />

      <main className={s.main}>
        <div className={s.container}>
          <div className={s.aside}>
            <ProfileSidebar
              title={role === "brand" ? "My Profile" : "My Account"}
              labels={roleProfile[role]}
            />
          </div>

          {role === "brand" ? <BrandProfile {...accountProps} /> : null}
        </div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async ({ req, res, ...etc }) => {

//     const role = getRoleFromServer
//     return { props: { role } };
//   },
// );

// export default connect((state) => state)(Profile);

export default Profile
