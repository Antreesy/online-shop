import cn from "classnames"

import s from "./sectionHeader.module.scss"

interface SectionHeaderProps {
  title?: string
  actionItem?: React.ReactNode
  className?: string
  onActionClick?: () => void
  noDecor?: boolean
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, actionItem, className, onActionClick, noDecor } = props

  const sectionHeaderClass = cn(
    s.section_header,
    { [s.with_decor]: !noDecor },
    className,
  )

  return (
    <div className={sectionHeaderClass}>
      <p className={s.title}>{title}</p>
      {!!actionItem && (
        <a
          href="#"
          onClick={onActionClick}
          className={cn({ [s.action_text]: typeof actionItem === "string" })}
        >
          {actionItem}
        </a>
      )}
    </div>
  )
}

export default SectionHeader
