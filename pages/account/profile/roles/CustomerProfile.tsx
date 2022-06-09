import { Controller, useForm } from "react-hook-form"

import { Button, Input } from "UI"
import { SectionHeader } from "Сomponents"

import s from "styles/pages/account/profile.module.scss"

export interface CustomerProfileType {
  brand_name: string
  brandDisplayName: string
  email: string
  phone: string
  address: string
  password: string
}

export const CustomerProfile = (props: CustomerProfileType) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<CustomerProfileType>({
    criteriaMode: "all",
    defaultValues: {
      brand_name: props.brand_name,
      brandDisplayName: props.brandDisplayName,
      email: props.email,
      phone: props.phone,
      address: props.address,
      password: props.password,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <SectionHeader className={s.title} title={"Customer Profile"} />
    </>
  )
}
