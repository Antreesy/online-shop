import Link from "next/link"
import { Button, SocialIcon } from "UI"
import { Logo } from "Сomponents"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import s from "./header.module.scss"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <span className={s.email}>info@ilonsi.com</span>
        <span className={s.caption}>
          lipsum as it is sometimes known, is dummy
        </span>
        <div className={s.socials}>
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="youtube" />
        </div>
      </div>
      <div className={s.header__bottom}>
        <div className={s.bottom_left_group}>
          <BurgerMenu />
          <Button
            className={s.header__button}
            icon
            disableElevation
            iconLeft="search"
          />
        </div>

        <Link href={"/"}>
          <a className={s.header__logo}>
            <Logo type="light" />
          </a>
        </Link>

        <div className={s.bottom_right_group}>
          <Button
            className={s.header__button}
            disableElevation
            iconLeft="account"
          >
            Yalçın Topkaya
          </Button>
          <Button
            className={s.header__button}
            disableElevation
            iconLeft="basket"
          >
            Basket
          </Button>
          <Button
            className={s.header__lang}
            disableElevation
            iconRight="arrow_down"
          >
            En
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
