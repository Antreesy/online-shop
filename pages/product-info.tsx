import { useState, useEffect } from "react"
import { NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"

import Head from "next/head"
import { BackButton } from "Сomponents"
import { Input, Select } from "UI"

import s from "styles/pages/product-info.module.scss"

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "profile",
        "header",
        "footer",
        "sidebar",
        "modal",
        "product",
        "productInfo",
      ])),
    },
  }
}

const ProductInfo: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeRoute("Product List"))
  }, [])
  const [inputValue, setInputValue] = useState<string>("")

  const { t } = useTranslation("productInfo")

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Order Detail</title>
      </Head>

      <div className={s.container}>
        <div className={s.button_wrapper}>
          <BackButton />
        </div>

        <h3 className={s.heading}>{t("productInformation")}</h3>

        <div className={s.input_wrapper}>
          <Input
            inputClassName={s.input}
            label={t("productName")}
            setValue={setInputValue}
            value={inputValue}
          />
        </div>

        <div className={s.input_wrapper}>
          <div className={s.row}>
            <Input
              inputClassName={s.input}
              label={t("modelCode")}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              inputClassName={s.input}
              label={t("Barcode")}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              inputClassName={s.input}
              label={t("Category")}
              setValue={setInputValue}
              value={inputValue}
            />
          </div>
          <div className={s.row}>
            <Input
              inputClassName={s.input}
              label={t("approvalStatus")}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              inputClassName={s.input}
              label={t("stockCode")}
              setValue={setInputValue}
              value={inputValue}
            />
            <Input
              inputClassName={s.input}
              label={t("Brand")}
              setValue={setInputValue}
              value={inputValue}
            />
          </div>
        </div>

        <div className={s.exclamation}>
          <p className={s.exclamation_caption}>
            {t("Exclamation")}
            <span className={s.exclamation_span_desktop}>({t("text")})</span>
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

          <p className={s.exclamation_span_mobile}>({t("text")})</p>
        </div>

        <div className={s.features}>
          <h3 className={s.heading}>{t("productFeatures")}</h3>

          <div className={s.select_wrapper}>
            <Select label={t("Material")} className={s.select} values={[]} />
            <Select label={t("Form")} className={s.select} values={[]} />
            <Select label={t("Feature")} className={s.select} values={[]} />
          </div>

          <div className={s.select_wrapper}>
            <Select label={t("Size")} className={s.select} values={[]} />
            <Select label={t("Gender")} className={s.select} values={[]} />
            <Select label={t("ageGroup")} className={s.select} values={[]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo
