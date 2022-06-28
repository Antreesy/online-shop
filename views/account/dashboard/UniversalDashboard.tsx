import { useTranslation } from "next-i18next"

import { SectionHeader } from "Сomponents"
import { Tabs } from "UI"

import { BrandBasedTab, CategoryBasedTab, OthersTab, ProductBasedTab } from "./Tabs"

import s from "styles/pages/account/dashboard.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DashboardProps {}

export const UniversalDashboard: React.FC = () => {
  const { t } = useTranslation("dashboard")

  return (
    <>
      <SectionHeader className={s.header_info} title={"My Dashboard"} />

      <Tabs
        className={s.notification_tabs}
        variant="spaces"
        labels={[
          t("productBasedSalesStatistics"),
          t("categoryBasedSalesStatistics"),
          t("brandBasedSalesStatistics"),
          t("otherStatistics"),
        ]}
        values={[<ProductBasedTab />, <CategoryBasedTab />, <BrandBasedTab />, <OthersTab />]}
      />
    </>
  )
}
