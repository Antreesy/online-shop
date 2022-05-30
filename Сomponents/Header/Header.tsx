import { Button } from "UI"
import s from "./header.module.scss"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <span className={s.email}>info@ilonsi.com</span>
        <span className={s.caption}>lipsum as it is sometimes known, is dummy</span>
        <div className={s.socials}>
          <span>fb </span>
          <span>in </span>
          <span>yt</span>
        </div>
      </div>
      <div className={s.header__bottom}>
        <div className="burger">burger</div>
        <Button />
      </div>
    </header>
  )
}

export default Header
