import Link from "next/link"
import { Logo } from "Сomponents"

import s from "./header.module.scss"
import cn from "classnames"

interface HeaderLightProps {
  withLine?: boolean
}

const HeaderLight: React.FC<HeaderLightProps> = ({ withLine }) => {
  const headerClassName = cn(s.header_light, { [s.line]: withLine })

  return (
    <header className={headerClassName}>
      <Link href={"/"}>
        <a className={s.logo}>
          <Logo type="dark" />
        </a>
      </Link>
    </header>
  )
}

export default HeaderLight
