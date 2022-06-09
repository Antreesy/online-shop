import { Controller, useForm } from "react-hook-form"

import { AddButton } from "UI"
import { AddressCard, AddressForm, SectionHeader } from "Сomponents"

import { addresses } from "shared/constants/addresses"

import s from "styles/pages/account/address.module.scss"
import { AddressProps } from "shared/interfaces/addressProps"

export const BrandAddress: React.FC<AddressProps> = (props) => {
  const { role } = props

  return (
    <>
      <SectionHeader
        className={s.header_info}
        title="My Address Information (Brand)"
      />

      <div className={s.address_wrapper}>
        {addresses.map((address: { title: string; text: string }, index) => (
          <AddressCard key={index} title={address.title} text={address.text} />
        ))}
      </div>

      <div className={s.addBtn}>
        <AddButton title={"Add New Address"} />
      </div>

      <AddressForm role={role} />
    </>
  )
}
