import { useState } from "react"
import cn from "classnames"

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

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
  detailsClassName?: string
  detailsActiveClassName?: string
  openTitleClassName?: string
  arrowColor?: string
  onClick?: () => void
  iconClassName?: string
  initialOpen?: boolean
}

const CustomAccordion: React.FC<AccordionProps> = (props) => {
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
    detailsClassName,
    detailsActiveClassName,
    openTitleClassName,
    arrowColor = "#8100ef",
    onClick,
    iconClassName,
    initialOpen = false,
  } = props

  const [active, setActive] = useState(false)

  const accordionClass = cn(s.accordion, className)
  const summaryClass = cn(s.summary, summaryClassName, {
    [summaryActiveClassName || s.active]: active,
  })
  const headerClass = cn(s.header, headerClassName, {
    [headerActiveClassName || s.active]: active,
  })

  const detailsClass = cn(s.details, detailsClassName, {
    [detailsActiveClassName || s.active]: active,
  })

  const handleClick = () => {
    setActive(!active)
    onClick?.()
  }

  return (
    <Accordion defaultExpanded={initialOpen} className={accordionClass}>
      <AccordionSummary
        className={summaryClass}
        onClick={handleClick}
        expandIcon={
          <Icon
            type={active ? iconOpenType : iconType}
            className={cn(iconWrapped ? s.icon_wrapped : s.icon, iconClassName)}
            color={arrowColor}
          />
        }
      >
        <span className={headerClass}>{active ? header : headerCollapsed}</span>
        <span className={openTitleClassName}>{openTitle}</span>
      </AccordionSummary>
      <AccordionDetails className={detailsClass}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordion
