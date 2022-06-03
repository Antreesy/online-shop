import Image from "next/image"
import cn from "classnames"

import image from "public/assets/img/support-section-image.png"
import { Button } from "UI"

import s from "./SupportSection.module.scss"

const SupportSection = () => {
  return (
    <section className={s.supportSection}>
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
          <Button className={s.button}>I have a question about my order</Button>
          <Button
            className={cn(s.button, s.button_outlined)}
            variant="outlined"
          >
            I have a different question
          </Button>
        </div>
      </div>
    </section>
  )
}
export default SupportSection
