import React from "react"
import { Accordion } from "UI"
import s from "./notification.module.scss"

interface NotificationProps {
  header: React.ReactNode
  setIsRead: (isRead: boolean) => void
  children: React.ReactNode
  className?: string
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { header, setIsRead, children, className } = props
  return (
    <div className={className ? s[className] : undefined}>
      <div className={s.notification} onClick={() => setIsRead(true)}>
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
    </div>
  )
}

export default Notification
