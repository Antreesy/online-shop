import { useState } from "react"

import { AddButton } from "UI"
import { AddressCard, AddressForm, SectionHeader } from "Сomponents"

import { addresses } from "shared/constants/addresses"
import { AddressProps } from "shared/interfaces/addressProps"

import s from "styles/pages/account/address.module.scss"

export const BrandAddress: React.FC<AddressProps> = (props) => {
  const { role } = props
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <SectionHeader className={s.header_info} title="My Address Information" />

      <div className={s.address_wrapper}>
        {Boolean(addresses.length) &&
          addresses.map((address: { title: string; text: string }, index) => (
            <AddressCard
              key={index}
              title={address.title}
              text={address.text}
            />
          ))}
      </div>

      <div className={s.button_wrapper}>
        {addresses.length ? (
          <AddButton title={"Add New Address"} onClick={handleOpen} />
        ) : (
          <AddButton
            title="Add New Address"
            color="secondary"
            bgColor="white"
            large
            onClick={handleOpen}
          />
        )}
      </div>

      {open && <AddressForm onClose={handleClose} role={role} />}
    </>
  )
}
