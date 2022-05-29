import cn from "classnames"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Icon } from "UI"

import s from "./accordion.module.scss"

interface AccordionProps {
  children: React.ReactNode
  header: React.ReactNode
  openTitle?: string
  className?: string
  summaryClassName?: string
  headerClassName?: string
  openTitleClassName?: string
  arrowColor?: string
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
  const {
    children,
    header,
    openTitle = "",
    className,
    summaryClassName,
    headerClassName,
    openTitleClassName,
    arrowColor = "#8100ef",
  } = props

  const accordionClass = cn(s.accordion, className)
  const summaryClass = cn(s.summary, summaryClassName)

  return (
    <div>
      <Accordion className={accordionClass}>
        <AccordionSummary
          className={summaryClass}
          expandIcon={<Icon type="arrow_down" color={arrowColor} />}
        >
          <span className={headerClassName}>{header}</span>
          <span className={openTitleClassName}>{openTitle}</span>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomAccordion
