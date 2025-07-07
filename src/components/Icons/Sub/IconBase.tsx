import React from 'react';
import { icons } from './IconMap';
import type { IconProps } from './IconTypes';
import styles from '../Icons.module.scss';

// Only allow HTML span props for <span> elements
function filterSpanProps(props: any) {
	const { ref, ...rest } = props;
	return rest;
}

// Normalize sizeVariant to support 's', 'm', 'l' as aliases
function normalizeSizeVariant(sizeVariant?: string) {
	if (!sizeVariant) return undefined;
	switch (sizeVariant) {
		case 's':
			return 'small';
		case 'm':
			return 'medium';
		case 'l':
			return 'large';
		default:
			return sizeVariant;
	}
}

const IconBase: React.FC<IconProps> = ({
	name,
	svg,
	imgSrc,
	size,
	color = 'currentColor',
	className = '',
	variant,
	sizeVariant,
	children,
	...props
}) => {
	const IconComponent = name ? icons[name] : undefined;
	let normalizedSizeVariant =
		normalizeSizeVariant(sizeVariant);

	// If neither size nor sizeVariant is provided, default to 'small'
	if (size === undefined && !normalizedSizeVariant) {
		normalizedSizeVariant = 'small';
	}

	// Compose class names for variant and sizeVariant
	const classes = [
		styles.icon,
		variant ? styles[`icon--${variant}`] : '',
		normalizedSizeVariant ?
			styles[`icon--${normalizedSizeVariant}`]
		:	'',
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Only set fontSize, width, height if size is explicitly provided
	const style =
		size !== undefined ?
			{ fontSize: size, width: size, height: size, color }
		:	{ color };

	if (imgSrc) {
		return (
			<img
				src={imgSrc}
				alt={name || 'icon'}
				className={classes}
				style={style}
				{...(props as any)}
			/>
		);
	}

	if (children) {
		return (
			<span
				className={classes}
				style={style}
				{...filterSpanProps(props)}
			>
				{children}
			</span>
		);
	}

	if (svg) {
		return (
			<span
				className={classes}
				style={style}
				{...filterSpanProps(props)}
			>
				{svg}
			</span>
		);
	}

	if (IconComponent) {
		// If size is provided, pass it; otherwise, let SVG use 1em for width/height
		const iconProps =
			size !== undefined ?
				{ width: size, height: size }
			:	{ width: '1em', height: '1em' };
		return (
			<IconComponent
				size={undefined} // Don't pass size prop down
				color={color}
				className={classes}
				style={style}
				{...iconProps}
				{...props}
			/>
		);
	}

	return null;
};

export default IconBase;
