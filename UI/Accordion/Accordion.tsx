import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import React from "react"
import { Icon } from "UI/Icon"
import s from "./accordion.module.scss"

interface AccordionProps {
  children: React.ReactElement | string
  width?: string
  header: React.ReactElement | string
  openTitle?: string
  headerClassname?: "bold_black" | "thin_black" | "bold_violet" | "thin_violet"
  openTitleClassname?: "bold_black" | "thin_black" | "bold_violet" | "thin_violet"
  arrowClassname?: string
  classname?: "background_black" | ""
  arrowColor?: string
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
  const {
    children,
    width = "200px",
    header,
    openTitle = "",
    headerClassname = "thin_black",
    openTitleClassname = "thin_black",
    classname = "",
    arrowColor = "black"
  } = props
  return (
    <div>
      <Accordion className={s.accordion + " " + s[classname]} sx={{ width }}>
        <AccordionSummary expandIcon={<Icon type="arrow_down" color={arrowColor}/>}>
          <div className={s.header + " " + s[headerClassname]}>{header}</div>
          <div className={s.openTitle + " " + s[openTitleClassname]}>
            {openTitle}
          </div>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomAccordion
