import { Controller, useForm } from "react-hook-form"
import cn from "classnames"
import { useTranslation } from "next-i18next"

import { Button, Input, ImageUpload, Select, TextArea } from "UI"

import { SelectItem } from "shared/interfaces/selectProps"

import s from "styles/pages/account/add-product.module.scss"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddProductFormProps {}

type AddProductType = {
  productBrand: string
  productName: string
  category: SelectItem
  description: string
  color: SelectItem
  size: SelectItem
  productDetail: string
  cargoDetail: string
  normalPrice: string
  discountedPrice: string
  discountEndTime: string
  stockCode: string
  stockStatus: SelectItem
  stockCode2: string
}

export const AddProductForm: React.FC = () => {
  const { handleSubmit, control } = useForm<AddProductType>({
    criteriaMode: "all",
    defaultValues: {
      productBrand: "",
      productName: "",
      category: { title: "", value: "" },
      description: "",
      color: { title: "", value: "" },
      size: { title: "", value: "" },
      productDetail: "",
      cargoDetail: "",
      normalPrice: "",
      discountedPrice: "",
      discountEndTime: "",
      stockCode: "",
      stockStatus: { title: "", value: "" },
      stockCode2: "",
    },
  })
  const { t } = useTranslation(["addproduct", "common"])

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <div className={s.form_wrapper}>
        <div className={s.header}>
          <h2>{t("addProduct")} </h2>
          <p>
            {t("textEasy")} <a>Ilonsi!</a>
          </p>
        </div>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.form_row}>
            <Controller
              name={"productBrand"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.productBrand")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.productBrand")}
                  errorText={"error"}
                />
              )}
            />

            <Controller
              name={"productName"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.productName")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.productName")}
                  errorText={"error"}
                />
              )}
            />
          </div>

          <div className={s.form_row}>
            <Controller
              name={"category"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={t("form.category")}
                  className={s.select}
                  placeholder={t("form.category")}
                  initValue={value.value}
                  values={[]}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name={"description"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.description")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.description")}
                  errorText={"error"}
                />
              )}
            />
          </div>
          <div className={s.form_row}>
            <Controller
              name={"color"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={t("form.color")}
                  className={s.select}
                  placeholder={t("form.color")}
                  initValue={value.value}
                  values={[]}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name={"size"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={t("form.size")}
                  className={s.select}
                  placeholder={t("form.size")}
                  initValue={value.value}
                  values={[]}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className={s.form_row}>
            <Controller
              name={"productDetail"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextArea
                  label={t("form.productDetail")}
                  value={value}
                  className={s.textarea}
                  setValue={onChange}
                  placeholder={t("form.productDetail")}
                />
              )}
            />
          </div>

          <div className={s.form_row}>
            <Controller
              name={"cargoDetail"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.cargoDetail")}
                  setValue={onChange}
                  value={value}
                  className={cn(s.input, s.large)}
                  placeholder={t("form.cargoDetail")}
                  errorText={"error"}
                />
              )}
            />
          </div>
          <div className={s.form_row}>
            <Controller
              name={"normalPrice"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.normalPrice")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.normalPrice")}
                  errorText={"error"}
                />
              )}
            />

            <Controller
              name={"discountedPrice"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.discountedPrice")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.discountedPrice")}
                  errorText={"error"}
                />
              )}
            />
          </div>
          <div className={s.form_row}>
            <Controller
              name={"discountEndTime"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.discountEndTime")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.discountEndTime")}
                  errorText={"error"}
                />
              )}
            />

            <Controller
              name={"stockCode"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.stockCode")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.stockCode")}
                  errorText={"error"}
                />
              )}
            />
          </div>

          <div className={s.form_row}>
            <Controller
              name={"stockStatus"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  label={t("form.stockStatus")}
                  className={s.select}
                  placeholder={t("form.stockStatus")}
                  initValue={value.value}
                  values={[]}
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name={"stockCode2"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label={t("form.stockCode")}
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={t("form.stockCode")}
                  errorText={"error"}
                />
              )}
            />
          </div>

          <div className={s.form_row}>
            <ImageUpload label={t("form.image")} />
            <ImageUpload label={t("form.imageGallery")} amount={3} />
          </div>

          <Button className={s.button_submit}>{t("common:load")}</Button>
        </form>
      </div>
    </>
  )
}
