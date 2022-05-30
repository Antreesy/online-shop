//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"
import Image from "next/image"
import {
  DatePicker,
  Icon,
  RadioGroup,
  CheckboxGroup,
  SocialIcon,
  Tabs,
} from "UI"
import { AccordionExamples, ButtonExamples } from "Сomponents/Examples"
import { Header, SizePicker } from "Сomponents"

//Project Helpers
import { icons } from "shared/consts/icons"

//Project Styles
import s from "styles/pages/ComponentsExample.module.scss"

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <Header />

      <main className={s.main}>
        <h1>UI Kit page</h1>

        <Tabs
          className={s.example_tabs}
          labels={[
            "Buttons",
            "Inputs and Pickers",
            "Icons",
            "Tabs",
            "Checkboxes and Radio",
            "Accordion",
            "Size Picker",
          ]}
          values={[
            <ButtonExamples key={"Buttons"} />,

            <div key={"Inputs and Pickers"} className={s.grid}>
              <div>
                <h2>Date Picker</h2>
                <DatePicker initValue={new Date()} onChange={() => {}} />
                <h2>Size Picker</h2>
                <SizePicker labels={["S", "M", "L", "XL", "XXL", "3XL"]} />
              </div>
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
            </div>,

            <div key={"Tabs"} className={s.tabs}>
              <p className={s.description}>default</p>
              <Tabs
                labels={["Sign In", "Sign Up"]}
                values={["Sign In", "Sign Up"]}
              />
              <p className={s.description}>spaces</p>
              <Tabs
                labels={["Sign In", "Sign Up"]}
                values={["Sign In", "Sign Up"]}
                variant="spaces"
              />
              <p className={s.description}>no_border</p>
              <Tabs
                labels={["Sign In", "Sign Up"]}
                values={["Sign In", "Sign Up"]}
                variant="no_border"
              />
            </div>,

            <div key={"Checkboxes and Radio"} className={s.grid}>
              <div>
                <p>Rounded Checkboxes</p>
                <CheckboxGroup rounded labels={["Men", "Women", "Unisex"]} />
                <p>Square Checkboxes</p>
                <CheckboxGroup
                  color="#000"
                  labels={["Men", "Women", "Unisex"]}
                />
                <p>Colored Checkboxes</p>
                <CheckboxGroup
                  color="#ff4e4e"
                  colorChecked="#25754a"
                  labels={["Men", "Women", "Unisex"]}
                />

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
          ]}
        />
      </main>

      <footer className={s.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={s.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
