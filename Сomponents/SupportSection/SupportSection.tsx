import image from 'public/assets/img/support-section-image.png'
import Image from "next/image"
import { Button } from "UI"
import cn from 'classnames'
import s from "./SupportSection.module.scss"

const SupportSection = () => {
    return (
        <section className={s.supportSection}>
            <div className={s.img}>
                <Image src={image} alt='keks' width={300} height={350} />
            </div>
            <div className={s.content}>
                <h1 className={s.heading}>Hello</h1>
                <h3 className={s.subTitle}>
                    How we can help you?
                </h3>
                <p className={s.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, ducimus soluta et quod sapiente nostrum animi corporis. Minima, praesentium aut.
                </p>
                <div className={s.buttons}>
                    <Button className={s.btn}>
                        I have a question about my order
                    </Button>
                    <Button className={cn(s.btn, s.btnItem)} variant="outlined">
                        I have a different question
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default SupportSection;