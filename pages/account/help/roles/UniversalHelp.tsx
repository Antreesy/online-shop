import { NextPage } from "next"
import cn from "classnames"

import Image from "next/image"
import { Accordion, Button } from "UI"

import image from "public/assets/img/support-section-image.png"
import { questions } from "shared/constants/questions"

import s from "styles/pages/account/help.module.scss"

const Profile: NextPage = () => {
  return (
    <>
      <div className={s.support_section}>
        <div className={s.img}>
          <Image src={image} alt="support" width={350} height={400} />
        </div>

        <div className={s.content}>
          <h3 className={s.subTitle}>Hello</h3>
          <h1 className={s.title}>How we can help you?</h1>
          <p className={s.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
            ducimus soluta et quod sapiente nostrum animi corporis. Minima,
            praesentium aut.
          </p>

          <div className={s.buttons_wrapper}>
            <Button className={s.button}>
              I have a question about my order
            </Button>
            <Button
              className={cn(s.button, s.button_outlined)}
              variant="outlined"
            >
              I have a different question
            </Button>
          </div>
        </div>
      </div>

      <h1 className={s.faq_heading}>FAQ</h1>
      <div className={s.faq_accordions}>
        {questions.map(({ header, content }, index) => {
          return (
            <Accordion
              key={index}
              header={header}
              headerClassName={s.acc_header}
            >
              <p className={s.acc_description}>{content}</p>
            </Accordion>
          )
        })}
      </div>
    </>
  )
}

export default Profile
