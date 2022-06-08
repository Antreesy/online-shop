import { useState } from "react"
import cn from "classnames"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Icon } from "UI"
import { IconType } from "UI/Icon/Icon"

import s from "./accordion.module.scss"

interface AccordionProps {
  children: React.ReactNode
  header: React.ReactNode
  headerCollapsed?: React.ReactNode
  openTitle?: string
  iconType?: IconType
  iconOpenType?: IconType
  iconWrapped?: boolean
  className?: string
  summaryClassName?: string
  summaryActiveClassName?: string
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
    headerCollapsed = header,
    openTitle = "",
    iconType = "arrow_down",
    iconOpenType = "arrow_down",
    iconWrapped,
    className,
    summaryClassName,
    summaryActiveClassName,
    headerClassName,
    headerActiveClassName,
    openTitleClassName,
    arrowColor = "#8100ef",
  } = props

  const accordionClass = cn(s.accordion, className)
  const summaryClass = cn(s.summary, summaryClassName, {
    [summaryActiveClassName || s.active]: active,
  })
  const headerClass = cn(s.header, headerClassName, {
    [headerActiveClassName || s.active]: active,
  })

  return (
    <Accordion className={accordionClass}>
      <AccordionSummary
        className={summaryClass}
        expandIcon={
          <Icon
            type={active ? iconOpenType : iconType}
            className={iconWrapped ? s.icon_wrapped : s.icon}
            color={arrowColor}
          />
        }
        onClick={() => {
          setActive(!active)
        }}
      >
        <span className={headerClass}>{active ? header : headerCollapsed}</span>
        <span className={openTitleClassName}>{openTitle}</span>
      </AccordionSummary>
      <AccordionDetails className={s.details}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordion
