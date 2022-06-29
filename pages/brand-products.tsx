import { useState } from "react"
import cn from "classnames"
import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import { BackButton, Table } from "Сomponents"
import { Button, Input, Pagination, Select, Tabs } from "UI"

import s from "styles/pages/brand-products.module.scss"
import { brandProductsTableContent } from "shared/constants/brandTables"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "brandProduct",
      ])),
    },
  }
}

const BrandProducts: React.FC = () => {
  const { t } = useTranslation(["brandProduct", "common"])
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
              t("allProducts"),
              t("onSale"),
              t("soldOut"),
              t("whatYouNeedToRevise"),
              t("notAvailable"),
            ]}
            values={[]}
          />
          <div className={s.content__header}>
            <Input
              className={s.input}
              placeholder={t("productCode")}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              placeholder={t("productName")}
              setValue={setInputValue}
              value={inputValue}
            />
            <Select
              placeholder={t("category")}
              className={s.select}
              values={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
            />
            <Select
              placeholder={t("sortBy")}
              className={s.select}
              values={[
                { title: "one", value: 1 },
                { title: "two", value: 2 },
                { title: "three", value: 3 },
              ]}
            />
            <Button className={cn(s.button, s.button_purple)} iconLeft="search">
              {t("common:search")}
            </Button>
            <Button className={cn(s.button, s.button_red)} iconLeft="trash_can">
              {t("common:clean")}
            </Button>
            <Button
              className={cn(s.button, s.button_green)}
              iconLeft="download"
            >
              {t("excelDownload")}
            </Button>
          </div>

          <div className={s.bottom_content_header}>
            <div>
              <p>{t("onEveryPage")}</p>
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
            headers={brandProductsTableContent.headers.map((header) => {
              return { name: t(header.name) }
            })}
            innerRows={brandProductsTableContent.rows}
          />
        </div>
      </div>
    </>
  )
}

export default BrandProducts
