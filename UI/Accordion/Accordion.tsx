import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import React from "react"
import { Icon } from "UI/Icon"
import s from "./accordion.module.scss"

interface AccordionProps {
  children: React.ReactElement | string
  width?: string
  summary: React.ReactElement | string
  details?: string
  summary_color?: string
  fontWeight?: string
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
  const {
    children,
    width = "200px",
    summary,
    details = "",
    summary_color = "#8202ef",
    fontWeight = "600",
  } = props
  return (
    <div>
      <Accordion className={s.accordion} sx={{ width }}>
        <AccordionSummary
          expandIcon={<Icon type="arrow_down" color="#8202ef" />}
        >
          <span style={{ color: summary_color, fontWeight }}>{summary}</span>
          <div className={s.details} style={{ fontWeight }}>
            {details}
          </div>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomAccordion
