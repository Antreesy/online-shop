import { useState } from "react"
import cn from "classnames"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Icon } from "UI"
import { IconType } from "UI/Icon/Icon"

import s from "./accordion.module.scss"

interface AccordionProps {
  children: React.ReactNode
  header: React.ReactNode
  openTitle?: string
  iconType?: IconType
  className?: string
  summaryClassName?: string
  headerClassName?: string
  headerActiveClassName?: string
  openTitleClassName?: string
  arrowColor?: string
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
  const [active, setActive] = useState(false)
  const {
    children,
    header,
    openTitle = "",
    iconType = "arrow_down",
    className,
    summaryClassName,
    headerClassName,
    headerActiveClassName,
    openTitleClassName,
    arrowColor = "#8100ef",
  } = props

  const accordionClass = cn(s.accordion, className)
  const summaryClass = cn(s.summary, summaryClassName)
  const headerClass = cn(s.header, headerClassName, {
    [headerActiveClassName || s.active]: active,
  })

  return (
    <Accordion className={accordionClass}>
      <AccordionSummary
        className={summaryClass}
        expandIcon={<Icon type={iconType} color={arrowColor} />}
        onClick={() => {
          setActive(!active)
        }}
      >
        <span className={headerClass}>{header}</span>
        <span className={openTitleClassName}>{openTitle}</span>
      </AccordionSummary>
      <AccordionDetails className={s.details}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordion
