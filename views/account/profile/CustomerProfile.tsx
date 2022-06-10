import { SectionHeader } from "Сomponents"

import s from "styles/pages/account/profile.module.scss"

export interface CustomerProfileProps {
  brand_name: string
  brandDisplayName: string
  email: string
  phone: string
  address: string
  password: string
}

export const CustomerProfile: React.FC<CustomerProfileProps> = (props) => {
  return (
    <>
      <SectionHeader className={s.title} title={"Customer Profile"} />
    </>
  )
}
