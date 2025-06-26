import React from 'react';
import {
	FaCheck,
	FaTimes,
	FaCog,
	FaUser,
	FaHome,
	FaStar,
	FaSearch,
	FaHeart,
	FaBell,
	FaArrowLeft,
	FaArrowRight,
	FaRegCopy,
	FaExclamationTriangle,
	FaCheckCircle,
	FaExclamationCircle,
} from 'react-icons/fa';
import styles from './Icons.module.scss';

export interface IconProps
	extends React.SVGProps<SVGSVGElement> {
	name?: IconName;
	svg?: React.ReactNode;
	imgSrc?: string;
	size?: number | string;
	color?: string;
	className?: string;
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	sizeVariant?: 'small' | 'medium' | 'large';
}

export type IconName =
	| 'check'
	| 'close'
	| 'settings'
	| 'user'
	| 'home'
	| 'star'
	| 'search'
	| 'heart'
	| 'bell'
	| 'arrow-left'
	| 'arrow-right'
	| 'copy'
	| 'warning'
	| 'success'
	| 'danger';

const icons: Record<IconName, React.ComponentType<any>> = {
	'check': FaCheck,
	'close': FaTimes,
	'settings': FaCog,
	'user': FaUser,
	'home': FaHome,
	'star': FaStar,
	'search': FaSearch,
	'heart': FaHeart,
	'bell': FaBell,
	'arrow-left': FaArrowLeft,
	'arrow-right': FaArrowRight,
	'copy': FaRegCopy,
	'warning': FaExclamationTriangle,
	'success': FaCheckCircle,
	'danger': FaExclamationCircle,
};

export const Icons: React.FC<IconProps> = ({
	name,
	svg,
	imgSrc,
	size = 24,
	color = 'currentColor',
	className = '',
	variant,
	sizeVariant,
	children,
	...props
}) => {
	const IconComponent = name ? icons[name] : undefined;
	const classes = [
		styles.icon,
		sizeVariant && styles[`icon--${sizeVariant}`],
		variant && styles[`icon--${variant}`],
		className,
	]
		.filter(Boolean)
		.join(' ');

	if (svg) {
		return (
			<span
				className={classes}
				style={{ fontSize: size, color }}
				{...props}
			>
				{svg}
			</span>
		);
	}

	if (imgSrc) {
		return (
			<img
				src={imgSrc}
				alt={name || 'icon'}
				className={classes}
				style={{ width: size, height: size, color }}
				{...(props as any)}
			/>
		);
	}

	if (children) {
		return (
			<span
				className={classes}
				style={{ fontSize: size, color }}
				{...props}
			>
				{children}
			</span>
		);
	}

	if (IconComponent) {
		return (
			<IconComponent
				size={size}
				color={color}
				className={classes}
				{...props}
			/>
		);
	}

	return null;
};

export default Icons;
