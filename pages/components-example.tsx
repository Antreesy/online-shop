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
import { CustomButton } from "../UI";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Project Styles
import styles from "../styles/ComponentsExample.module.scss";

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

        <h2>Buttons Example</h2>
        <div className={styles.grid}>
          <div className={styles.grid_inner}>
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

          <div className={styles.grid_inner}>
            <CustomButton
              className={styles.button_clear}
              iconLeft={<ClearIcon />}
            />
            <CustomButton
              className={styles.button_search}
              iconLeft={<SearchIcon />}
            >
              Search
            </CustomButton>
            <CustomButton
              className={styles.button_clean}
              iconLeft={<DeleteOutlineOutlinedIcon />}
            >
              Clean
            </CustomButton>
            <CustomButton
              className={styles.button_excel}
              iconLeft={<FileDownloadOutlinedIcon />}
            >
              Excel Download
            </CustomButton>
          </div>

          <div className={styles.grid_inner}>
            <CustomButton
              className={styles.button_back}
              iconLeft={<ArrowBackIcon />}
            >
              Back
            </CustomButton>
            <CustomButton
              className={styles.button_facebook}
              variant="outlined"
            >
              Sign In
            </CustomButton>
            <CustomButton
              className={styles.button_black}
            >
              Confirm
            </CustomButton>
            <CustomButton
              className={styles.button_purple}
            >
              Approve
            </CustomButton>
          </div>

          <div className={styles.card_example}>
            <h3>Simple Card</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio eos illum consequatur ducimus.</p>
            <CustomButton>
              Stretch to width
            </CustomButton>
          </div>
        </div>

        <div>
          <h2>Checkboxes and Radio Buttons Example</h2>

          <div className={styles.grid}>
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
