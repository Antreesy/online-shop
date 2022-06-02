import Image from "next/image"

import { Button, Icon } from "UI"

import cn from "classnames"

import s from "./Background.module.scss"
import { useRef, useState } from "react"
import Input from "./Input"
interface BackgroundProps {
    image: any
    title?: string
    description?: string
    link?: string
    actionText?: string,
    isEditable?: boolean,
    onActionClick?: (value: string | number | boolean) => void
}

const Background: React.FC<BackgroundProps> = (props) => {
    const { image, title, description, link, isEditable = false } = props

    const ref = useRef()
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
                    <Input
                        value={title}
                        iconVisible={isEditable}
                        className={s.title}
                    />
                    <Input
                        iconClassname={s.icon}
                        className={s.linkMobile}
                        value={'@' + link}
                        iconVisible={isEditable}
                    />
                </div>
                <div className={s.text}>
                    <span className={s.description}>{description}</span>
                    <div >
                        <Input
                            value={link}
                            iconVisible={isEditable}
                            className={s.link}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Background
