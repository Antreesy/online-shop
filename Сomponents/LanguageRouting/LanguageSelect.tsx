import { i18n } from 'next-i18next'
// import i18next from 'next-i18next'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from 'UI'
import s from './LanguageSelect.module.scss'
const langs = [
    { code: 'en', title: 'English' },
    { code: 'ru', title: 'Russian' },
]
// module.exports.i18n.defaultLanguage
export default function LanguageSelect() {
    const [visible, setVisible] = useState(false)

    return (
        // <div>
        <nav className={s.langNav} onClick={() => setVisible(!visible)}>
            <span className={s.span}>{i18n?.language}</span> <Icon type='arrow_down' />
            {
                visible && <div className={s.langBottom}>
                    {langs.map((item) => {
                        return (

                            // <span  >
                            <Link
                                className={'item'}
                                href="/"
                                locale={item.code}
                                onClick={() => { i18n?.changeLanguage(item.code) }}
                            >
                                {item.title}
                            </Link>
                            // </span>
                        )
                    })}
                </div>
            }
        </nav >

        // </div>
    )
}
