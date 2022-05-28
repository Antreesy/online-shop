//Global Dependencies
import React from "react";
import classNames from "classnames";

//Project Components
import { Button } from "@mui/material";

//Project Styles
import styles from "./customButton.module.scss";

//Local Interfaces
interface CustomButtonProps {
  className?: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  // Props destructuring
  const {
    className = "",
    disabled = false,
    variant = "contained",
    color = "primary",
    children = null,
    iconLeft,
    iconRight,
    onClick,
  } = props;

  // Local functions
  const buttonClass = classNames(
    styles.button,
    {
      [styles.contained_button]: variant === "contained",
      [styles.outlined_button]: variant === "outlined",
      [styles.icon_button]: !children,
    },
    className,
  );

  return (
    <Button
      className={buttonClass}
      disabled={disabled}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Button>
  );
};

export default CustomButton;
