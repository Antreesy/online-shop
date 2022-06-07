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
  ItemCounter,
  Range,
  Tabs,
  Price,
  Icon,
  SocialIcon,
} from "UI"

import {
  AddressCard,
  Logo,
  Notification,
  ProductItem,
  ProductItemList,
  ProfileSidebar,
  SectionHeader,
  OrderSummary,
} from "Сomponents"

import { icons } from "shared/constants/icons"
import { productItems } from "shared/constants/productItems"
import { sidebarTabs } from "shared/constants/sidebartabs"
import { Currency } from "shared/enums/currency"

import s from "styles/pages/ComponentsExample.module.scss"

const SampleCard = () => (
  <Card
    className={s.card_small}
    imageSrc="/../public/assets/img/picture_1.png"
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

        <Tabs
          className={s.example_tabs}
          labels={[
            "Notification",
            "Carousel",
            "Add Button",
            "Credit Card",
            "Card",
            "Toolbar",
            "ProductItem",
            "ProductItemList",
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
                  imageSrc="/../public/assets/img/picture_2.png"
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

            <div key={"ProductItem"}>
              <div className={s.grid}>
                <ProductItem
                  title="Yves Saint Laurent"
                  subtitle="Black long sleeve men’s jacket"
                  description="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu"
                  id={1}
                  price={{
                    oldPrice: 2030,
                    price: 2030,
                    type: "sale",
                  }}
                  imageSrc="/../public/assets/img/T_shirt.png"
                />
              </div>
              <div className={s.grid} style={{ width: 300 }}>
                <ProductItem
                  title="Yves Saint Laurent"
                  subtitle="Black long sleeve men’s jacket"
                  description="Lorem ipsum dolor sit amet, consectetur ad adipiscing elit. Integer lacinia, lacu"
                  id={1}
                  price={{
                    oldPrice: 2030,
                    price: 2030,
                    type: "sale",
                  }}
                  imageSrc="/../public/assets/img/T_shirt.png"
                  isFavorite={false}
                  onAddClick={() => console.log("onAddClick")}
                  toggleFavorite={() => console.log("toggleFavorite")}
                />
              </div>
            </div>,

            <div key="ProductItemLIst" className={s.grid}>
              <ProductItemList productItemList={productItems} />
            </div>,
          ]}
        />
      </main>
    </>
  )
}

export default Home
