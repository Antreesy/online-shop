import { NextPage } from "next"
import Head from "next/head"

import { Notification } from "Сomponents"
import { Tabs } from "UI"

import {
  notificationsAll,
  notificationsNew,
  notificationsRead,
} from "shared/constants/notifications"

import s from "styles/pages/account/notifications.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Notifications</title>
      </Head>

      <Tabs
        className={s.notification_tabs}
        variant="spaces"
        labels={[
          "Unread Notifications",
          "Read Notifications",
          "All Notifications",
        ]}
        values={[
          <div key={"Unread Notifications"} className={s.notfItem}>
            {notificationsNew
              ? notificationsNew.map((element) => {
                  return (
                    <Notification
                      key={element.id}
                      id={element.id}
                      isRead={element.isRead}
                      title={element.title}
                      subtitle={element.subtitle}
                    >
                      {element.children}
                    </Notification>
                  )
                })
              : "There are no notifications yet"}
          </div>,

          <div key={"Read Notifications"} className={s.notfItem}>
            {notificationsRead
              ? notificationsRead.map((element) => {
                  return (
                    <Notification
                      key={element.id}
                      id={element.id}
                      isRead={element.isRead}
                      title={element.title}
                      subtitle={element.subtitle}
                    >
                      {element.children}
                    </Notification>
                  )
                })
              : "There are no notifications yet"}
          </div>,

          <div key={"All Notifications"} className={s.notfItem}>
            {notificationsAll
              ? notificationsAll.map((element) => {
                  return (
                    <Notification
                      key={element.id}
                      id={element.id}
                      isRead={element.isRead}
                      title={element.title}
                      subtitle={element.subtitle}
                    >
                      {element.children}
                    </Notification>
                  )
                })
              : "There are no notifications yet"}
          </div>,
        ]}
      />
    </>
  )
}

export default Profile
