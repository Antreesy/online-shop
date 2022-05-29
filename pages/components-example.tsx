//Global Dependencies
import type { NextPage } from "next";

//Project Components
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { CustomButton, CheckboxGroup } from "../UI";

//Project Styles
import s from "../styles/Index.module.scss";


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

        <div className={s.uikit_grid}>
          <CustomButton className={s.example_button}>
            Custom Button
          </CustomButton>
          <CustomButton className={s.example_button} disabled>
            Disabled Button
          </CustomButton>
          <CustomButton className={s.example_button_outlined}>
            Custom Outlined Button
          </CustomButton>
          <CustomButton className={s.example_button_outlined} disabled>
            Disabled Outlined Button
          </CustomButton>
        </div>

        <div className={s.uikit_grid}>
          <Button variant="contained">Contained Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="contained" disabled>
            Disabled Button
          </Button>
          <Link href="/">
            <Button variant="contained" color="secondary">
              Link Button
            </Button>
          </Link>
        </div>

        <div className={s.uikit_grid}>
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
      </main>
      <div>
        <h2>Custom Checkboxes</h2>

        <CheckboxGroup rounded label={['Men', 'Women', 'Unisex']} />
        <CheckboxGroup rounded={false} label={['Men', 'Women', 'Unisex']} />

      </div>

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
