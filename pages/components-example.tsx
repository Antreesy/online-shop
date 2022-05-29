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
import { Accordion, Icon } from "UI"
import ButtonExamples from "Сomponents/Examples/ButtonExamples"

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

        <p className={s.description}>
          Go back to{" "}
          <Link href="/">
            <a className={s.title__link}>/index</a>
          </Link>{" "}
          page
        </p>

        <h2>Buttons Example</h2>
        <ButtonExamples />

        <h2>Icons Pack</h2>
        <div className={s.grid}>
          {icons.map((icon) => (
            <span key={icon} className={s.icon_example}>
              {icon}: <Icon type={icon} />{" "}
            </span>
          ))}
        </div>

        <div>
          <h2>Checkboxes and Radio Buttons Example</h2>

          <div className={s.grid}>
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
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
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
          </div>

          <div>
            <h2>Accordion</h2>
            <Accordion
              summary={"default"}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
              lacus ex, sit amet blandit leo lobortis eget.`}</Accordion>
            <Accordion
              width="400px"
              summary={"Detail"}
              details={"Detail"}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
              lacus ex, sit amet blandit leo lobortis eget.`}</Accordion>
            <Accordion
              width="600px"
              summary={"black, Detail, width: 600px, fontWeight: 400"}
              fontWeight = {"400"}
              details={"Detail"}
              summary_color="black"
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
              lacus ex, sit amet blandit leo lobortis eget.`}</Accordion>
          </div>
        </div>
        <div className={s.tabs}>
          <h2>Tabs</h2>
          <div>default</div>
          <Tabs
            labels={["Sign In", "Sign Up"]}
            values={["Sign In", "Sign Up"]}
            width="200px"
            variant="default"
          />
          <div>spaces</div>
          <Tabs
            labels={["Sign In", "Sign Up"]}
            values={["Sign In", "Sign Up"]}
            width="200px"
            variant="spaces"
          />
          <div>without_border</div>
          <Tabs
            labels={["Sign In", "Sign Up"]}
            values={["Sign In", "Sign Up"]}
            width="200px"
            variant="without_border"
          />
        </div>
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
