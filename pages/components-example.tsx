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
import { CustomButton, Icon } from "../UI";

//Project Styles
import styles from "../styles/Index.module.scss";

const icons = [
  "out_of_stock",
  "critical_stock",
  "download",
  "close_cross",
  "arrow_down",
  "price_tag",
  "credit_card",
  "earth",
  "package-return",
  "delivery_ready",
  "getting_ready",
  "hanger",
  "products_on_sale",
  "out_sign",
  "brand_name",
  "brand_display_name",
  "data",
  "shop",
  "discount",
  "edit",
  "date",
  "dashboard",
  "upload",
  "mark",
  "size",
  "okay",
  "location",
  "resize_textarea",
  "trash_can",
  "exclamation",
  "arrow_right",
  "arrow_left",
  "social_networks",
  "basket",
  "account",
  "search",
  "bell_filled",
  "about",
  "bell_outlined",
  "off_sale",
  "heart",
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <main className={styles.main}>
        <h1>UI Kit page</h1>

        <p className={styles.description}>
          Go back to{" "}
          <Link href="/">
            <a className={styles.title__link}>/index</a>
          </Link>{" "}
          page
        </p>

        <div className={styles.uikit_grid}>
          <CustomButton>Custom Button</CustomButton>
          <CustomButton disabled>Disabled Button</CustomButton>
        </div>
        <div className={styles.uikit_grid}>
          <CustomButton variant="outlined">Outlined Button</CustomButton>
          <CustomButton variant="outlined" disabled>
            Disabled Button
          </CustomButton>
        </div>

        <div className={styles.uikit_grid}>
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
        <div>
          <h3>Icon pack</h3>
          {icons.map(icon => <span key={icon}><Icon className={icon} /></span>)}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
