import React, { useState } from "react"
import cn from "classnames"

import { Accordion } from "UI"

import s from "./notification.module.scss"

interface NotificationProps {
  read?: boolean
  className?: string
  header: React.ReactNode
  children: React.ReactNode
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { header, read, children, className } = props
  const [isRead, setIsRead] = useState<boolean>(read ?? false)

  const notificationClass = cn(s.notification, className)

  return (
    <div className={notificationClass} onClick={() => setIsRead(true)}>
      <Accordion
        className={s.accordion}
        header={header}
        headerClassName={s.header}
        openTitle="Detail"
        openTitleClassName={s.openTitle}
      >
        {children}
      </Accordion>
    </div>
  )
}

export default Notification
