//Global Dependencies
import type { NextPage } from "next"

//Project Components
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { Icon } from "UI"
import ButtonExamples from "Сomponents/Examples/ButtonExamples"
import RadioButtonGroup from "UI/RadioButtonsGroup/RadioButtonGroup"

//Project Helpers
import { icons } from "shared/consts/icons"

//Project Styles
import { Tabs } from "../UI"
import s from "styles/ComponentsExample.module.scss"

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <main className={s.main}>
        <h1>UI Kit page</h1>

        <h2>Project Radio Buttons</h2>
        <RadioButtonGroup
          elements={[
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
          ]}
        />
        <RadioButtonGroup
          elements={[
            { value: "string", label: "String" },
            { value: "number", label: "Number" },
            { value: "boolean", label: "Boolean" },
            { value: "any", label: "Any" },
          ]}
        />

        <p className={s.description}>
          Go back to{" "}
          <Link href="/">
            <a className={s.title__link}>/index</a>
          </Link>{" "}
          page
        </p>

        <Tabs
          labels={["Buttons", "Icons", "Tabs", "Checkboxes"]}
          values={[
            <ButtonExamples key={0} />,

            <div key={1} className={s.grid}>
              {icons.map((icon) => (
                <span key={icon} className={s.icon_example}>
                  {icon}: <Icon type={icon} />{" "}
                </span>
              ))}
            </div>,

            <div key={2} className={s.tabs}>
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

            <div key={3} className={s.grid}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Checkbox"
                />
                <FormControlLabel
                  control={<Checkbox color="secondary" />}
                  label="Another checkbox"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox />}
                  label="Disabled checkbox"
                />
              </FormGroup>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Helicopter"
                  />
                </RadioGroup>
              </FormControl>
            </div>,
          ]}
          width="1000px"
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
