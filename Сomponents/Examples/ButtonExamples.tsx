import { CustomButton } from "UI";

import s from "styles/ComponentsExample.module.scss";

const ButtonExamples: React.FC = () => {
  return (
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
  );
};

export default ButtonExamples;
