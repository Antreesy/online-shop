import React, { useState } from "react"
import { Input, Select } from "UI"
import { FileUpload, Button } from "UI"
import s from "./AddProductBrand.module.scss"
import { countriesForSelect } from "shared/constants/countries"

const AddProductBrand: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")

  return (
    <>
      <div className={s.addProductBrand}>
        <div className={s.article}>
          <h1>Add product</h1>
          <p>
            It’s easy to add your products individually on{" "}
            <a href="#">Ilonsi!</a>
          </p>
        </div>
        <Input
          buttonLabel="button"
          label="Product Brand"
          setValue={setInputValue}
          value={inputValue}
          className={s.addProductBrand_input}
          placeholder={"Product Brand*"}
          errorText={"error"}
        />
        <Input
          className={s.addProductBrand_input}
          variant="blue_outline"
          buttonLabel="button"
          label="Product Name"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Product Name*"}
        ></Input>
        <Select
          className={s.addProductBrand_input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
          onChange={() => {
            return
          }}
        />
        <Input
          className={s.addProductBrand_input}
          variant="blue_outline"
          buttonLabel="button"
          label="Description"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Description*"}
        ></Input>
        <Select
          className={s.addProductBrand_input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
          onChange={() => {
            return
          }}
        />
        <Select
          className={s.addProductBrand_input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
          onChange={() => {
            return
          }}
        />
        <Input
          className={s.addProductBrand_input_large}
          variant="blue_outline"
          buttonLabel="button"
          label="Product Detail"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Product Detail*"}
        ></Input>
        <Input
          className={s.addProductBrand_input_medium}
          variant="blue_outline"
          buttonLabel="button"
          label="Product Detail"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Product Detail*"}
        ></Input>
        <Input
          buttonLabel="button"
          label="Product Brand"
          setValue={setInputValue}
          value={inputValue}
          className={s.addProductBrand_input}
          placeholder={"Product Brand*"}
          errorText={"error"}
        />
        <Input
          className={s.addProductBrand_input}
          variant="blue_outline"
          buttonLabel="button"
          label="Product Name"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Product Name*"}
        ></Input>
        <Input
          className={s.addProductBrand_input}
          variant="blue_outline"
          buttonLabel="button"
          label="Product Name"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Product Name*"}
        ></Input>
        <Input
          className={s.addProductBrand_input}
          variant="blue_outline"
          buttonLabel="button"
          label="Description"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Description*"}
        ></Input>
        <Select
          className={s.addProductBrand_input}
          label="Select"
          placeholder="Country*"
          values={countriesForSelect()}
          onChange={() => {
            return
          }}
        />
        <Input
          className={s.addProductBrand_input}
          variant="blue_outline"
          buttonLabel="button"
          label="Description"
          setValue={setInputValue}
          value={inputValue}
          placeholder={"Description*"}
        ></Input>
        <div className={s.uploadImg}>
          <h2>Select New Image or Drag</h2>
          <FileUpload
            className={s.uploadImg_upload}
            title="(JPG, JPEG, PNG,
              Minimum 600x800)"
            setValue={() => {}}
          />
          <p>The image you upload must be in JPEG or PNG format</p>
          <p>
            The image you upload must have a minimum 600x800 standard and a
            maximum size of 5MB.
          </p>
          <p>
            <span>Click</span> to view visual rules
          </p>
          <Button className={s.button_black}>Confirm</Button>
        </div>
        <div className={s.uploadImg}>
          <h2>Select New Image or Drag</h2>
          <div className={s.fileGallery}>
            <FileUpload
              className={s.uploadImg_uploadGallery}
              title="(JPG, JPEG, PNG,
              Minimum 600x800)"
              setValue={() => {}}
            />{" "}
            <FileUpload
              className={s.uploadImg_uploadGallery}
              title="(JPG, JPEG, PNG,
            Minimum 600x800)"
              setValue={() => {}}
            />{" "}
            <FileUpload
              className={s.uploadImg_uploadGallery}
              title="(JPG, JPEG, PNG,
          Minimum 600x800)"
              setValue={() => {}}
            />
          </div>
          <p>The image you upload must be in JPEG or PNG format</p>
          <p>
            The image you upload must have a minimum 600x800 standard and a
            maximum size of 5MB.
          </p>
          <p>
            <span>Click</span> to view visual rules
          </p>
          <Button className={s.button_black}>Confirm</Button>
        </div>
        <Button className={s.button_black_down}>Confirm</Button>
      </div>
    </>
  )
}

export default AddProductBrand
