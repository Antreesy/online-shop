import { useState } from "react"
import cn from "classnames"
import { useTranslation } from "next-i18next"

import { Table } from "Сomponents"
import { Button, DatePicker, Input, Range, Select } from "UI"

import { Currency } from "shared/enums/currency"

import s from "styles/pages/account/dashboard.module.scss"

export const CategoryBasedTab = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const { t } = useTranslation("dashboard")

  return (
    <div className={s.wrapper}>
      <div className={s.row}>
        <Select
          values={[]}
          label={t("selectCategory")}
          placeholder={t("selectCategory")}
          selectClassName={s.select}
        />
      </div>
      <div className={cn(s.row, s.row_wrap)}>
        <div className={s.inner_row}>
          <DatePicker
            label={t("selectStartDate")}
            initValue={new Date()}
            onChange={() => {
              return
            }}
          />
          <DatePicker
            label={t("selectEndDate")}
            initValue={new Date()}
            onChange={() => {
              return
            }}
          />
        </div>
        <Range
          label={t("priceRange")}
          minQuantity={10000}
          maxQuantity={1000000}
          currency={Currency.RUB}
        />
      </div>
      <div className={cn(s.row, s.row_wrap)}>
        <Select values={[]} selectClassName={s.select} />
        <div className={s.inner_row}>
          <Input
            className={s.input}
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
      </div>
      <div className={s.table__head}>
        <h4 className={s.title}>{t("categoryBasedSalesStatistics")}</h4>
        <div className={cn(s.results, s.desktop)}>
          <div>
            <span className={s.filtering}>
              {t("filteringResults", { number: "11230" })}
            </span>
            <span className={s.update}>
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
          { name: "Category", isSort: false },
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
      <div className={cn(s.results, s.mobile)}>
        <div>
          <span className={s.filtering}>
            {t("filteringResults", { number: "11230" })}
          </span>
          <span className={s.update}>
            {t("lastUpdated", { date: "24.12.2021" })}
          </span>
        </div>
        <Button className={s.button_excel} iconLeft="download">
          {t("excelDownload")}
        </Button>
      </div>
    </div>
  )
}
