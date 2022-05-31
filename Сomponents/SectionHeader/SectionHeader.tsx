import React from "react";
import s from "./sectionHeader.module.scss"

interface SectionHeaderProps {
    title?: string,
    actionText: String,
    onActionClick?:()=>void,
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title , actionText, onActionClick}) => {
    return (
        <div className={s.sectionHeader}>
            <p className={s.sectionHeader__title}>{title}</p>
            <p><a href="#" onClick={onActionClick} className={s.sectionHeader__actionText}>{actionText}</a></p>
        </div>
    )
};

export default SectionHeader;