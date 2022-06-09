import { NextPage } from "next"
import Head from "next/head"

import { AddButton } from "UI"
import { AddressCard, AddressForm, SectionHeader } from "Сomponents"

import { addresses } from "shared/constants/addresses"

import s from "styles/pages/account/address.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Account</title>
      </Head>

      <SectionHeader className={s.header_info} title="My Address Information" />

      <div className={s.address_wrapper}>
        {addresses.map((address, index) => (
          <AddressCard key={index} title={address.title} text={address.text} />
        ))}
      </div>

      <div className={s.addBtn}>
        <AddButton title={"Add New Address"} />
      </div>

      <AddressForm />
    </>
  )
}

export default Profile
