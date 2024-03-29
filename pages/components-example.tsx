import type { NextPage } from "next"

import Head from "next/head"

import {
  AccordionExamples,
  ButtonExamples,
  CheckboxExamples,
  InputExamples,
  CreditCardExamples,
  PickerExamples,
  TabsExamples,
  ToolbarExample,
} from "Сomponents/Examples"

import {
  AddButton,
  AlertBox,
  Card,
  Carousel,
  Icon,
  ItemCounter,
  Range,
  Price,
  Progressbar,
  SocialIcon,
  Tabs,
  Tooltip,
} from "UI"

import {
  AddressCard,
  Chart,
  Logo,
  Notification,
  ProductItemList,
  ProfileSidebar,
  SectionHeader,
  OrderSummary,
  PhotoSlider,
} from "Сomponents"

import { icons } from "shared/constants/icons"
import { productItems } from "shared/constants/productItems"
import { sidebarTabs } from "shared/constants/sidebartabs"
import { chartData } from "shared/constants/charts"
import { Currency } from "shared/enums/currency"

import productImage from "public/assets/img/product-img.png"

import s from "styles/pages/components-example.module.scss"

const longText = `
Switch an order to preparing status
Do you approve your request?
`

const SampleCard = () => (
  <Card
    className={s.card_small}
    imageSrc="/assets/img/picture_1.png"
    title="Gizem Sancak"
    buttonTitle="Go To Store"
    topButtonTitle="Follow"
  />
)

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <main className={s.main}>
        <SectionHeader
          className={s.title}
          title={"UI Kit page"}
          actionItem={"All Orders"}
        />

        <Progressbar currentStep={1} steps={[1, 2, 3]} />

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
            "OrderSummary",
            "Sidebar",
            "Price",
            "Counters",
          ]}
          values={[
            <ButtonExamples key={"Buttons"} />,

            <InputExamples key={"Inputs"} />,

            <PickerExamples key={"Pickers"} />,

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

            <TabsExamples key={"Tabs"} />,

            <CheckboxExamples key={"Checkboxes and Radio"} />,

            <div key={"Accordion"}>
              <AccordionExamples />
            </div>,

            <div key={"OrderSummary"}>
              <OrderSummary
                subtotal={1144}
                shipping={123}
                discount={40}
                kdv={110}
              />
            </div>,

            <div key={"Sidebar"}>
              <ProfileSidebar labels={sidebarTabs[0]} title={"MY ACCOUNT"} />
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
            <div key={"Counters"} style={{ display: "flex" }}>
              <ItemCounter initValue={5} />
              <ItemCounter initValue={5} large />
            </div>,
          ]}
        />
        <SectionHeader className={s.title} title={"Components page"} />
        <h2>Tooltip</h2>
        <Tooltip content={longText}>
          <div>Lorem ipsum dolor sit.</div>
        </Tooltip>
        <Tabs
          className={s.example_tabs}
          labels={[
            "Notification",
            "Carousel",
            "Add Button",
            "Credit Card",
            "Card",
            "Toolbar",
            "ProductItemList",
            "Chart",
          ]}
          values={[
            <div key="Notification">
              <AlertBox text="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu sit amet, consectet lorem" />

              <Notification title={"Notification"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quam sequi vitae eius iusto perspiciatis facilis nesciunt
                dignissimos provident ipsum? Nobis repellat atque ab nam magni
                voluptas expedita facere recusandae.
              </Notification>
            </div>,

            <div key={"Carousel"} className={s.carousel}>
              <Carousel items={new Array(10).fill(SampleCard)} />
              <PhotoSlider
                photos={[
                  productImage,
                  productImage,
                  productImage,
                  productImage,
                  productImage,
                  productImage,
                ]}
              />
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

            <CreditCardExamples key={"Credit Card"} />,

            <div key={"Card"}>
              <div className={s.grid}>
                <SampleCard />
                <Card
                  className={s.card_small}
                  imageSrc="/assets/img/picture_2.png"
                  title="Gizem Sancak"
                  buttonTitle="Go To Store"
                  isButtonHidden
                />
                <AddressCard
                  title="title"
                  text="nskjjknsjnkjdvmkjewnlkjwnljcnwjklen"
                />
              </div>
            </div>,

            <div key={"Toolbar"}>
              <ToolbarExample />
            </div>,

            <div key="ProductItemLIst" className={s.grid}>
              <ProductItemList productItemList={productItems} />
            </div>,

            <div key="Chart" className={s.grid}>
              <Chart caption={chartData[0].caption} data={chartData[0].data} />
            </div>,
          ]}
        />
      </main>
    </>
  )
}

export default Home
