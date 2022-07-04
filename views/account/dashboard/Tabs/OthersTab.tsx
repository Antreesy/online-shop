import cn from "classnames"
import { useTranslation } from "next-i18next"

import SimpleBar from "simplebar-react"
import { Chart, DashStatisticButton } from "Сomponents"

import { chartData } from "shared/constants/charts"

import s from "styles/pages/account/dashboard.module.scss"

export const OthersTab = () => {
  const { t } = useTranslation("dashboard")

  return (
    <div className={cn(s.wrapper, s.others_wrapper)}>
      <div>
        <h4 className={s.title}>{"Other Statistics"}</h4>
        <SimpleBar className={s.scrollbar}>
          <div className={s.others_row}>
            <DashStatisticButton
              icon={"shop"}
              title={"Total Shop view"}
              value={54327892}
              lastUpdated={"24.12.2021"}
            />

            <DashStatisticButton
              icon={"bookmark"}
              title={"Total Saved Products"}
              value={452312}
              lastUpdated={"24.12.2021"}
            />

            <DashStatisticButton
              icon={"discount"}
              title={"Total Campaigns Attended"}
              value={859}
              lastUpdated={"24.12.2021"}
            />
          </div>
        </SimpleBar>
      </div>

      <div>
        <h4 className={s.title}>{"Customer Demographics"}</h4>
        <SimpleBar className={s.scrollbar}>
          <div className={s.others_row}>
            {chartData.map((chart, index) => (
              <Chart key={index} caption={chart.caption} data={chart.data} />
            ))}
          </div>
        </SimpleBar>
      </div>

      <div>
        <h4 className={s.title}>{"Discount Statistics"}</h4>
        <SimpleBar className={s.scrollbar}>
          <div className={s.others_row}>
            <DashStatisticButton
              icon={"coupon"}
              title={"Coupon Code"}
              value={5148932}
              lastUpdated={"24.12.2021"}
            />

            <DashStatisticButton
              icon={"discount"}
              title={"Percentage Discount"}
              value={9023}
              lastUpdated={"24.12.2021"}
            />

            <DashStatisticButton
              icon={"lira_discount"}
              title={"1000TL over 75TL Discount"}
              value={19482091}
              lastUpdated={"24.12.2021"}
            />
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}
