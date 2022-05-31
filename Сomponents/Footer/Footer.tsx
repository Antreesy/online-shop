import { List } from "@mui/material"
import Link from "next/link"
import { Button, SocialIcon } from "UI"
import { Logo } from "Сomponents"

import s from "./Footer.module.scss"

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <div className={s.footer__left}>
          <Link href={"/"}>
            <a className={s.footer__logo}>
              <Logo type="light" />
            </a>
          </Link>
          <div className={s.socials}>
            <SocialIcon type="facebook" />
            <SocialIcon type="instagram" />
            <SocialIcon type="youtube" />
          </div>
          <p className={s.footer__text}>
            Lorem Ipsum is simply dummy text of the printing and been the
            industry’s standard dummy text 1500s, when an unknown printer took a
            galley of type make a type specimen book. It has survived n
          </p>
        </div>
        <div className={s.footer__right}>
          <div className={s.footer__form}>
            <h4>News Letter</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and been the
              industry’
            </p>
            <form>
              <input type="text" placeholder="E-mail" />
              <Button className={s.footer__button} disableElevation>
                Send
              </Button>
            </form>
          </div>
          <nav className={s.footer__navigate}>
            <List>
              <h4>About Us</h4>
              <Link href={"/"}>Hakkımızda</Link>
              <Link href={"/"}>İnsan Kaynakları</Link>
              <Link href={"/"}>Kurumsal</Link>
              <Link href={"/"}>Markalar</Link>
            </List>
            <List>
              <h4>Membership</h4>
              <Link href={"/"}>Lorem Ipsum is simply </Link>
              <Link href={"/"}>dummy text of the printing</Link>
              <Link href={"/"}>and been the industry’s</Link>
              <Link href={"/"}>standard dummy text</Link>
            </List>
            <List>
              <h4>Categories</h4>
              <Link href={"/"}>Lorem Ipsum</Link>
              <Link href={"/"}>dummy text of</Link>
              <Link href={"/"}>printing and</Link>
              <Link href={"/"}>beenindustry’s</Link>
              <Link href={"/"}>standard dummy text</Link>
            </List>
            <List>
              <h4>Ilonsi</h4>
              <Link href={"/"}>Lorem Ipsum </Link>
              <Link href={"/"}>dummy text of</Link>
              <Link href={"/"}>printing and beenindustry’s</Link>
            </List>
            <List>
              <h4>Contact</h4>
              <Link href={"/"}>Lorem Ipsum</Link>
              <Link href={"/"}>dummy text of</Link>
              <Link href={"/"}>printing and</Link>
              <Link href={"/"}>beenindustry’s</Link>
              <Link href={"/"}>standard dummy text</Link>
            </List>
          </nav>
        </div>
      </div>
      <span className={s.footer__span}>Bigfil Project House</span>
    </footer>
  )
}

export default Footer
