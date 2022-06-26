import type { NextPage } from "next"

import Head from "next/head"
import Link from "next/link"

import s from "styles/pages/index.module.scss"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Homepage</title>
      </Head>
      <div className={s.main}>
        <div className={s.flex_row}>
          <div className={s.flex_column}>
            <h3 className={s.description}>Common:</h3>
            <Link href="/landing-page">
              <a className={s.title__link}>Landing page</a>
            </Link>
            <Link href="/login">
              <a className={s.title__link}>Login page</a>
            </Link>
            <Link href="/products-page">
              <a className={s.title__link}>Product List</a>
            </Link>
            <Link href="/product">
              <a className={s.title__link}>Specific Product</a>
            </Link>
            <Link href="/some-wrong-link">
              <a className={s.title__link}>404 page</a>
            </Link>
            <Link href="/components-example">
              <a className={s.title__link}>Сomponents examples</a>
            </Link>
            <Link href="/modals-example">
              <a className={s.title__link}>Modals example</a>
            </Link>
          </div>

          <div className={s.flex_column}>
            <h3 className={s.description}>Customer:</h3>
            <Link href="/influencers">
              <a className={s.title__link}>Influencers</a>
            </Link>
            <Link href="/order-cart">
              <a className={s.title__link}>Order - cart</a>
            </Link>
            <Link href="/order-page">
              <a className={s.title__link}>Order - payment</a>
            </Link>
            <Link href="/order-success">
              <a className={s.title__link}>Order - success page</a>
            </Link>
          </div>

          <div className={s.flex_column}>
            <h3 className={s.description}>Influencer:</h3>

            <Link href="/register">
              <a className={s.title__link}>
                Register page (for brands / influencers)
              </a>
            </Link>
            <Link href="/influencer-profile">
              <a className={s.title__link}>Influencer profile</a>
            </Link>
            <Link href="/brands">
              <a className={s.title__link}>Brands List</a>
            </Link>
            <Link href="/brands/1">
              <a className={s.title__link}>Specific Brand</a>
            </Link>
            <Link href="/account/dashboard">
              <a className={s.title__link}>Dashboard (in account)</a>
            </Link>
            <span className={s.title__miss}>Dashboard (other)</span>
          </div>

          <div className={s.flex_column}>
            <h3 className={s.description}>Brand:</h3>
            <Link href="/brand-landing">
              <a className={s.title__link}>Brand homepage</a>
            </Link>
            <Link href="/account/add-product">
              <a className={s.title__link}>Add product (in account)</a>
            </Link>
            <Link href="/visual-operations">
              <a className={s.title__link}>Visual operations</a>
            </Link>
            <Link href="/brand-information">
              <a className={s.title__link}>Brand Information</a>
            </Link>
            <Link href="/order-info">
              <a className={s.title__link}>Order Detail</a>
            </Link>
            <Link href="/product-info">
              <a className={s.title__link}>Product Detail</a>
            </Link>
            <Link href="/brand-products">
              <a className={s.title__link}>Brand Product List</a>
            </Link>
            <Link href="/brand-orders-operations">
              <a className={s.title__link}>Brand Order Operations</a>
            </Link>
            <Link href="/brand-orders-transactions">
              <a className={s.title__link}>Brand Order Transactions</a>
            </Link>
            <Link href="/brand-cancellation">
              <a className={s.title__link}>Brand Cancellation</a>
            </Link>
          </div>

          <div className={s.flex_column}>
            <h3 className={s.description}>Account:</h3>

            <Link href="/account/address">
              <a className={s.title__link}>Address</a>
            </Link>
            <Link href="/account/favorites">
              <a className={s.title__link}>Favorites</a>
            </Link>
            <Link href="/account/help">
              <a className={s.title__link}>Help</a>
            </Link>
            <Link href="/account/notifications">
              <a className={s.title__link}>Notifications</a>
            </Link>
            <Link href="/account/orders">
              <a className={s.title__link}>Orders</a>
            </Link>
            <Link href="/account/profile">
              <a className={s.title__link}>Profile</a>
            </Link>
            <Link href="/account/payment">
              <a className={s.title__link}>Payment</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
