import React from "react"
import sidebar from "./profileSidebar.module.scss"
import { Accordion } from "../../UI"
import Link from "next/link"

interface DesktopSidebarProps {
  labels: {
    link: string
    text: string
    content?: {
      link: string
      text: string
    }[]
  }[]
  active: string
  handleClick: React.EventHandler<any>
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = (props) => {
  const { labels, active, handleClick } = props
  return (
    <div className={sidebar.menuSidebarDesktop}>
      {labels.length ? (
        <ul>
          {labels.map((label, index) =>
            label.content ? (
              <Accordion
                header={label.text}
                key={index}
                className={sidebar.accordion}
              >
                <ul>
                  {label.content.map((item, index) => (
                    <li key={index} className={sidebar.AccordionLi}>
                      <Link href={""}>
                        <a
                          href="# "
                          className={
                            active === item.text
                              ? `${sidebar.active}`
                              : undefined
                          }
                          onClick={() => handleClick(item.text)}
                        >
                          {item.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ) : (
              <li key={index}>
                <Link href={""}>
                  <a
                    href="# "
                    className={
                      active === label.text ? `${sidebar.active}` : undefined
                    }
                    onClick={() => handleClick(label.text)}
                  >
                    {label.text}
                  </a>
                </Link>
              </li>
            ),
          )}
        </ul>
      ) : (
        <span>No item in sidebar</span>
      )}
    </div>
  )
}
