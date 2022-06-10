import { useTranslation } from "next-i18next"

import { SectionHeader } from "Сomponents"

import s from "styles/pages/account/profile.module.scss"

export interface InfluencerProfileProps {
  brand_name: string
  brandDisplayName: string
  email: string
  phone: string
  address: string
  password: string
}

export const InfluencerProfile: React.FC<InfluencerProfileProps> = (props) => {
  const { t } = useTranslation("profile")

  return (
    <>
      <SectionHeader className={s.title} title={t("profile")} />
    </>
  )
}
