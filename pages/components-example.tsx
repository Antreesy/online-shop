//Global Dependencies
import type { NextPage } from "next"
import * as React from "react"
import { styled } from "@mui/material/styles"
import Radio, { RadioProps } from "@mui/material/Radio"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
//Project Components
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { DatePicker, Icon, RadioGroup, CheckboxGroup, Tabs } from "UI"
import ButtonExamples from "Сomponents/Examples/ButtonExamples"
import AccordionExamples from "Сomponents/Examples/AccordionExamples"
import { Logo } from "Сomponents/Logo"

//Project Helpers
import { icons } from "shared/consts/icons"

//Project Styles
import s from "styles/pages/ComponentsExample.module.scss"

const Home: NextPage = () => {
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "3px",
    width: 40,
    height: 40,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
        : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
  }))

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#cccccc",
    border: "none",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#969696",
    },
  })

  // Inspired by blueprintjs
  function BpRadio(props: RadioProps) {
    return (
      <Radio
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    )
  }

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

            <div key={"Radio Button"} className={s.SizePicker}>
              <FormControl>
                  <FormControlLabel value="S" control={<BpRadio />} label="S" />
                  <FormControlLabel value="L" control={<BpRadio />} label="L" />
                  <FormControlLabel value="XL" control={<BpRadio />} label="XL"/>
              </FormControl>
            </div>,
          ]}
        />
      </main>

      <Logo className={s.header_logo} type="dark" />
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
