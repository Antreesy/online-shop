import React from "react";
import s from "./icon.module.scss";

interface IconProps {
  className: string;
}

export const Icon: React.FC<IconProps> = ({ className }) => {
  return <span className={s.icon + " " + s[className]}></span>;
};
