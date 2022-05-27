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
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  // Props destructuring
  const {
    children,
    disabled = false,
    className = "",
    variant = "contained",
    color = "primary",
    onClick,
  } = props;

  // Local functions
  const buttonClass = classNames(
    styles.button,
    {[styles.contained_button] : variant === "contained"},
    {[styles.outlined_button] : variant === "outlined"},
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
      {children}
    </Button>
  );
};

export default CustomButton;
