import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {Roles} from "../../../shared/enums/roles";
import {useAppSelector} from "../../../store/hooks";
import {authRole} from "../../../store/slices/authSlice";
import {Payment} from "../../../views/account/payment";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "payment"
      ])),
    },
  }
}

const Profile: NextPage = () => {
  const role = useAppSelector(authRole)
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {/*Оставил 3 роли потому что как я понял мы пока что в роли influencer если я оставлю только customer то этот
      компонент не будет отображаться*/}

      {role === Roles.BRAND && <Payment />}
      {role === Roles.CUSTOMER && <Payment />}
      {role === Roles.INFLUENCER && <Payment />}
    </>
  )
}

export default Profile
