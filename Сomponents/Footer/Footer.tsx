import Link from "next/link"
import { Logo } from "Сomponents"
import { Button, SocialIcon } from "UI"
import { Navigation, NavigationProps } from "./Navigation"

import s from "./footer.module.scss"

const Footer: React.FC<NavigationProps> = ({ links }) => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.content}>
          <div className={s.left_group}>
            <div className={s.left_top_group}>
              <Link href={"/"}>
                <a className={s.logo}>
                  <Logo type="light" />
                </a>
              </Link>

              <div className={s.socials}>
                <SocialIcon type="facebook" />
                <SocialIcon type="instagram" />
                <SocialIcon type="youtube" />
              </div>
            </div>

            <p className={s.left_group_description}>
              Lorem Ipsum is simply dummy text of the printing and been the
              industry’s standard dummy text 1500s, when an unknown printer took
              a galley of type make a type specimen book. It has survived n
            </p>
          </div>

          <div className={s.right_group}>
            <div className={s.news_letter}>
              <h4 className={s.news_letter_caption}>News Letter</h4>
              <p className={s.news_letter_descr}>
                Lorem Ipsum is simply dummy text of the printing and been the
                industry’
              </p>
              <form className={s.news_letter_form}>
                <input
                  className={s.news_letter_input}
                  type="email"
                  placeholder="E-mail"
                />
                <Button className={s.news_letter_button} disableElevation>
                  Send
                </Button>
              </form>
            </div>

            <Navigation links={links} />
          </div>
        </div>
      </footer>
      <div className={s.copyright}>
        <span>ILONSI © Copyright</span>
        <span>Bigfil Project House</span>
      </div>
    </>
  )
}

export default Footer
