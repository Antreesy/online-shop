import Image from "next/image"

import { Button, Icon } from "UI"

import s from "./Background.module.scss"
interface BackgroundProps {
    image: string
    title?: string
    description?: string
    link?: string
    actionText?: string,
    isEditable?: boolean,
    onActionClick?: (value: string | number | boolean) => void
}

const Background: React.FC<BackgroundProps> = (props) => {
    const { image, title, description, link, isEditable = false } = props
    return (
        <div className={s.fallbackItem}>
            <div className={s.image}>
                <Image src={image} className={s.bg} />
            </div>
            <div className={s.btn}>
                <Button className={s.bgButton} variant="outlined">
                    Link Button{" "}
                </Button>
            </div>
            <div className={s.content}>
                <div className={s.titleBox}>
                    <div className={s.title}>{isEditable ? <Icon type="edit" /> : null}{title}</div>
                    <span className={s.linkMobile}>@fkjkkkkjkjkj</span>
                </div>
                <div className={s.text}>
                    <span className={s.description}>{description}</span>
                    {link ? <span className={s.link}>@{link}{isEditable ? <Icon type="edit" /> : null}</span> : null}
                </div>
            </div>
        </div>
    )
}
export default Background
