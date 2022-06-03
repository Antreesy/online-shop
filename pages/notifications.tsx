import { NextPage } from "next"
import Head from "next/head"

import { Footer, Header, ProfileSidebar, Notification } from "Сomponents"
import { Button, Icon, Tabs } from "UI"

import { footerNav } from "shared/constants/footernav"

import s from "../styles/pages/notification.module.scss"
import {
  notificationsAll,
  notificationsNew,
  notificationsRead,
} from "shared/constants/notifications"

const FaqPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ILONSI SHOP | Notification page</title>
      </Head>

      <Header withBreadCrumbs />

      <main className={s.main}>
        <div className={s.container}>
          <div className={s.notfLabel}>
            <div>
              <Icon type="bell_filled" className={s.notfIcon} />
              <div>Notification</div>
            </div>
            <div>
              <Button
                className={s.notfBtn}
                icon
                iconLeft="minus"
                rounded
                variant="text"
              />
            </div>
          </div>

          <div className={s.aside}>
            <ProfileSidebar
              title={"My Account"}
              labels={[
                { link: "/account/profile", text: "Profile" },
                { link: "/account/address", text: "Address" },
                { link: "/account/orders", text: "Orders" },
                { link: "/account/payment", text: "Payment" },
                { link: "/account/notifications", text: "Notifications" },
                { link: "/account/favorites", text: "Favorites" },
                { link: "/account/help", text: "Help" },
                { link: "/account/signout", text: "Sign Out" },
              ]}
            />
          </div>

          <div className={s.content}>
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
          </div>
        </div>
      </main>
      <Footer links={footerNav} />
    </>
  )
}

export default FaqPage
