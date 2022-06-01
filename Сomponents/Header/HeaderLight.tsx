import Link from "next/link"
import { Logo } from "Сomponents"

import s from "./header.module.scss"

const HeaderLight: React.FC = () => {
  return (
    <header className={s.header_light}>
      <Link href={"/"}>
        <a className={s.logo}>
          <Logo type="dark" />
        </a>
      </Link>
    </header>
  )
}

export default HeaderLight
