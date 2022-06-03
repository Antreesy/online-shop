import cn from "classnames"

import { Accordion } from "UI"
import Image from "next/image"

import s from "./notification.module.scss"

interface NotificationProps {
  isRead?: boolean
  className?: string
  children: React.ReactNode
  onClick?: (id: number) => void
  id: number
  title: string
  subtitle?: string
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { isRead, children, className, onClick, id, title, subtitle } = props

  const notificationClass = cn(s.notification, className)
  const titleBlock = (
    <>
      <Image src="/dot.png" layout="fill" />
      <span>{title}</span>
    </>
  )

  return (
    <div className={notificationClass} onClick={() => onClick && onClick(id)}>
      <Accordion
        className={s.accordion}
        header={titleBlock}
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
