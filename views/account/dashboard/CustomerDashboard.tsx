import { useTranslation } from "next-i18next"
import { SectionHeader, Table } from "Сomponents"
import { AddressProps } from "shared/interfaces/addressProps"

import s from "styles/pages/account/dashboard.module.scss"
import { Button, DatePicker, Input, Range, Select, Tabs } from "../../../UI"
import { Currency } from "../../../shared/enums/currency"
import cn from "classnames"
import React from "react"

export const CustomerDashboard: React.FC<AddressProps> = (props) => {
  const { t } = useTranslation("address")

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
            <div style={{ paddingTop: "47px" }}>
              <div className={s.row}>
                <Select
                  values={[]}
                  label={"Select Category"}
                  selectClassName={s.select}
                  labelClassName={s.select__label}
                />
                <Select
                  values={[]}
                  label={"Select Brand"}
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
                <div className={s.search_block}>
                  <Input placeholder={"Enter the Product Code"} />
                  <Button className={cn(s.button_black, s.search_btn)}>
                    Search
                  </Button>
                </div>
                <Button className={cn(s.button_black, s.clean_btn)}>
                  Clean
                </Button>
              </div>
              <div className={s.table__head}>
                <span className={s.table__head__title}>
                  Product Based Sales Statistics
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
                isControl={false}
              />
            </div>,
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
                <div className={s.search_block}>
                  <Input placeholder={"Enter the Product Code"} />
                  <Button className={cn(s.button_black, s.search_btn)}>
                    Search
                  </Button>
                </div>
                <Button className={cn(s.button_black, s.clean_btn)}>
                  Clean
                </Button>
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
                isControl={false}
              />
            </div>,
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
                <Button
                  variant={"outlined"}
                  className={cn(s.clean_btn, s._brand)}
                >
                  Clean
                </Button>
                <Button className={cn(s.button_black, s.search_btn, s._brand)}>
                  Search
                </Button>
              </div>
              <div className={s.table__head}>
                <span className={s.table__head__title}>
                  Brand Based Sales Statistics
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
                isControl={false}
              />
            </div>,
          ]}
        />
      </div>
    </>
  )
}
