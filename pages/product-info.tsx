import { useState } from "react"
import { NextPage } from "next"

import Head from "next/head"
import Link from "next/link"
import { Button, Input, Select } from "../UI"

import { countriesForSelect } from "../shared/constants/countries"

import s from "../styles/pages/productInfo.module.scss";

const ProductInfo: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("")
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Order Detail</title>
      </Head>

      <div className={s.button__back}>
        <Button className={s.button_back} iconLeft="arrow_left">
          <Link href="/">back</Link>
        </Button>
      </div>

      <div className={s.container}>
        <h1>Product Information</h1>

        <div className={s.product_name}>
          <p>Product Name</p>
          <Input setValue={setInputValue} value={inputValue} />
        </div>

        <div className={s.product_info}>
          <div>
            <p>Model Code</p>
            <Input setValue={setInputValue} value={inputValue} />
          </div>
          <div>
            <p>Barcode</p>
            <Input setValue={setInputValue} value={inputValue} />
          </div>
          <div>
            <p>Category</p>
            <Input setValue={setInputValue} value={inputValue} />
          </div>
          <div>
            <p>Approval Status</p>
            <Input setValue={setInputValue} value={inputValue} />
          </div>
          <div>
            <p>Stock Code</p>
            <Input setValue={setInputValue} value={inputValue} />
          </div>
          <div>
            <p>Brand</p>
            <Input setValue={setInputValue} value={inputValue} />
          </div>
        </div>

        <div className={s.product_Exclamation}>
          <div>
            <p>Exclamation</p>{" "}
            <span>
              (If you enter html content in this field, it will be transferred
              to the product card in an edited form.)
            </span>
          </div>
          <div className={s.product_card}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              aspernatur consequuntur exercitationem facilis, impedit ipsam
              minus mollitia necessitatibus neque, nobis odit optio ratione sed
              vero vitae. Beatae dolorem molestias sequi! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Alias, aspernatur consequuntur
              exercitationem facilis, impedit ipsam minus mollitia
              necessitatibus neque, nobis odit optio ratione sed vero vitae.
              Beatae dolorem molestias sequi!
            </p>
          </div>
        </div>
        <div className={s.Product_Features}>
          <span>Product Features</span>

          <div className={s.Product_Features_info}>
            <div className={s.Product_Features_info_select}>
              <div>
                <p>Material</p>
                <Select
                  className={s.select}
                  values={countriesForSelect()}
                  onChange={() => {
                    return
                  }}
                />
              </div>
              <div>
                <p>Form</p>
                <Select
                  className={s.select}
                  values={countriesForSelect()}
                  onChange={() => {
                    return
                  }}
                />
              </div>
              <div>
                <p>Feature</p>
                <Select
                  className={s.select}
                  values={countriesForSelect()}
                  onChange={() => {
                    return
                  }}
                />
              </div>
            </div>

            <div className={s.Product_Features_info_select}>
              <div>
                <p>Size</p>
                <Select
                  className={s.select}
                  values={countriesForSelect()}
                  onChange={() => {
                    return
                  }}
                />
              </div>
              <div>
                <p>Gender</p>
                <Select
                  className={s.select}
                  placeholder="Country*"
                  values={countriesForSelect()}
                  onChange={() => {
                    return
                  }}
                />
              </div>
              <div>
                <p>Age Group</p>
                <Select
                  className={s.select}
                  values={countriesForSelect()}
                  onChange={() => {
                    return
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductInfo
