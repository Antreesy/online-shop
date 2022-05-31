import cn from "classnames"

import s from "./sectionHeader.module.scss"

interface SectionHeaderProps {
  title?: string
  actionText?: string
  className?: string
  onActionClick?: () => void
}

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  const { title, actionText, className, onActionClick } = props

  const sectionHeaderClass = cn(s.sectionHeader, className)

  return (
    <div className={sectionHeaderClass}>
      <p className={s.title}>{title}</p>
      {!!actionText && (
        <a href="#" onClick={onActionClick} className={s.actionText}>
          {actionText}
        </a>
      )}
    </div>
  )
}

export default SectionHeader
