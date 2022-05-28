//Global Dependencies
import type { NextPage } from "next";

//Project Components
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CustomButton, Icon } from "../UI";

import {icons} from "../shared/consts/icons"

//Project Styles
import s from "../styles/ComponentsExample.module.scss";

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
        <div className={s.grid}>
          <div className={s.grid_inner}>
            <CustomButton>
              Default
            </CustomButton>
            <CustomButton disabled>
              Disabled
            </CustomButton>
            <CustomButton variant="outlined">
              Outlined
            </CustomButton>
            <CustomButton variant="outlined" disabled>
              Disabled
            </CustomButton>
          </div>

          <div className={s.grid_inner}>
            <CustomButton
              className={s.button_clear}
              iconLeft="close_cross"
            />
            <CustomButton
              className={s.button_search}
              iconLeft="search"
            >
              Search
            </CustomButton>
            <CustomButton
              className={s.button_clean}
              iconLeft="trash_can"
            >
              Clean
            </CustomButton>
            <CustomButton
              className={s.button_excel}
              iconLeft="download"
            >
              Excel Download
            </CustomButton>
          </div>

          <div className={s.grid_inner}>
            <CustomButton
              className={s.button_back}
              iconLeft="arrow_left"
            >
              Back
            </CustomButton>
            <CustomButton
              className={s.button_facebook}
              variant="outlined"
            >
              Sign In
            </CustomButton>
            <CustomButton
              className={s.button_smalltext}
              variant="text"
            >
              Forget Password?
            </CustomButton>
          </div>

          <div className={s.grid_inner}>
            <CustomButton
              className={s.button_black}
            >
              Confirm
            </CustomButton>
            <CustomButton
              className={s.button_purple}
            >
              Approve
            </CustomButton>
            <div className={s.card_example}>
              <h3>Simple Card</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <CustomButton>
                Stretch to width
              </CustomButton>
            </div>
          </div>
        </div>

        <h2>Icons Pack</h2>
        <div className={s.grid}>
          {icons.map(icon => <span key={icon} className={s.icon_example}>{icon}: <Icon type={icon} /> {" "}</span>)}
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
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Helicopter"
                />
              </RadioGroup>
            </FormControl>
          </div>
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
  );
};

export default Home;
