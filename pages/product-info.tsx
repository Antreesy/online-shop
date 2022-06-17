import { useState } from "react"
import { NextPage } from "next"

import Head from "next/head"
import { BackButton } from "Сomponents"
import { Input, Select } from "UI"

import s from "styles/pages/productInfo.module.scss"

const ProductInfo: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("")

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Order Detail</title>
      </Head>

      <div className={s.container}>
        <div className={s.button_wrapper}>
          <BackButton />
        </div>

        <h3 className={s.heading}>Product Information</h3>

        <div className={s.input_wrapper}>
          <Input
            className={s.input}
            label={"Product Name"}
            setValue={setInputValue}
            value={inputValue}
          />
        </div>

        <div className={s.input_wrapper}>
          <div className={s.row}>
            <Input
              className={s.input}
              label={"Model Code"}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              label={"Barcode"}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              label={"Category"}
              setValue={setInputValue}
              value={inputValue}
            />
          </div>
          <div className={s.row}>
            <Input
              className={s.input}
              label={"Approval Status"}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              label={"Stock Code"}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              className={s.input}
              label={"Brand"}
              setValue={setInputValue}
              value={inputValue}
            />
          </div>
        </div>

        <div className={s.exclamation}>
          <p className={s.exclamation_caption}>
            Exclamation{" "}
            <span className={s.exclamation_span_desktop}>
              (If you enter html content in this field, it will be transferred
              to the product card in an edited form.)
            </span>
          </p>

          <p className={s.exclamation_card}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            aspernatur consequuntur exercitationem facilis, impedit ipsam minus
            mollitia necessitatibus neque, nobis odit optio ratione sed vero
            vitae. Beatae dolorem molestias sequi! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Alias, aspernatur consequuntur
            exercitationem facilis, impedit ipsam minus mollitia necessitatibus
            neque, nobis odit optio ratione sed vero vitae. Beatae dolorem
            molestias sequi!
          </p>

          <p className={s.exclamation_span_mobile}>
            (If you enter html content in this field, it will be transferred to
            the product card in an edited form.)
          </p>
        </div>

        <div className={s.features}>
          <h3 className={s.heading}>Product Features</h3>

          <div className={s.select_wrapper}>
            <Select label="Material" className={s.select} values={[]} />
            <Select label="Form" className={s.select} values={[]} />
            <Select label="Feature" className={s.select} values={[]} />
          </div>

          <div className={s.select_wrapper}>
            <Select label="Size" className={s.select} values={[]} />
            <Select label="Gender" className={s.select} values={[]} />
            <Select label="Age Group" className={s.select} values={[]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo
