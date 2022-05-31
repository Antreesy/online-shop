import React from "react";
import s from "./sectionHeader.module.scss"

interface SectionHeaderProps {
    title?: string,
    actionText: String,
    onActionClick?:()=>void,
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title="Favorites" , actionText="", onActionClick}) => {
    return (
        <div className={s.sectionHeader}>
            <p className={s.sectionHeader__title}>{title}</p>
            <p className={s.sectionHeader__actionText} onClick={onActionClick}>{actionText}</p>
            <div className={s.circle}></div>
        </div>
    )
};

export default SectionHeader;