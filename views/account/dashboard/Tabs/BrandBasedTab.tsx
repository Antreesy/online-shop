import cn from "classnames"

import { Table } from "Сomponents"
import { Button, DatePicker, Range, Select } from "UI"

import { Currency } from "shared/enums/currency"

import s from "styles/pages/account/dashboard.module.scss"
import {useTranslation} from "next-i18next";

export const BrandBasedTab = () => {
    const { t } = useTranslation("dashboard")
  return (
    <div style={{ paddingTop: "47px" }}>
      <div className={s.row}>
        <Select
          values={[]}
          label={t("selectCategory")}
          selectClassName={s.select}
          labelClassName={s.select__label}
        />
      </div>
      <div className={s.row} style={{ display: "flex" }}>
        <div>
          <h2>{t("selectStartDate")}</h2>
          <DatePicker
            initValue={new Date()}
            onChange={() => {
              return
            }}
          />
        </div>
        <div>
          <h2>{t("selectEndDate")}</h2>
          <DatePicker
            initValue={new Date()}
            onChange={() => {
              return
            }}
          />
        </div>
        <div>
          <h2>{t("priceRange")}</h2>
          <Range
            minQuantity={10000}
            maxQuantity={1000000}
            currency={Currency.RUB}
          />
        </div>
      </div>
      <div className={s.row}>
        <Button variant={"outlined"} className={cn(s.clean_btn, s._brand)}>
            {t("Clean")}
        </Button>
        <Button className={cn(s.button_black, s.search_btn, s._brand)}>
            {t("search")}
        </Button>
      </div>
      <div className={s.table__head}>
        <span className={s.table__head__title}>
          {t("brandBasedSalesStatistics")}
        </span>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "25px",
            }}
          >
            <span className={s.table__head__results}>
              {t("filteringResults")}
            </span>
            <span className={s.table__head__update}>
              {t("lastUpdated")}
            </span>
          </div>
        </div>
      </div>
      <Table
        headers={[
          { name: "Brand", isSort: false },
          { name: "Net Sales", isSort: true, alignCenter: true },
          { name: "Net Turnover", isSort: true, alignCenter: true },
          {
            name: "Average Selling Price",
            isSort: true,
            alignCenter: true,
          },
        ]}
        innerRows={[]}
      />
    </div>
  )
}
