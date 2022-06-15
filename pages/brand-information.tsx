import { NextPage } from "next"
import { Controller, useForm } from "react-hook-form"
import Head from "next/head"

import { Button, FileUpload, Icon, Input } from "UI"

import cn from "classnames"
import s from "styles/pages/brand-information.module.scss"

interface BrandsType {
  brandname: string
  name: string
  sellerId: string
  number: string
  taxAdmin: string
  kepAddress: string
  taxnumber: string
}

const brandInformation: NextPage = () => {
  const { handleSubmit, control } = useForm<BrandsType>({
    criteriaMode: "all",
    defaultValues: {
      brandname: "",
      name: "",
      sellerId: "",
      number: "",
      taxAdmin: "",
      kepAddress: "",
      taxnumber: "",
    },
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <Head>
        <title>ILONSI SHOP | Brand information</title>
      </Head>

      <div className={s.container}>
        <div className={s.nav}>
          <ul className={s.navigation}>
            <li>Profile</li>
            <li>Brand Information</li>
            <li>All Product</li>
            <li>All Cancellations</li>
            <li>On Sale</li>
            <li>That Need Revision</li>
            <li>Not On Sale</li>
          </ul>
        </div>
        <Button iconLeft="arrow_left" className={s.backBtn} variant="text">
          Back
        </Button>
        <h1>Brand Informations</h1>

        <div className={s.brandInfo}>
          <div className={s.brandItem}>
            <div className={s.iconWrapper}>
              <Icon type="brand_name" />
            </div>
            <div className={s.textBlock}>
              <p className={s.brandName}>Brand Name:</p>
              <p className={s.description}>Saint Laurent</p>
            </div>
          </div>
          <div className={s.brandDisplay}>
            <div className={s.iconWrapper}>
              <Icon type="brand_display_name" />
            </div>
            <div className={s.textBlock}>
              <p className={s.brandName}>Brand Display Name:</p>
              <p className={s.description}> Saint Lauren</p>
            </div>
          </div>
        </div>

        <div className={s.brandUploads}>
          <div className={s.uploadLogo}>
            <p>Brand Logo:</p>
            <div className={s.uploader}>
              <FileUpload
                title="Select or Drag Image"
                setValue={() => console.log("")}
                className={s.fileUploader}
              />
            </div>
            <Button variant="text" className={s.brandBlackBtn}>
              Load
            </Button>
          </div>
          <div className={s.uploadBanner}>
            <p>Brand Banner:</p>
            <div className={s.uploader}>
              <FileUpload
                title="Select or Drag Image"
                setValue={() => console.log("")}
                className={s.fileUploader}
              />
            </div>
            <Button variant="text" className={s.brandBlackBtn}>
              Load
            </Button>
          </div>
        </div>
        <h1>Company Informations</h1>
      </div>
      <div className={s.formSection}>
        <form className={s.container}>
          <div className={s.firstLineInputs}>
            <Controller
              name={"brandname"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={"Brand Name"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name Surname"}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"name"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={"Cari Ünvan  "}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name Surname"}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"sellerId"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={"Seller ID"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name Surname"}
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
                  label={"Mersis No"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name Surname"}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"taxAdmin"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={"Tax Administration"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name Surname"}
                  className={s.input}
                />
              )}
            />
            <Controller
              name={"kepAddress"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={"KEP Address"}
                  setValue={onChange}
                  value={value}
                  placeholder={"Name Surname"}
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
                label={"Tax number"}
                setValue={onChange}
                value={value}
                placeholder={"Name Surname"}
                className={s.inputTextArea}
              />
            )}
          />
          <Button
            variant="text"
            className={cn(s.brandBlackBtn, s.saveBtn)}
            onClick={onSubmit}
          >
            Save
          </Button>
        </form>
      </div>
    </>
  )
}
export default brandInformation
