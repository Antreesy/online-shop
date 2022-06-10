import { NextPage } from "next"
import Head from "next/head"

import s from "../styles/pages/orderInfo.module.scss"
import { Breadcrumbs } from "../Сomponents"
import {Button, Price} from "../UI"
import React, { useState } from "react"
import Image from "next/image"
import cardImage from "../public/assets/img/order_card_img.png"
import Link from "next/link"
import { OrderInfoItems } from "shared/constants/orderinfoitems"

export type OrderType = {
  CustomerInfo: {
    Surname: string
    Address: string
    Phone: string
    Email: string
    name: string
    address: string
    phone: string
    email: string
  }[]
  OrderInfo: {
    OrderSurname: string
    OrderDate: string
    OrderDeliveryMethod: string
    name: string
    date: string
    method: string
  }[]
}[]

const OrderInfo: NextPage = () => {
  const Colon = () => (
    <>
      <p className={s.colon}>:</p>
      <p className={s.colon}>:</p>
      <p className={s.colon}>:</p>
      <p className={s.colon}>:</p>
    </>
  )
  const ColonForOrder = () => (
    <>
      <p className={s.colon}>:</p>
      <p className={s.colon}>:</p>
      <p className={s.colon}>:</p>
    </>
  )
  const CustomerInfo = ({ labels }: { labels: OrderType }) => (
    <div className={s.customer_information_detail}>
      <div className={s.information_detail_text}>
        {labels.map((label) =>
          label.CustomerInfo.map((item) => {
            return (
              <div>
                <p>{item.Surname}</p>
                <p>{item.Address}</p>
                <p>{item.Phone}</p>
                <p>{item.Email}</p>
              </div>
            )
          }),
        )}
      </div>
      <div className={s.information_detail_text}>
        <Colon />
      </div>
      <div className={s.information_detail_span}>
        {labels.map((info) =>
          info.CustomerInfo.map((arr) => {
            return (
              <div>
                <span>{arr.name}</span>
                <span>{arr.address}</span>
                <span>{arr.phone}</span>
                <span>{arr.email}</span>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
  const OrderInfo = ({ labels }: { labels: OrderType }) => (
    <div className={s.order_information_detail}>
      <div className={s.order_detail_text}>
        {labels.map((label) =>
          label.OrderInfo.map((item) => {
            return (
              <div>
                <p>{item.OrderSurname}</p>
                <p>{item.OrderDate}</p>
                <p>{item.OrderDeliveryMethod}</p>
              </div>
            )
          }),
        )}
      </div>
      <div className={s.order_detail_text}>
        <ColonForOrder />
      </div>
      <div className={s.order_detail_span}>
        {labels.map((label) =>
          label.OrderInfo.map((item) => {
            return (
              <div>
                <span>{item.name}</span>
                <span>{item.date}</span>
                <span>{item.method}</span>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )
  const InvoiceInfo = ({ labels }: { labels: OrderType }) => (
    <div className={s.invoice_information_detail}>
      <div className={s.invoice_detail_text}>
        {labels.map((label) =>
          label.CustomerInfo.map((item) => {
            return (
              <div>
                <p>{item.Surname}</p>
                <p>{item.Address}</p>
                <p>{item.Phone}</p>
                <p>{item.Email}</p>
              </div>
            )
          }),
        )}
      </div>
      <div className={s.invoice_detail_text}>
        <Colon />
      </div>
      <div className={s.invoice_detail_span}>
        {labels.map((info) =>
          info.CustomerInfo.map((arr) => {
            return (
              <div>
                <span>{arr.name}</span>
                <span>{arr.address}</span>
                <span>{arr.phone}</span>
                <span>{arr.email}</span>
              </div>
            )
          }),
        )}
      </div>
    </div>
  )

  const [IsActive, setIsActive] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Order Detail</title>
      </Head>

      <main className={s.main}>
        <div className={s.breadcrumbs_mobile}>
          <Breadcrumbs />
        </div>

        <div className={s.button__back}>
          <Button className={s.button_back} iconLeft="arrow_left">
            <Link href="/">
              <a href="# ">back</a>
            </Link>
          </Button>
        </div>

        <div className={s.content}>
          <div>
            <span className={s.customer_information}>Customer Information</span>
            <CustomerInfo labels={OrderInfoItems} />
            <span className={s.order_information}>Order Information</span>
            <OrderInfo labels={OrderInfoItems} />
            <span className={s.invoice_information}>Invoice Information</span>
            <InvoiceInfo labels={OrderInfoItems} />
          </div>
          <div className={s.line} />
          <div>
            {!IsActive ? (
              <div className={s.Card}>
                <div style={{ display: "flex" }}>
                  <div className={s.img}>
                    <Image src={cardImage} layout="fill" />
                  </div>
                  <div className={s.cardItem}>
                    <div style={{ width: "365px" }}>
                      <p className={s.cardItem_text}>Prada</p>
                      <p>Green zero sleeve women’s dress</p>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div className={s.cardItem_text_detail}>
                            <div>
                              <p>Number</p>
                            </div>
                            <div className={s.cardItem_text_colon}>
                              <p>:</p>
                            </div>
                            <div className={s.spans}>
                              <span>1</span>
                            </div>
                          </div>
                          <div className={s.cardItem_text_details}>
                            <div>
                              <p>Net Price</p>
                            </div>
                            <div className={s.cardItem_text_colon}>
                              <p>:</p>
                            </div>
                            <div className={s.spans}>
                                <Price oldPrice={2030} price={1930} type="order" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className={s.cardItem_text_detail}>
                            <div>
                              <p>VAT %18</p>
                            </div>
                            <div className={s.cardItem_text_colon}>
                              <p>:</p>
                            </div>
                            <div className={s.spans}>
                              <span>1</span>
                            </div>
                          </div>

                          <div className={s.cardItem_text_details}>
                            <div>
                              <p className={s.purple}>TOTAL</p>
                            </div>
                            <div className={s.cardItem_text_colon}>
                              <p>:</p>
                            </div>
                            <div className={s.spans}>
                                <Price oldPrice={2030} price={1930} type="cart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.button_cancel}>
                      <button onClick={() => setIsActive(!IsActive)}>
                        {" "}
                        <span>X</span> cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={s.approve}>
                <p>Are you confirming that your orders are being cancelled?</p>

                <div className={s.button}>
                  <Button className={s.button_purple}>Approve</Button>
                  <Button
                    className={s.button_black}
                    onClick={() => setIsActive(!IsActive)}
                  >
                    Reject
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
export default OrderInfo
