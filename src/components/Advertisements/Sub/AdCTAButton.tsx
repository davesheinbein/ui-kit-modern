import * as React from 'react';
import classNames from 'classnames';
import styles from '../advertisements.module.scss';

const AdCTAButton: React.FC<{
	ctaText?: string;
	onClick?: () => void;
	ctaClassName?: string;
	ctaStyle?: React.CSSProperties;
	ctaVariant?:
		| 'primary'
		| 'secondary'
		| 'ghost'
		| 'outline';
	ctaBackground?: string;
	ctaColor?: string;
	ctaPadding?: string | number;
	ctaBorderRadius?: string | number;
}> = ({
	ctaText,
	onClick,
	ctaClassName = '',
	ctaStyle = {},
	ctaVariant = 'primary',
	ctaBackground,
	ctaColor,
	ctaPadding,
	ctaBorderRadius,
}) => {
	if (!ctaText) return null;

	const stylesObj: React.CSSProperties = {
		...ctaStyle,
		...(ctaBackground && { background: ctaBackground }),
		...(ctaColor && { color: ctaColor }),
		...(ctaPadding !== undefined && {
			padding: ctaPadding,
		}),
		...(ctaBorderRadius !== undefined && {
			borderRadius: ctaBorderRadius,
		}),
	};

	// Map CTA variant to Button kind (add more as needed)
	const variantClass =
		styles[`advertisement__cta--${ctaVariant}`] || '';

	const className = [
		styles.advertisement__cta,
		variantClass,
		ctaClassName,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			className={className}
			style={stylesObj}
			onClick={onClick}
		>
			{ctaText}
		</button>
	);
};

export default AdCTAButton;
