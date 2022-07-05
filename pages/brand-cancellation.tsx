import { useEffect, useState } from "react"
import cn from "classnames"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"

import Head from "next/head"
import { BackButton, Table } from "Сomponents"
import { Button, Icon, Input, ModalWindow, Pagination, Select, Tabs } from "UI"
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
      ])),
    },
  }
}

const BrandProducts: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeRoute("Product List"))
  }, [])

  const [inputValue, setInputValue] = useState<string>("")
  const [modal, setModal] = useState<boolean>(false)
  let isMobile

  useEffect(() => {
    isMobile = window.screen.width < 1024
  }, [])

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
            labels={["All Cancellation", "Customer Canceled", "Canceled"]}
            values={[]}
          />

          <div className={cn(s.content__header, s._brand_orders_mobile)}>
            <div className={s.top_btn_mobile}>
              <Select
                placeholder={"Order date"}
                values={[{ title: "Order date", value: 1 }]}
                onChange={() => {
                  return
                }}
              />
              <Input
                className={s.input}
                placeholder="Client Name"
                setValue={setInputValue}
                value={inputValue}
              />
            </div>

            <div className={s.bot_btn_mobile}>
              <Button
                className={cn(s.button, s.button_purple)}
                iconLeft="search"
              >
                Search
              </Button>
              <Button
                className={cn(s.button, s.button_green)}
                iconLeft="download"
              >
                Excel Download
              </Button>
            </div>
          </div>

          <div className={cn(s.content__header, s._brand_orders)}>
            <Input
              className={s.input}
              placeholder="Orders Code"
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              placeholder="Client Name"
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              placeholder="Cancellation Start Date"
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              placeholder="Cancellation Order End Date"
              setValue={setInputValue}
              value={inputValue}
            />
            <Button className={cn(s.button, s.button_black)}>
              <Icon type={"close_cross"} />
            </Button>
            <Button className={cn(s.button, s.button_purple)} iconLeft="search">
              Search
            </Button>
            <Button
              className={cn(s.button, s.button_green)}
              iconLeft="download"
            >
              Excel Download
            </Button>
          </div>

          <div className={cn(s.bottom_content_header, s._brand_orders)}>
            <Select
              placeholder={"Order date"}
              values={[{ title: "Order date", value: 1 }]}
              onChange={() => {
                return
              }}
            />
            <Select
              placeholder={"Old to New"}
              values={[{ title: "Old to New", value: 1 }]}
              onChange={() => {
                return
              }}
            />
            <div>
              <p>On Every Page</p>
            </div>
            <Select
              placeholder={"20 product"}
              values={[{ title: "20 product", value: 1 }]}
              onChange={() => {
                return
              }}
            />
            <Pagination className={s.pagination} pagesCount={10} />
          </div>

          <div
            className={cn(s.bottom_content_header, s._brand_orders_mobile_bot)}
          >
            <Select
              placeholder={"20 product"}
              values={[{ title: "20 product", value: 1 }]}
              onChange={() => {
                return
              }}
            />
            <Select
              placeholder={"Order date"}
              values={[{ title: "Order date", value: 1 }]}
              onChange={() => {
                return
              }}
            />
            <Select
              placeholder={"Old to New"}
              values={[{ title: "Old to New", value: 1 }]}
              onChange={() => {
                return
              }}
            />
          </div>

          <Table
            headers={brandCancelTableContent.headers}
            innerRows={brandCancelTableContent.rows}
          />
        </div>
      </div>
      <ModalWindow
        isOpen={modal}
        onClose={() => {
          setModal(false)
        }}
      >
        <div className={s.modal}>
          <p className={s.modal__title}>
            Do you approve your request to cancel the order? If you want to
            continue the transaction, please select your reason for
            cancellation.
          </p>
          <Select
            selectClassName={s.modal_select}
            initValue={1}
            values={[{ title: "Body Incompatibility", value: 1 }]}
            onChange={() => {
              return
            }}
          />
          <div className={s.modal__btns}>
            <Button variant={"outlined"}>Cancel Order</Button>
            <Button>Refuse</Button>
          </div>
        </div>
      </ModalWindow>
    </>
  )
}

export default BrandProducts
