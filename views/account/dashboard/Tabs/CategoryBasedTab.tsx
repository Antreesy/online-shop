import { useState } from "react"
import cn from "classnames"

import { Table } from "Сomponents"
import { Button, DatePicker, Input, Range, Select } from "UI"

import { Currency } from "shared/enums/currency"

import s from "styles/pages/account/dashboard.module.scss"

export const CategoryBasedTab = () => {
  const [inputValue, setInputValue] = useState<string>("")

  return (
    <div style={{ paddingTop: "47px" }}>
      <div className={s.row}>
        <Select
          values={[]}
          label={"Select Category"}
          selectClassName={s.select}
          labelClassName={s.select__label}
        />
      </div>
      <div className={s.row} style={{ display: "flex" }}>
        <div>
          <h2>Select Start Date</h2>
          <DatePicker
            initValue={new Date()}
            onChange={() => {
              return
            }}
          />
        </div>
        <div>
          <h2>Select End Date</h2>
          <DatePicker
            initValue={new Date()}
            onChange={() => {
              return
            }}
          />
        </div>
        <div>
          <h2>Price Range</h2>
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
          placeholder={"Enter the Product Code"}
          variant="black_button"
          buttonLabel="Search"
        />
        <Button className={cn(s.button_black, s.clean_btn)}>Clean</Button>
      </div>
      <div className={s.table__head}>
        <span className={s.table__head__title}>
          Category Based Sales Statistics
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
              Filtering Results: Total 112230 Product Information
            </span>
            <span className={s.table__head__update}>
              Last Updated: 24.12.2021
            </span>
          </div>
          <Button className={s.button_excel} iconLeft="download">
            Excel Download
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
    </div>
  )
}
