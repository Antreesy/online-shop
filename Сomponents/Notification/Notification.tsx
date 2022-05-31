import React from "react"
import { Accordion } from "UI"
import s from "./notification.module.scss"

interface NotificationProps {
  header: React.ReactNode
  setIsRead: (isRead: boolean) => void
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { header, setIsRead } = props
  return (
    <div className={s.notification} onClick={() => setIsRead(true)}>
      <Accordion
        className={s.accordion}
        header={header}
        headerClassName={s.header}
        openTitle="Detail"
        openTitleClassName={s.openTitle}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam sequi
        vitae eius iusto perspiciatis facilis nesciunt dignissimos provident
        ipsum? Nobis repellat atque ab nam magni voluptas expedita facere
        recusandae.
      </Accordion>
    </div>
  )
}

export default Notification
