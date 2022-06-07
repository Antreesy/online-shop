import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { Accordion, Icon } from "UI"
import s from "./profileSidebar.module.scss"



type LabelType = {
  link: string
  text: string
}

type LabelTypeWithContent = LabelType & {
  content?: LabelType[]
}

interface ProfileSidebarProps {
  title: string
  labels: LabelTypeWithContent[]
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = (props) => {
  const { title, labels } = props
  const { pathname } = useRouter()

  const SidebarItem = ({ label }: { label: LabelType }) => {
    return (
      <li>
        {pathname === label.link ? <Icon type="account"/> : null}
        <Link href={label.link}>
          <a className={pathname === label.link ? `${s.active}` : undefined}>
            {label.text}
          </a>
        </Link>
      </li>
    )
  }

  const AccordionSidebarItem = ({ label }: { label: LabelTypeWithContent }) => {
    return (
      <Accordion header={label.text} className={s.accordion}>
        <ul>
          {label.content?.map((item, index) => (
            <SidebarItem key={index} label={item} />
          ))}
        </ul>
      </Accordion>
    )
  }

  const MenuList = ({ labels }: { labels: LabelTypeWithContent[] }) => {
    return (
      <div className={s.menuSidebar}>
        {labels.length ? (
          <ul>
            {labels.map((label, index) =>
              label.content && label.content.length ? (
                <AccordionSidebarItem key={index} label={label} />
              ) : (
                <SidebarItem key={index} label={label} />
              ),
            )}
          </ul>
        ) : (
          <span>No item in sidebar</span>
        )}
      </div>
    )
  }

  return (
    <>
      <div className={s.desktop}>
        <div className={s.profileSidebar}>
          <div className={s.headerSidebar}>
            <p>{title}</p>
          </div>
          <MenuList labels={labels} />
        </div>
      </div>

      <div className={s.mobile}>
        <div className={s.profileSidebar}>
          <Accordion
            header={title}
            className={s.mobileAccordion}
            headerClassName={s.headerSidebar}
          >
            <MenuList labels={labels} />
          </Accordion>
        </div>
      </div>
    </>
  )
}
