import cn from "classnames"
import { useState } from "react"

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
  const [isRead, setIsRead] = useState<boolean>(props.isRead || false)
  const { children, className, onClick, id = 0, title, subtitle } = props

  const notificationClass = cn(s.notification, className)
  const titleClass = cn(s.title_span, { [s.read]: isRead })
  return (
    <div className={notificationClass} onClick={() => onClick && onClick(id)}>
      <Accordion
        className={s.accordion}
        header={<span className={titleClass}>{title}</span>}
        headerClassName={s.title}
        openTitle={subtitle || "Detail"}
        openTitleClassName={s.open_title}
        onClick={() => {
          setIsRead(true)
        }}
      >
        {children}
      </Accordion>
    </div>
  )
}

export default Notification
