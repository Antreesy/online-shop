import s from "./SupportSection.module.scss"
import image from './image.png'
import Image from "next/image"
import { Button } from "UI"

const SupportSection = () => {
    return (
        <section className={s.supportSection}>
            <div className="img">
                <Image src={image} alt='keks' width={300} height={350} />
            </div>
            <div className="content">
                <Button>
                    
                </Button>
            </div>
        </section>
    )
}
export default SupportSection;