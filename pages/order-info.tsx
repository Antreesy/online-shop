import { useState } from "react"
import { NextPage } from "next"

import Head from "next/head"
import Image from "next/image"
import { BackButton } from "Сomponents"
import { Button, Icon, Price } from "../UI"

import cardImage from "../public/assets/img/order_card_img.png"
import {
  customerInfo,
  orderInfo,
  invoiceInfo,
} from "../shared/constants/orderinfoitems"

import s from "../styles/pages/orderInfo.module.scss"

export interface LabelInfo {
  label: string
  content: string
}

interface OrderInfoProps {
  customer: LabelInfo
  order: LabelInfo
}

const OrderInfoPage: NextPage<OrderInfoProps> = () => {
  const [IsActive, setIsActive] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Order Detail</title>
      </Head>

      <div className={s.container}>
        <div className={s.button_wrapper}>
          <BackButton />
        </div>

        <div className={s.content}>
          <div className={s.content_info}>
            <h3 className={s.heading}>Customer Information</h3>
            <div className={s.labels}>
              {customerInfo.length
                ? customerInfo.map((item, index) => (
                    <div key={index} className={s.label_wrapper}>
                      <p>{item.label}</p>
                      <p>:</p>
                      <p>{item.content}</p>
                    </div>
                  ))
                : null}
            </div>

            <h3 className={s.heading}>Order Information</h3>
            <div className={s.labels}>
              {orderInfo.length
                ? orderInfo.map((item, index) => (
                    <div key={index} className={s.label_wrapper}>
                      <p>{item.label}</p>
                      <p>:</p>
                      <p>{item.content}</p>
                    </div>
                  ))
                : null}
            </div>

            <h3 className={s.heading}>Invoice Information</h3>
            <div className={s.labels}>
              {invoiceInfo.length
                ? invoiceInfo.map((item, index) => (
                    <div key={index} className={s.label_wrapper}>
                      <p>{item.label}</p>
                      <p>:</p>
                      <p>{item.content}</p>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className={s.divider} />

          <div className={s.card_wrapper}>
            <div className={s.card}>
              <div className={s.image}>
                <Image src={cardImage} layout="fill" />
              </div>

              <div className={s.card_content}>
                <div className={s.title_wrapper}>
                  <p className={s.title}>Prada</p>
                  <div
                    className={s.button}
                    onClick={() => setIsActive(!IsActive)}
                  >
                    <Icon className={s.icon} type="close_cross" wrapped />
                    Cancel
                  </div>
                </div>
                <p className={s.card_description}>
                  Green zero sleeve women’s dress
                </p>

                <div className={s.price_wrapper}>
                  <div className={s.group}>
                    <div className={s.row}>
                      <p>Number</p>
                      <p>:</p>
                      <p>1</p>
                    </div>

                    <div className={s.row}>
                      <p>Net Price</p>
                      <p>:</p>
                      <Price oldPrice={2030} price={1930} type="order" />
                    </div>
                  </div>

                  <div className={s.group}>
                    <div className={s.row}>
                      <p>VAT %18</p>
                      <p>:</p>
                      <p>1</p>
                    </div>

                    <div className={s.row}>
                      <p className={s.total}>TOTAL</p>
                      <p className={s.total}>:</p>
                      <Price oldPrice={2030} price={1930} type="cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {IsActive && (
              <div className={s.approve}>
                <p className={s.approve_text}>
                  Are you confirming that your orders are being cancelled?
                </p>

                <div className={s.button_wrapper}>
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
      </div>
    </>
  )
}
export default OrderInfoPage
