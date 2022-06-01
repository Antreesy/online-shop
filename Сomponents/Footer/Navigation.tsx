import Link from "next/link"
import { List } from "@mui/material"
import { Accordion } from "UI"

import s from "./footer.module.scss"

interface NavigationProps {
  links: {
    title: string
    content: { link: string; text: string }[]
  }[]
}

export const Navigation: React.FC<NavigationProps> = ({ links }) => (
  <>
    <nav className={s.navigation}>
      {links.map((group) => (
        <div key={group.title} className={s.nav_group}>
          <h4 className={s.nav_title}>{group.title}</h4>
          <List>
            {group.content.map((link) => (
              <Link key={link.text} href={link.link}>
                <a className={s.link}>{link.text}</a>
              </Link>
            ))}
          </List>
        </div>
      ))}
    </nav>

    <nav className={s.navigation_mobile}>
      {links.map((group) => (
        <Accordion
          key={group.title}
          header={group.title}
          className={s.accordion}
          headerClassName={s.accordion_header}
        >
          <List>
            {group.content.map((link) => (
              <Link key={link.text} href={link.link}>
                <a className={s.link}>{link.text}</a>
              </Link>
            ))}
          </List>
        </Accordion>
      ))}
    </nav>
  </>
)
