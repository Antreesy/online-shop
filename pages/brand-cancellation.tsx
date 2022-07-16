import { useEffect, useState } from "react"
import cn from "classnames"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"

import Head from "next/head"
import { BackButton, Table } from "Сomponents"
import { Button, Icon, Input, Pagination, Select, Tabs } from "UI"
import useResize from "shared/hooks/useResize"
import { brandCancelTableContent } from "shared/constants/brandTables"

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
          placeholder="Orders Code"
          setValue={setInputValue}
          value={inputValue}
        />
        <Input
          inputClassName={s.input}
          placeholder="Client Name"
          setValue={setInputValue}
          value={inputValue}
        />
        <Input
          inputClassName={s.input}
          placeholder="Cancellation Start Date"
          setValue={setInputValue}
          value={inputValue}
        />
        <Input
          inputClassName={s.input}
          placeholder="Cancellation Order End Date"
          setValue={setInputValue}
          value={inputValue}
        />
        <Button className={cn(s.button, s.button_black)}>
          <Icon type={"close_cross"} />
        </Button>
        <Button className={cn(s.button, s.button_purple)} iconLeft="search">
          {t("common:search")}
        </Button>
        <Button className={cn(s.button, s.button_green)} iconLeft="download">
          {t("excelDownload")}
        </Button>
      </div>

      <div className={s.bottom_content_header}>
        <Select
          className={s.select_bottom}
          values={[{ title: "Order date", value: 1 }]}
          initValue={1}
        />
        <Select
          className={s.select_bottom}
          values={[{ title: "Old to New", value: 1 }]}
          initValue={1}
        />
        <p>{t("onEveryPage")}</p>
        <Select
          className={s.select_bottom}
          placeholder={"20 product"}
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
        headers={brandCancelTableContent.headers}
        innerRows={brandCancelTableContent.rows}
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
            labels={["All Cancellation", "Customer Canceled", "Canceled"]}
            values={[
              <TabContent key={"All Cancellation"} />,
              <TabContent key={"Customer Canceled"} />,
              <TabContent key={"Canceled"} />,
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default BrandProducts
