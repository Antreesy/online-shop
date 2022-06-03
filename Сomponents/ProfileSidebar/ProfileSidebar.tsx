import React, { useState } from "react"
import sidebar from "./profileSidebar.module.scss"
import { DesktopSidebar } from "./DesktopSidebar"
import {Accordion} from "../../UI";
import Link from "next/link";

interface ProfileSidebarProps {
  labels: {
    link: string
    text: string
    content?: {
      link: string
      text: string
    }[]
  }[]
}
export const ProfileSidebar: React.FC<ProfileSidebarProps> = (props) => {
  const { labels } = props
  const [active, setActive] = useState<string>("")
  const handleClick = (label: string) => setActive(label)

  return (
    <div className={sidebar.profileSidebar}>
      <div className={sidebar.headerSidebar}>
        <p>MY ACCOUNT</p>
      </div>

          <Accordion header={"hello"} className={sidebar.mobileAccordion}>
            <div className={sidebar.menuSidebarMobile}>
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
          </Accordion>

          <DesktopSidebar
              labels={labels}
              active={active}
              handleClick={handleClick}
          />
    </div>
  )
}
