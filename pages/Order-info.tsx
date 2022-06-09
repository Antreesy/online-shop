import { NextPage } from "next"
import Head from "next/head"

import s from "../styles/pages/orderInfo.module.scss"
import { Breadcrumbs } from "../Сomponents"
import { Button } from "../UI"
import React, { useState } from "react"
import Image from "next/image"
import cardImage from "../public/assets/img/order_card_img.png"
import Link from "next/link"

const OrderInfo: NextPage = () => {
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
            <div className="Customer">
              <span className={s.Customer_Information}>
                Customer Information
              </span>
              <div className={s.Customer_Information_detail}>
                <div className={s.information_detail_text}>
                  <p>Name Surname</p>
                  <p>Address</p>
                  <p>Phone</p>
                  <p>E-Mail</p>
                </div>
                <div className={s.information_detail_text}>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                </div>
                <div className={s.information_detail_span}>
                  <span>Yalçın Topkaya</span>
                  <span>
                    ILONSI AB, Aschebergsgatan 21, 41127, Göteborg
                    info@ilonsi.com
                  </span>
                  <span>0530 555 55 55</span>
                  <span>yalcin.topkaya@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="Order">
              <span className={s.Order_information}>Order Information</span>
              <div className={s.Order_Information_detail}>
                <div className={s.Order_detail_text}>
                  <p>Order Number</p>
                  <p>Order Date</p>
                  <p>Delivery Method</p>
                </div>
                <div className={s.Order_detail_text}>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                </div>
                <div className={s.Order_detail_span}>
                  <span>123456789</span>
                  <span>03.08.2021</span>
                  <span>Standart Teslim</span>
                </div>
              </div>
            </div>
            <div className="Invoice">
              <span className={s.Invoice_information}>Invoice Information</span>

              <div className={s.Invoice_Information_detail}>
                <div className={s.Invoice_detail_text}>
                  <p>Name Surname</p>
                  <p>Address</p>
                  <p>Phone</p>
                  <p>E-Mail</p>
                </div>
                <div className={s.Invoice_detail_text}>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                  <p className={s.colon}>:</p>
                </div>
                <div className={s.Invoice_detail_span}>
                  <span>Yalçın Topkaya</span>
                  <span>
                    ILONSI AB, Aschebergsgatan 21, 41127,
                    Göteborginfo@ilonsi.com
                  </span>
                  <span>0530 555 55 55</span>
                  <span>yalcin.topkaya@gmail.com</span>
                </div>
              </div>
            </div>
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
                              <span>₺100.00</span>
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
                              <span className={s.purple}>₺100.00</span>
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
