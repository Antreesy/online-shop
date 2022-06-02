import { useState } from "react"

//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"

import {
  AccordionExamples,
  ButtonExamples,
  CardExample,
} from "Сomponents/Examples"

import {
  AddButton,
  Card,
  Carousel,
  CheckboxGroup,
  CreditCard,
  DatePicker,
  Icon,
  Input,
  FileSelect,
  FileUpload,
  RadioGroup,
  Range,
  Select,
  Slider,
  SocialIcon,
  Tabs,
  Price,
} from "UI"

import {
  Footer,
  Header,
  Logo,
  Notification,
  SectionHeader,
  SizePicker,
  BreadCrumbs,
} from "Сomponents"

//Project Helpers
import { icons } from "shared/constants/icons"
import { countriesForSelect } from "shared/constants/countries"
import { footerNav } from "shared/constants/footernav"
import { Currency } from "shared/enums/currency"

//Project Styles
import s from "styles/pages/ComponentsExample.module.scss"

const Home: NextPage = () => {
  const [isRead, setIsRead] = useState<boolean>(false)
  const [value, setValue] = useState<File | null>(null)
  const [inputValue, setInputValue] = useState<string>("")
  return (
    <>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <Header />
      <BreadCrumbs/>

      <main className={s.main}>
        <SectionHeader
          className={s.title}
          title={"UI Kit page"}
          actionText={"All Orders"}
        />

        <Tabs
          className={s.example_tabs}
          labels={[
            "Buttons",
            "Inputs",
            "Pickers",
            "Icons",
            "Tabs",
            "Checkboxes and Radio",
            "Accordion",
            "Price",
          ]}
          values={[
            <ButtonExamples key={"Buttons"} />,

            <div key={"Inputs"}>
              <Input
                label="default"
                setValue={setInputValue}
                value={inputValue}
              />
              <Input
                variant="footer"
                buttonLabel="button"
                label="footer"
                setValue={setInputValue}
                value={inputValue}
                placeholder={"value"}
              />
              <Input
                variant="black_button"
                isRequired={true}
                buttonLabel="button"
                label="modal"
                setValue={setInputValue}
                value={inputValue}
                placeholder={"value"}
              />
              <Input
                variant="blue_outline"
                buttonLabel="button"
                label="blue_outline"
                setValue={setInputValue}
                value={inputValue}
                placeholder={"value"}
              />
              <Input
                buttonLabel="button"
                label="className: error"
                setValue={setInputValue}
                value={inputValue}
                className={"error"}
                placeholder={"value"}
                errorText={"error"}
              />
            </div>,

            <div key={"Pickers"} className={s.grid_column}>
              <h2>Date Picker</h2>
              <DatePicker
                initValue={new Date()}
                onChange={() => {
                  return
                }}
              />
              <h2>Size Picker</h2>
              <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
              <h2>Select</h2>
              <Select
                items={[
                  { title: "one", value: 1 },
                  { title: "two", value: 2 },
                  { title: "three", value: 3 },
                ]}
                onChange={() => {
                  return
                }}
              />
              <Select
                label="Select"
                placeholder="Country*"
                items={countriesForSelect()}
                onChange={() => {
                  return
                }}
              />
              <h2>Slider</h2>
              <Slider min={0} max={50} value={[0, 30]} />
              <h2>File Upload</h2>
              <FileUpload />
              <h2>File Select</h2>
              <FileSelect value={value} setValue={setValue} />
            </div>,

            <div key={"Icons"} className={s.grid}>
              {icons.map((icon) => (
                <span key={icon} className={s.icon_example}>
                  {icon}: <Icon type={icon} />{" "}
                </span>
              ))}
              <div style={{ backgroundColor: "#1c1c1c" }}>
                <SocialIcon type="facebook" />
                <SocialIcon type="instagram" />
                <SocialIcon type="youtube" />
              </div>
              <Logo type="dark" />
            </div>,

            <div key={"Tabs"} className={s.grid}>
              <div>
                <p className={s.description}>default</p>
                <Tabs
                  labels={["Sign In", "Sign Up"]}
                  values={["Sign In", "Sign Up"]}
                />
              </div>
              <div>
                <p className={s.description}>spaces</p>
                <Tabs
                  labels={["Sign In", "Sign Up"]}
                  values={["Sign In", "Sign Up"]}
                  variant="spaces"
                />
              </div>
              <div>
                <p className={s.description}>no_border</p>
                <Tabs
                  labels={["Sign In", "Sign Up"]}
                  values={["Sign In", "Sign Up"]}
                  variant="no_border"
                />
              </div>
            </div>,

            <div key={"Checkboxes and Radio"} className={s.grid}>
              <div>
                <p>Rounded Checkboxes</p>
                <CheckboxGroup rounded labels={["Men", "Women", "Unisex"]} />
              </div>
              <div>
                <p>Square Checkboxes</p>
                <CheckboxGroup
                  color="#000"
                  labels={["Men", "Women", "Unisex"]}
                />
              </div>
              <div>
                <p>Colored Checkboxes</p>
                <CheckboxGroup
                  color="#ff4e4e"
                  colorChecked="#25754a"
                  labels={["Men", "Women", "Unisex"]}
                />
              </div>
              <div>
                <p>Gender</p>
                <RadioGroup
                  elements={[
                    { value: "female", label: "Female" },
                    { value: "male", label: "Male" },
                  ]}
                />
                <p>Type</p>
                <RadioGroup
                  elements={[
                    { value: "string", label: "String" },
                    { value: "number", label: "Number" },
                    { value: "boolean", label: "Boolean" },
                    { value: "any", label: "Any" },
                  ]}
                />
              </div>
            </div>,

            <div key={"Accordion"}>
              <AccordionExamples />
            </div>,

            <div key={"Price"}>
              <Price oldPrice={2030} price={1930} type="order" />
              <Price oldPrice={2030} price={1930} type="cart" />
              <Price oldPrice={2030} price={1930} type="primary" />
              <Price oldPrice={2030} price={1930} type="sale" />
              <Price oldPrice={2030} price={1930} type="sale_black" />
              <Range
                minQuantity={10000}
                maxQuantity={1000000}
                currency={Currency.RUB}
              />
            </div>,
          ]}
        />

        <SectionHeader className={s.title} title={"Components page"} />

        <Tabs
          className={s.example_tabs}
          labels={[
            "Notification",
            "Carousel",
            "Add Button",
            "Credit Card",
            "Card",
          ]}
          values={[
            <div key="Notification">
              <Notification
                onRead={() => {
                  setIsRead(true)
                }}
                header={"Notification"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quam sequi vitae eius iusto perspiciatis facilis nesciunt
                dignissimos provident ipsum? Nobis repellat atque ab nam magni
                voluptas expedita facere recusandae.
              </Notification>
            </div>,

            <div key={"Carousel"} className={s.carousel}>
              <Carousel items={new Array(10).fill(CardExample)} />
            </div>,

            <div key={"AddButton"} className={s.addbuttonlist}>
              <div>
                <AddButton />
              </div>
              <div>
                <AddButton title="Add New Card" color="primary" />
              </div>
              <div>
                <AddButton title="Add New Address" color="secondary" />
              </div>
              <div>
                <AddButton
                  title="Add Product"
                  color="secondary"
                  bgColor="white"
                  large
                />
              </div>
            </div>,

            <div key={"Credit Card"} className={s.creditcard}>
              <CreditCard
                size={200}
                isColored
                key={1}
                isHidden
                id={8375}
                cardNumber="1234 8547 7294 3959"
                cardHolder="Test Test"
                expireDate="01/2023"
                onDelete={() => {
                  console.log("test")
                }}
              />
              <CreditCard
                size={250}
                key={2}
                isHidden
                id={7335}
                cardNumber="1234 1234 1234 1234"
                cardHolder="Test Test"
                expireDate="01/2023"
              />
              <CreditCard
                size={300}
                key={3}
                id={2341}
                isColored
                cardNumber="1234 1234 1234 1234"
                cardHolder="Test Test"
                expireDate="01/2023"
                onDelete={() => {
                  console.log("test")
                }}
              />
            </div>,

            <div key={"Card"}>
              <div className={s.cards}>
                <Card
                  className={s.card_big}
                  imageSrc="/../public/assets/img/picture_1.png"
                  title="Gizem Sancak"
                  buttonTitle="Go To Store"
                  topButtonTitle="Follow"
                />
                <Card
                  className={s.card_small}
                  imageSrc="/../public/assets/img/picture_2.png"
                  title="Gizem Sancak"
                  buttonTitle="Go To Store"
                  isButtonHidden
                />
              </div>
            </div>,
          ]}
        />
      </main>

      <Footer links={footerNav} />
    </>
  )
}

export default Home
