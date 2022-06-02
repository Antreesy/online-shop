import cn from "classnames"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Icon } from "UI"

import s from "./accordion.module.scss"
import { useState } from "react"
import { fail } from "assert"

interface AccordionProps {
  children: React.ReactNode
  header: React.ReactNode
  openTitle?: string
  className?: string
  summaryClassName?: string
  headerClassName?: any
  openTitleClassName?: string
  arrowColor?: string
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
  const [active, setActive] = useState(false)
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
    <Accordion className={accordionClass} >
      <AccordionSummary
        className={summaryClass}
        expandIcon={<Icon type="arrow_down" color={arrowColor} />}
        onClick={() => { setActive(!active) }}
      >
        <span className={cn(headerClassName, { [s.active]: active })} >{header}</span>
        <span className={openTitleClassName}>{openTitle}</span>
      </AccordionSummary>
      <AccordionDetails className={s.details}>{children}</AccordionDetails>
    </Accordion >
  )
}

export default CustomAccordion
