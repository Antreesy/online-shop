import { Tab, Tabs } from "@mui/material";
import React from "react";
import s from "./customTabs.module.scss";

interface CustomTabsProps {
  labels: string[];
  width: string;
}

export const CustomTabs: React.FC<CustomTabsProps> = ({ labels, width }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} className={s.tabs}>
      {labels.map((label) => (
        <Tab key={label} label={label} className={s.tab} sx={{width}}/>
      ))}
    </Tabs>
  );
};
