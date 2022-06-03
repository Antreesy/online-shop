import Image from "next/image"

import { Button, Icon } from "UI"

import cn from "classnames"

import s from "./Background.module.scss"
import { useState } from "react"
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
    const [linkf, stlink] = useState(link)

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
                        className={s.title}
                        editable={isEditable}

                    />
                    <Input
                        className={s.linkMobile}
                        value={'@' + link}
                        editable={isEditable}
                    />
                </div>
                <div className={s.text}>
                    <span className={s.description}>{description}</span>
                    <div >
                        <Input
                            className={s.l}
                            value={'@' + link}
                            editable={isEditable}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Background
