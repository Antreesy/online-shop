import { Controller, useForm } from "react-hook-form"
import cn from "classnames"

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

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <>
      <div className={s.form_wrapper}>
        <div className={s.header}>
          <h2>Add product</h2>
          <p>
            It is very easy to sell the products in your product list in bulk on{" "}
            <a>Ilonsi!</a>
          </p>
        </div>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.form_row}>
            <Controller
              name={"productBrand"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Product Brand"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Product Brand*"}
                  errorText={"error"}
                />
              )}
            />

            <Controller
              name={"productName"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Product Name"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Product Name*"}
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
                  label="Category"
                  className={s.select}
                  placeholder="Category"
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
                  label="Description"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Description"}
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
                  label="Color"
                  className={s.select}
                  placeholder="Color"
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
                  label="Size"
                  className={s.select}
                  placeholder="Size"
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
                  label="Product Detail"
                  value={value}
                  className={s.textarea}
                  setValue={onChange}
                  placeholder="Product Detail"
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
                  label="Cargo Detail"
                  setValue={onChange}
                  value={value}
                  className={cn(s.input, s.large)}
                  placeholder={"Cargo Detail"}
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
                  label="Normal Price"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Normal Price*"}
                  errorText={"error"}
                />
              )}
            />

            <Controller
              name={"discountedPrice"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Discounted Price"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Discounted Price*"}
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
                  label="Discount End Time"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Discount End Time*"}
                  errorText={"error"}
                />
              )}
            />

            <Controller
              name={"stockCode"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Stock Code"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Stock Code*"}
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
                  label="Stock Status"
                  className={s.select}
                  placeholder="Stock Status"
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
                  label="Stock Code"
                  setValue={onChange}
                  value={value}
                  className={s.input}
                  placeholder={"Stock Code*"}
                  errorText={"error"}
                />
              )}
            />
          </div>

          <div className={s.form_row}>
            <ImageUpload label="Image" />
            <ImageUpload label="Image Gallery" amount={3} />
          </div>

          <Button className={s.button_submit}>Load</Button>
        </form>
      </div>
    </>
  )
}
