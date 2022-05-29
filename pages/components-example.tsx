//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { DatePicker, Icon, RadioGroup, Accordion, Tabs } from "UI"
import ButtonExamples from "Сomponents/Examples/ButtonExamples"

//Project Helpers
import { icons } from "shared/consts/icons"

//Project Styles
import s from "styles/ComponentsExample.module.scss"

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <main className={s.main}>
        <h1>UI Kit page</h1>

        <p className={s.description}>
          Go back to{" "}
          <Link href="/">
            <a className={s.title__link}>/index</a>
          </Link>{" "}
          page
        </p>

        <Tabs
          labels={[
            "Buttons",
            "Inputs and Pickers",
            "Icons",
            "Tabs",
            "Checkboxes and Radio",
            "Accordion",
          ]}
          values={[
            <ButtonExamples key={"Buttons"} />,

            <div key={"Inputs and Pickers"} className={s.grid}>
              <div>
                <h2>DatePicker</h2>
                <DatePicker initValue={new Date()} onChange={() => {}} />
              </div>
            </div>,

            <div key={"Icons"} className={s.grid}>
              {icons.map((icon) => (
                <span key={icon} className={s.icon_example}>
                  {icon}: <Icon type={icon} />{" "}
                </span>
              ))}
            </div>,

            <div key={"Tabs"} className={s.tabs}>
              <p className={s.description}>default</p>
              <Tabs
                labels={["Sign In", "Sign Up"]}
                values={["Sign In", "Sign Up"]}
                width="200px"
                variant="default"
              />
              <p className={s.description}>spaces</p>
              <Tabs
                labels={["Sign In", "Sign Up"]}
                values={["Sign In", "Sign Up"]}
                width="200px"
                variant="spaces"
              />
              <p className={s.description}>without_border</p>
              <Tabs
                labels={["Sign In", "Sign Up"]}
                values={["Sign In", "Sign Up"]}
                width="200px"
                variant="without_border"
              />
            </div>,
            <div key={"Checkboxes and Radio"} className={s.grid}>
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
            <h2>Accordion</h2>
            <Accordion 
              header={"default"}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`}</Accordion>
            <Accordion
              width="400px"
              header={"Detail"}
              headerClassname={"bold_black"}
              openTitle={"Detail"}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`}</Accordion>
            <Accordion
              headerClassname={"bold_violet"}
              width="600px"
              header={"header"}
              openTitle={"Detail"}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`}</Accordion>
            <Accordion
              header={"hello"}
              classname={"background_black"}
              openTitleClassname="bold_violet"
              openTitle="hello"
              arrowColor="#8100ef"
            >
              <div className={s.accordion_children}>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.`}
              </div>
            </Accordion>
          </div>,
          ]}
          width="250px"
          variant="default"
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
