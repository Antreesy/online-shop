import { NextPage } from "next"
import Head from "next/head"

import { Footer, Header, ProfileSidebar, Notification } from "Сomponents"
import { Button, Icon, Tabs } from "UI"

import { footerNav } from "shared/constants/footernav"

import s from "../styles/pages/notification.module.scss"

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
            <p>
              <Icon type="bell_filled" className={s.notfIcon} />
              <div>Notification</div>
            </p>{" "}
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
            <ProfileSidebar labels={[]} />
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
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                </div>,

                <div key={"Read Notifications"} className={s.notfItem}>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
                </div>,

                <div key={"All Notifications"} className={s.notfItem}>
                  <Notification header={"Notification"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tempore, id sint odit laborum, perferendis eius repudiandae
                    eligendi consequuntur sed numquam quod cumque aspernatur
                    reprehenderit ea, magnam nam omnis delectus accusamus!
                  </Notification>
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
