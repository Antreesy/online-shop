import { useState } from "react"
import cn from "classnames"

import { Table } from "Сomponents"
import { Button, DatePicker, Input, Range, Select } from "UI"

import { Currency } from "shared/enums/currency"

import s from "styles/pages/account/dashboard.module.scss"
import { useTranslation } from "next-i18next"

export const ProductBasedTab = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const { t } = useTranslation("dashboard")

  return (
    <div style={{ paddingTop: "47px" }}>
      <div className={s.row}>
        <Select
          values={[]}
          label={t("selectCategory")}
          placeholder={t("selectCategory")}
          selectClassName={s.select}
          labelClassName={s.select__label}
        />
        <Select
          values={[]}
          label={t("selectBrand")}
          placeholder={t("selectBrand")}
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
        <Select
          values={[]}
          className={s.select_class}
          selectClassName={s.select}
        />
        <Input
          value={inputValue}
          setValue={setInputValue}
          placeholder={t("enterTheProductCode")}
          variant="black_button"
          buttonLabel={t("search")}
        />
        <Button className={cn(s.button_black, s.clean_btn)}>
          {t("Clean")}
        </Button>
      </div>
      <div className={s.table__head}>
        <span className={s.table__head__title}>
          {t("productBasedSalesStatistics")}
        </span>
        <div className={s.result_with_exel}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "25px",
            }}
          >
            <span className={s.table__head__results}>
              {t("filteringResults", { number: "11230" })}
            </span>
            <span className={s.table__head__update}>
              {t("lastUpdated", { date: "24.12.2021" })}
            </span>
          </div>
          <Button className={s.button_excel} iconLeft="download">
            {t("excelDownload")}
          </Button>
        </div>
      </div>
      <Table
        headers={[
          { name: "Product Information", isSort: false },
          { name: "Net Sales", isSort: true, alignCenter: true },
          { name: "Net Turnover", isSort: true, alignCenter: true },
          {
            name: "Average Selling Price",
            isSort: true,
            alignCenter: true,
          },
          {
            name: "Current Turnover",
            isSort: false,
            alignCenter: true,
          },
          { name: "Day", isSort: false, alignCenter: true },
        ]}
        innerRows={[]}
      />
    </div>
  )
}
