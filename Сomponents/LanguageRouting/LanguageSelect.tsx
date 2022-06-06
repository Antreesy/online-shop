import { i18n } from 'next-i18next'
import Link from 'next/link'
import React, { useState } from 'react'

import { Button, Popover, Typography } from '@mui/material'
import { Icon } from 'UI'
import { languages } from 'shared/constants/languages'

import cn from 'classnames'
import s from './LanguageSelect.module.scss'



const LanguageSelect: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick} className={s.langNav}>
                <span className={s.span}>{i18n?.language}</span> <Icon type='arrow_down' />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography>
                    <div className={s.langBottom}>
                        {languages.map((item) => {
                            return (

                                <span className={cn(s.item, { [s.disabled]: item.code === i18n?.language })}>
                                    <Link
                                        href=""
                                        locale={item.code}
                                        onClick={() => { i18n?.changeLanguage(item.code) }}

                                    >
                                        {item.title}
                                    </Link>
                                </span>
                            )
                        })}
                    </div>
                </Typography>
            </Popover>
        </div >
    );
}
export default LanguageSelect
