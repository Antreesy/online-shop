import { SectionHeader } from "Сomponents"
import { Tabs } from "UI"

import { BrandBasedTab, CategoryBasedTab, ProductBasedTab } from "./Tabs"

import s from "styles/pages/account/dashboard.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DashboardProps {}

export const UniversalDashboard: React.FC = () => {
  return (
    <>
      <SectionHeader className={s.header_info} title={"My Dashboard"} />

      <div className={s.address_wrapper}>
        <Tabs
          className={s.notification_tabs}
          variant="spaces"
          labels={[
            "Product Based Sale Statistics",
            "Category Based Sale Statistics",
            "Brand Based Sale Statistics",
            "Other Statistics",
          ]}
          values={[
            <ProductBasedTab />,

            <CategoryBasedTab />,

            <BrandBasedTab />,
          ]}
        />
      </div>
    </>
  )
}
