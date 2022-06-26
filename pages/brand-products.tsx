import { useState } from "react"
import cn from "classnames"
import Head from "next/head"

import { BackButton, Table } from "Сomponents"
import { Button, Input, Pagination, Select, Tabs } from "UI"

import s from "styles/pages/brand-products.module.scss"
import { brandProductsTableContent } from "shared/constants/brandTables"

const BrandProducts: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brand Products</title>
      </Head>

      <div className={s.container}>
        <div className={s.button__wrapper}>
          <BackButton />
        </div>

        <div className={s.content}>
          <Tabs
            className={s.tabs}
            variant="no_border"
            labels={[
              "All Products",
              "On Sale",
              "Sold Out",
              "What You Need to Revise",
              "Not Available",
            ]}
            values={[]}
          />
          <div className={s.content__header}>
            <Input
              className={s.input}
              placeholder="Product Code"
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              placeholder="Product Name"
              setValue={setInputValue}
              value={inputValue}
            />
            <Select
              placeholder="Category"
              className={s.select}
              values={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
            />
            <Select
              placeholder="Sort by"
              className={s.select}
              values={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
            />
            <Button className={cn(s.button, s.button_purple)} iconLeft="search">
              Search
            </Button>
            <Button className={cn(s.button, s.button_red)} iconLeft="trash_can">
              Clean
            </Button>
            <Button
              className={cn(s.button, s.button_green)}
              iconLeft="download"
            >
              Excel Download
            </Button>
          </div>

          <div className={s.bottom_content_header}>
            <div>
              <p>On Every Page</p>
            </div>
            <Select
              className={s.bottom_content_select}
              values={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
              onChange={() => {
                return
              }}
            />
            <Pagination className={s.pagination} pagesCount={10} />
          </div>

          <Table
            headers={brandProductsTableContent.headers}
            innerRows={brandProductsTableContent.rows}
          />
        </div>
      </div>
    </>
  )
}

export default BrandProducts
