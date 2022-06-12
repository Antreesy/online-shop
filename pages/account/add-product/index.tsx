import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"
import { UniversalAddProduct } from "views/account/add-product"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "add-product",
      ])),
    },
  }
}

const AddProduct: NextPage = () => {
  const role = useAppSelector(authRole)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      {role === Roles.BRAND && <UniversalAddProduct />}
    </>
  )
}

export default AddProduct
