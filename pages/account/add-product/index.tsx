import { NextPage } from "next"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import dynamic from "next/dynamic"

import { UniversalAddProductProps } from "views/account/add-product/UniversalAddProduct"

const UniversalAddProduct = dynamic<UniversalAddProductProps>(() =>
  import("views/account/add-product").then(
    (module) => module.UniversalAddProduct,
  ),
)

import { Roles } from "shared/enums/roles"
import { useAppSelector } from "store/hooks"
import { authRole } from "store/slices/authSlice"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "sidebar",
        "addProduct",
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
