import React from 'react';
import cn from "classnames";
import s from "./StatisticButton.module.scss";
import {Icon} from "UI";
import {IconType} from "shared/interfaces/iconTypes";
import dayjs from "dayjs";

export interface StatisticButtonProps {
	onClick: () => void,
	appearance: 'purple' | 'white',
	icon: IconType,
	lastUpdate?: Date | string,
	rightIcon?: boolean,
	title:string,
	totalNumber:number
}

const StatisticButton: React.FC<StatisticButtonProps> = (props) => {
	const {
		onClick,
		appearance,
		lastUpdate,
		rightIcon = false,
		icon,
		title,
		totalNumber
	} = props;

	return (
		<div
			onClick={onClick}
			className={cn(s.main, {
				[s.purple]: appearance === 'purple',
				[s.white]: appearance === 'white'
			})}
		>
			<div className={s.insideMedium}>
				<div className={s.squareMedium}>
					<Icon type={icon} className={s.squareIconMedium}/>
				</div>
				<div className={s.textBox}>
					<p className={s.totalTitle}>{title}</p>
					<p className={s.totalNumber}>{totalNumber}</p>
					<p className={s.lastUpdate}>Last Updated: <span>{dayjs(lastUpdate).format('llll')}</span></p>
				</div>
				{rightIcon && (
					<div className={s.rightImage}>
						<Icon type={icon} className={s.rightIcon}/>
					</div>
				)}
			</div>
		</div>
	);
};

export default StatisticButton;
