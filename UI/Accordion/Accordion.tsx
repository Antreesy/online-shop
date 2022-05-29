import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import React from "react"
import { Icon } from "UI/Icon"
import s from "./accordion.module.scss"

interface AccordionProps {
  children: React.ReactElement | string
  width?: string
  header: React.ReactElement | string
  openTitle?: string
  header_color?: string
  fontWeight_header?: string
  fontWeight_openTitle?: string
  openTitle_color?: string
  backgroundColor?: string
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
  const {
    children,
    width = "200px",
    header,
    openTitle = "",
    header_color = "#8202ef",
    openTitle_color = "#8202ef",
    fontWeight_header = "600",
    fontWeight_openTitle = "600",
    backgroundColor = "white",
  } = props
  return (
    <div>
      <Accordion className={s.accordion} sx={{ width, backgroundColor }}>
        <AccordionSummary
          expandIcon={<Icon type="arrow_down" color={openTitle_color} />}
        >
          <span style={{ color: header_color, fontWeight: fontWeight_header }}>
            {header}
          </span>
          <div
            className={s.details}
            style={{ fontWeight: fontWeight_openTitle, color: openTitle_color }}
          >
            {openTitle}
          </div>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomAccordion
