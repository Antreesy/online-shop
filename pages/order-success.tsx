import type { NextPage } from "next"
import Head from "next/head"

import { footerNav } from "shared/constants/footernav"
import { orderSuccess } from "shared/constants/order-success"
import { Card, Icon } from "UI"
import { Header, SectionHeader } from "Сomponents"
import { Footer } from "Сomponents"

import s from "styles/pages/OrderSuccess.module.scss"

const OrderSuccess: NextPage = () => {
  const {
    title,
    textContent,
    order: {
      orderNumber,
      orderDate,
      situation,
      paymentMethod,
      sendingDate,
      shopingNumber,
      helpline,
    },
    influencerRecomendations,
  } = orderSuccess

  return (
    <>
      <Head>
        <title>Order Success Page</title>
      </Head>

      <Header />

      <div className={s.main}>
        <div className={s.container}>
          <Icon className={s.icon} type="mark" wrapped />
          <div className={s.textContent}>
            <h1 className={s.title}>{title}</h1>
            <p className={s.description}>{textContent}</p>
          </div>

          <SectionHeader
            className={s.section}
            title="Order Information & Details"
          />
          <div className={s.order}>
            <div className={s.orderTitle}>
              <span>Order number: </span>
              {orderNumber}
            </div>
            <table className={s.table}>
              <div>
                <tr>
                  <td>Order date</td>
                  <td>{orderDate}</td>
                </tr>
                <tr>
                  <td>Situation</td>
                  <td>{situation}</td>
                </tr>
                <tr>
                  <td>Payment method</td>
                  <td>{paymentMethod}</td>
                </tr>
              </div>
              <div>
                <tr>
                  <td>Sending date</td>
                  <td>{sendingDate}</td>
                </tr>
                <tr>
                  <td>Shoping number</td>
                  <td>{shopingNumber}</td>
                </tr>
                <tr>
                  <td>Helpline</td>
                  <td>{helpline}</td>
                </tr>
              </div>
            </table>
          </div>

          <div className={s.cards}>
            {influencerRecomendations.map(({ id, title }) => {
              return (
                <Card
                  key={id}
                  className={s.card}
                  imageSrc="/../public/assets/img/picture_2.png"
                  title={title}
                  buttonTitle="Go To Store"
                  isButtonHidden
                />
              )
            })}
          </div>
        </div>
      </div>

      <Footer links={footerNav} />
    </>
  )
}

export default OrderSuccess
