import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import Link from "next/link"
import { Accordion, Icon } from "UI"
import { IconType } from "shared/interfaces/iconTypes"

import s from "./profileSidebar.module.scss"

export type LabelType = {
  link: string
  text: string
  icon?: IconType
}

export type LabelTypeWithContent = LabelType & {
  content?: LabelType[]
}

interface ProfileSidebarProps {
  title: string
  labels: LabelTypeWithContent[]
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = (props) => {
  const { title, labels } = props
  const { pathname } = useRouter()
  const { t } = useTranslation("sidebar")

  const SidebarItem = ({ label }: { label: LabelType }) => {
    return (
      <li className={s.menu_item}>
        {label.icon && pathname === label.link ? (
          <Icon type={label.icon} />
        ) : null}
        <Link href={label.link}>
          <a className={pathname === label.link ? `${s.active}` : ""}>
            {t(label.text)}
          </a>
        </Link>
      </li>
    )
  }

  const MobileAccordionHeader = () => {
    const headerLabel = labels.find((label) => pathname === label.link)

    return (
      <>
        <Icon className={s.active_icon} type={headerLabel?.icon || "account"} />
        <span className={s.active}>{t(headerLabel?.text || title)}</span>
      </>
    )
  }

  const AccordionSidebarItem = ({ label }: { label: LabelTypeWithContent }) => {
    return (
      <Accordion className={s.accordion} header={t(label.text)}>
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
      <div className={s.menu_block}>
        {labels.length ? (
          <ul className={s.menu_list}>
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
      <div className={s.sidebar_wrapper}>
        <div className={s.desktop}>
          <div className={s.header_block}>
            <p className={s.title}>{title}</p>
          </div>
          <MenuList labels={labels} />
        </div>

        <div className={s.mobile}>
          <Accordion
            header={title}
            headerCollapsed={<MobileAccordionHeader />}
            headerClassName={s.title}
            summaryClassName={s.accordion_summary}
            summaryActiveClassName={s.accordion_summary_active}
            iconType="plus"
            iconOpenType="minus"
            iconWrapped
          >
            <MenuList labels={labels} />
          </Accordion>
        </div>
      </div>
    </>
  )
}
