import type { NextPage } from "next"
import Head from "next/head"

import { Card, Icon } from "UI"
import { Header, SectionHeader } from "Сomponents"
import { Footer } from "Сomponents"
import picForBrands from "public/assets/img/pic_for_brands.png"
import picForInfluencers from "public/assets/img/pic_for_influencers.png"

import s from "styles/pages/OrderSuccess.module.scss"
import { footerNav } from "shared/constants/footernav"

const OrderSuccess: NextPage = () => {
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
            <h1 className={s.title}>
              Your Order No. XXX has been successfully completed.
            </h1>
            <p className={s.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet ligula sit amet ex pulvinar laoreet eu in odio. Nulla
              cursus condimentum augue accumsan placerat. Etiam mattis sit amet
              elit et dignissim. Vestibulum vel convallis diam. Vivamus rutrum
              diam a orci vestibulum vehicula. Nulla facilisi. Nam bibendum sit
              amet velit sit amet luctus
            </p>
          </div>

          <SectionHeader
            className={s.section}
            title="Order Information & Details"
          />
          <div className={s.order}>
            <div className={s.orderTitle}>
              <span>Order number: </span>
              47383756
            </div>
            <table className={s.table}>
              <div>
                <tr>
                  <td>Order date</td>
                  <td>12.12.2021</td>
                </tr>
                <tr>
                  <td>Situation</td>
                  <td>New order</td>
                </tr>
                <tr>
                  <td>Payment method</td>
                  <td>Credit card</td>
                </tr>
              </div>
              <div>
                <tr>
                  <td>Sending date</td>
                  <td>17.12.2021</td>
                </tr>
                <tr>
                  <td>Shopung number</td>
                  <td>XYZ123</td>
                </tr>
                <tr>
                  <td>Helpline</td>
                  <td>0850 222 34 45</td>
                </tr>
              </div>
            </table>
          </div>

          <div className={s.cards}>
            <Card
              className={s.card}
              imageSrc="/../public/assets/img/picture_2.png"
              title="Gizem Sancak"
              buttonTitle="Go To Store"
              isButtonHidden
            />
            <Card
              className={s.card}
              imageSrc="/../public/assets/img/picture_2.png"
              title="Gizem Sancak"
              buttonTitle="Go To Store"
              isButtonHidden
            />
            <Card
              className={s.card}
              imageSrc="/../public/assets/img/picture_2.png"
              title="Gizem Sancak"
              buttonTitle="Go To Store"
              isButtonHidden
            />
          </div>
        </div>
      </div>

      <Footer links={footerNav} />
    </>
  )
}

export default OrderSuccess
