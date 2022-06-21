import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, Select } from "UI"
import { Button } from "UI"
import s from "./addProductBrand.module.scss"
import { countriesForSelect } from "shared/constants/countries"
import MultyUploadImg from "./MultyUploadImg"
import UploadImg from "./UploadImg"

type Inputs = {
  example: string
  exampleRequired: string
}

const AddProductBrand: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <>
      <div className={s.add_product_brand}>
        <div className={s.article}>
          <h1>Add product</h1>
          <p>
            It’s easy to add your products individually on{" "}
            <a href="#">Ilonsi!</a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            buttonLabel="button"
            label="Product Brand"
            setValue={setInputValue}
            value={inputValue}
            className={s.input}
            placeholder={"Product Brand*"}
            errorText={"error"}
          />
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            buttonLabel="button"
            label="Product Brand"
            setValue={setInputValue}
            value={inputValue}
            className={s.input}
            placeholder={"Product Brand*"}
            errorText={"error"}
          />
        </form>
        <Select
          className={s.input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input}
            variant="blue_outline"
            buttonLabel="button"
            label="Description"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Description*"}
          ></Input>
        </form>

        <Select
          className={s.input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
        />
        <Select
          className={s.input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input_large}
            variant="blue_outline"
            buttonLabel="button"
            label="Product Detail"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Product Detail*"}
          ></Input>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input_medium}
            variant="blue_outline"
            buttonLabel="button"
            label="Product Detail"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Product Detail*"}
          ></Input>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            buttonLabel="button"
            label="Product Brand"
            setValue={setInputValue}
            value={inputValue}
            className={s.input}
            placeholder={"Product Brand*"}
            errorText={"error"}
          ></Input>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input}
            variant="blue_outline"
            buttonLabel="button"
            label="Product Name"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Product Name*"}
          ></Input>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input}
            variant="blue_outline"
            buttonLabel="button"
            label="Product Name"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Product Name*"}
          ></Input>
        </form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input}
            variant="blue_outline"
            buttonLabel="button"
            label="Description"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Description*"}
          ></Input>
        </form>
        <Select
          className={s.input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
          onChange={() => {
            return
          }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            className={s.input}
            variant="blue_outline"
            buttonLabel="button"
            label="Description"
            setValue={setInputValue}
            value={inputValue}
            placeholder={"Description*"}
          ></Input>
        </form>
        <UploadImg />
        <MultyUploadImg />
        <Button className={s.button_black_down}>Confirm</Button>
      </div>
    </>
  )
}

export default AddProductBrand
