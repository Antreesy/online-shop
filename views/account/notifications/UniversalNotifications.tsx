import { useTranslation } from "next-i18next"

import { Notification } from "Сomponents"
import { Tabs } from "UI"

import { NotificationProps } from "shared/interfaces/notificationProps"
import {
  notificationsAll,
  notificationsNew,
  notificationsRead,
} from "shared/constants/notifications"

import s from "styles/pages/account/notifications.module.scss"

interface NotificationListProps {
  list: NotificationProps[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UniversalNotificationsProps {}

const NotificationsList: React.FC<NotificationListProps> = ({ list }) => (
  <div className={s.notfItem}>
    {list
      ? list.map((element, index) => (
          <Notification
            key={index}
            id={element.id}
            isRead={element.isRead}
            title={element.title}
            subtitle={element.subtitle}
          >
            {element.children}
          </Notification>
        ))
      : "There are no notifications yet"}
  </div>
)

const UniversalNotifications: React.FC = () => {
  const { t } = useTranslation("notifications")
  return (
    <Tabs
      className={s.notification_tabs}
      variant="spaces"
      labels={[t("unread"), t("read"), t("all")]}
      values={[
        <NotificationsList
          key={"Unread Notifications"}
          list={notificationsNew}
        />,

        <NotificationsList
          key={"Read Notifications"}
          list={notificationsRead}
        />,

        <NotificationsList key={"All Notifications"} list={notificationsAll} />,
      ]}
    />
  )
}

export default UniversalNotifications
