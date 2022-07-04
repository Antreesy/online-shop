import Link from "next/link"
import { Logo } from "Сomponents"
import { Button, Input, SocialIcon } from "UI"
import { Navigation, NavigationProps } from "./Navigation"

import s from "./footer.module.scss"
import { useState } from "react"

const Footer: React.FC<NavigationProps> = ({ links }) => {
  const [value, setValue] = useState<string>("")
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
                <Input
                  variant="footer"
                  value={value}
                  setValue={setValue}
                  buttonLabel={"Send"}
                  placeholder={"E-mail"}
                  className={s.footer_input}
                />
              </form>
            </div>

            <Navigation links={links} />
          </div>
        </div>
      </footer>
      <div className={s.copyright}>
        <span>ILONSI © Copyright</span>
      </div>
    </>
  )
}

export default Footer
