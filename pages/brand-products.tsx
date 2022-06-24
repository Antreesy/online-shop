import React, { useState } from "react"

import s from "styles/pages/brand-products.module.scss"
import Head from "next/head"
import { BackButton, Table } from "../Сomponents"
import { Button, Icon, Input, Pagination, Select, Tabs } from "../UI"
import Image from "next/image"
import tabImage from "public/assets/img/order_card_img.png"
import dress from "../public/assets/img/Knitted_dress.png"

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
            className={s.notification_tabs}
            variant="spaces"
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
            <div className={s.inputs}>
              <Input
                placeholder="Product Code"
                setValue={setInputValue}
                value={inputValue}
              />
              <Input
                placeholder="Product Name"
                setValue={setInputValue}
                value={inputValue}
              />
            </div>
            <div className={s.selects}>
              <Select
                className={s.select}
                values={[
                  { title: "one", value: 1 },
                  { title: "two", value: 2 },
                  { title: "three", value: 3 },
                ]}
                onChange={() => {
                  return
                }}
              />
              <Select
                className={s.select}
                values={[
                  { title: "one", value: 1 },
                  { title: "two", value: 2 },
                  { title: "three", value: 3 },
                ]}
                onChange={() => {
                  return
                }}
              />
            </div>
            <div className={s.buttons}>
              <div>
                <Button className={s.button_purple} iconLeft="search">
                  Search
                </Button>
              </div>
              <div>
                <Button className={s.button_red} iconLeft="trash_can">
                  Clean
                </Button>
              </div>
              <div>
                <Button className={s.button_green} iconLeft="download">
                  Excel Download
                </Button>
              </div>
            </div>
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
            headers={[
              { name: "Product Image" },
              { name: "Product Name" },
              { name: "Product Code" },
              { name: "Brand" },
              { name: "Commission" },
              { name: "Price" },
              { name: "Stock" },
              { name: "Status" },
              { name: "Detail" },
            ]}
            innerRows={[
              [
                {
                  value: (
                    <div>
                      <Image src={dress} width={46} height={83} />
                    </div>
                  ),
                  alignCenter: true,
                },
                { value: "Black Printed Long Sleeve Midi Dress" },
                { value: "BFNSKBGDHKSF" },
                { value: "Yves Saint L" },
                { value: "%25" },
                { value: "$213" },
                { value: 32132 },
                { value: "Not available" },
                {
                  value: <Icon type={"exclamation"} />,
                  alignCenter: true,
                },
              ],
              [
                {
                  value: (
                    <div>
                      <Image src={dress} width={46} height={83} />
                    </div>
                  ),
                  alignCenter: true,
                },
                { value: "Black Printed Long Sleeve Midi Dress" },
                { value: "BFNSKBGDHKSF" },
                { value: "Yves Saint L" },
                { value: "%25" },
                { value: "$213" },
                { value: 32132 },
                { value: "Not available" },
                {
                  value: <Icon type={"exclamation"} />,
                  alignCenter: true,
                },
              ],
              [
                {
                  value: (
                    <div>
                      <Image src={dress} width={46} height={83} />
                    </div>
                  ),
                  alignCenter: true,
                },
                { value: "Black Printed Long Sleeve Midi Dress" },
                { value: "BFNSKBGDHKSF" },
                { value: "Yves Saint L" },
                { value: "%25" },
                { value: "$213" },
                { value: 32132 },
                { value: "Not available" },
                {
                  value: <Icon type={"exclamation"} />,
                  alignCenter: true,
                },
              ],
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default BrandProducts
