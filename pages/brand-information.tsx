import { useEffect } from "react"
import cn from "classnames"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useAppDispatch } from "store/hooks"
import { changeRoute } from "store/slices/routeSlice"
import { NextPage } from "next"

import Head from "next/head"
import Link from "next/link"
import { Controller, useForm } from "react-hook-form"
import SimpleBar from "simplebar-react"
import { BackButton } from "Сomponents"
import { Button, FileUpload, Icon, Input } from "UI"

import s from "styles/pages/brand-information.module.scss"

interface BrandsType {
  brandName: string
  name: string
  sellerId: string
  number: string
  taxAdmin: string
  kepAddress: string
  taxNumber: string
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "app",
        "common",
        "header",
        "footer",
        "brandInformation",
      ])),
    },
  }
}

const brandInformation: NextPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeRoute("Product List"))
  }, [])

  const { handleSubmit, control } = useForm<BrandsType>({
    criteriaMode: "all",
    defaultValues: {
      brandName: "",
      name: "",
      sellerId: "",
      number: "",
      taxAdmin: "",
      kepAddress: "",
      taxNumber: "",
    },
  })
  const { t } = useTranslation(["brandInformation", "common"])
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brand information</title>
      </Head>

      <div className={s.container}>
        <nav className={s.nav}>
          <SimpleBar className={s.scrollbar}>
            <ul>
              <li>
                <Link href={"/account/add-product"}>{t("addProduct")}</Link>
              </li>
              <li>
                <Link href={"/brand-information"}>{t("brandInformation")}</Link>
              </li>
              <li>
                <Link href={"/brand-products"}>{t("allProducts")}</Link>
              </li>
              <li>
                <Link href={"/brand-cancellation"}>
                  {t("allCancellations")}
                </Link>
              </li>
              <li>
                <Link href={"/brand-products"}>{t("onSale")}</Link>
              </li>
              <li>
                <Link href={"/visual-operations"}>
                  {t("brandVisualOperations")}
                </Link>
              </li>
            </ul>
          </SimpleBar>
        </nav>

        <div className={s.back_button}>
          <BackButton />
        </div>
        <h1 className={s.heading}>{t("brandInformations")}</h1>

        <div className={s.brandInfo}>
          <div className={s.brandItem}>
            <div className={s.iconWrapper}>
              <Icon type="brand_name" />
            </div>
            <div className={s.textBlock}>
              <p className={s.brandName}>{t("brandName")}:</p>
              <p className={s.description}>{"Saint Laurent"}</p>
            </div>
          </div>
          <div className={s.brandDisplay}>
            <div className={s.iconWrapper}>
              <Icon type="brand_display_name" />
            </div>
            <div className={s.textBlock}>
              <p className={s.brandName}>{t("brandDisplayName")}:</p>
              <p className={s.description}> {"Saint Laurent"}</p>
            </div>
          </div>
        </div>

        <div className={s.brandUploads}>
          <div className={s.uploadLogo}>
            <p>{t("brandLogo")}:</p>
            <div className={s.uploader}>
              <FileUpload
                title={t("common:imageUpload.selectNewImage")}
                setValue={() => console.log("")}
                className={s.fileUploader}
              />
            </div>
            <Button variant="text" className={s.brandBlackBtn}>
              {t("common:load")}
            </Button>
          </div>
          <div className={s.uploadBanner}>
            <p>{t("brandBanner")}:</p>
            <div className={s.uploader}>
              <FileUpload
                title={t("common:imageUpload.selectNewImage")}
                setValue={() => console.log("")}
                className={s.fileUploader}
              />
            </div>
            <Button variant="text" className={s.brandBlackBtn}>
              {t("common:load")}
            </Button>
          </div>
        </div>
        <h1>{t("companyInformations")}</h1>
      </div>

      <div className={s.formSection}>
        <form className={s.container}>
          <div className={s.firstLineInputs}>
            <Controller
              name={"brandName"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("brandName")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("brandName")}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"name"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("currentTitle")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("currentTitle")}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"sellerId"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("sellerID")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("sellerID")}
                  className={s.input}
                />
              )}
            />
          </div>
          <div className={s.secondLineInputs}>
            <Controller
              name={"number"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("mersisNo")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("mersisNo")}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"taxAdmin"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("taxAdministration")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("taxAdministration")}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"kepAddress"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("KEPAddress")}
                  setValue={onChange}
                  value={value}
                  placeholder={t("KEPAddress")}
                  className={s.input}
                />
              )}
            />
          </div>
          <Controller
            name={"name"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={t("taxNumber")}
                setValue={onChange}
                value={value}
                placeholder={t("taxNumber")}
                className={s.inputTextArea}
              />
            )}
          />
          <Button
            variant="text"
            className={cn(s.brandBlackBtn, s.saveBtn)}
            onClick={onSubmit}
          >
            {t("common:save")}
          </Button>
        </form>
      </div>
    </>
  )
}
export default brandInformation
