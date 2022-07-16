import { useState, useEffect } from "react"
import cn from "classnames"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"

import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"

import { BackButton, Table } from "Сomponents"
import { Button, Input, Pagination, Select, Tabs } from "UI"
import useResize from "shared/hooks/useResize"
import { brandProductsTableContent } from "shared/constants/brandTables"

import s from "styles/pages/brand-products.module.scss"

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
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeRoute("Product List"))
  }, [])

  const width = useResize()
  const { t } = useTranslation(["brandProduct", "common"])
  const [inputValue, setInputValue] = useState<string>("")

  const TabContent = () => (
    <>
      <div className={s.content__header}>
        <Input
          inputClassName={s.input}
          placeholder={t("productCode")}
          setValue={setInputValue}
          value={inputValue}
        />
        <Input
          inputClassName={s.input}
          placeholder={t("productName")}
          setValue={setInputValue}
          value={inputValue}
        />
        <Select
          placeholder={t("category")}
          className={s.select}
          values={[
            { title: "clothes", value: 1 },
            { title: "shoes", value: 2 },
            { title: "hats", value: 3 },
          ]}
        />
        <Select
          placeholder={t("sortBy")}
          className={s.select}
          values={[
            { title: "brand", value: 1 },
            { title: "price", value: 2 },
            { title: "name", value: 3 },
          ]}
        />
        <Button className={cn(s.button, s.button_purple)} iconLeft="search">
          {t("common:search")}
        </Button>
        <Button className={cn(s.button, s.button_red)} iconLeft="trash_can">
          {t("common:clean")}
        </Button>
        <Button className={cn(s.button, s.button_green)} iconLeft="download">
          {t("excelDownload")}
        </Button>
      </div>

      <div className={s.bottom_content_header}>
        <p>{t("onEveryPage")}</p>
        <Select
          className={s.select_bottom}
          values={[
            { title: "10 products", value: 1 },
            { title: "20 products", value: 2 },
            { title: "50 products", value: 3 },
          ]}
          initValue={2}
        />
        <Pagination className={s.pagination} pagesCount={5} />
      </div>

      <Table
        headers={brandProductsTableContent.headers.map((header) => {
          return { name: t(header.name) }
        })}
        innerRows={brandProductsTableContent.rows}
      />
    </>
  )

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
            variant={width > 1024 ? "no_border" : "spaces"}
            labels={[
              t("allProducts"),
              t("onSale"),
              t("soldOut"),
              t("whatYouNeedToRevise"),
              t("notAvailable"),
            ]}
            values={[
              <TabContent key={"allProducts"} />,
              <TabContent key={"onSale"} />,
              <TabContent key={"soldOut"} />,
              <TabContent key={"whatYouNeedToRevise"} />,
              <TabContent key={"notAvailable"} />,
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default BrandProducts
