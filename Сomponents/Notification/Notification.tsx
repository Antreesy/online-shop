import cn from "classnames"

import { Accordion } from "UI"

import s from "./notification.module.scss"

interface NotificationProps {
  isRead?: boolean
  className?: string
  children: React.ReactNode
  onClick?: (id: number) => void
  id?: number
  title: string
  subtitle?: string
}

const Notification: React.FC<NotificationProps> = (props) => {
  const {
    isRead,
    children,
    className,
    onClick,
    id = 0,
    title,
    subtitle,
  } = props

  const notificationClass = cn(s.notification, className)

  return (
    <div className={notificationClass} onClick={() => onClick && onClick(id)}>
      <Accordion
        className={s.accordion}
        header={<span className={s.title_span}>{title}</span>}
        headerClassName={s.title}
        openTitle="Detail"
        openTitleClassName={s.openTitle}
      >
        {children}
      </Accordion>
    </div>
  )
}

export default Notification
