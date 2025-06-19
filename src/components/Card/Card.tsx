import React, { forwardRef } from 'react';
import styles from './Card.module.scss';

export interface CardProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'default' | 'elevated' | 'outlined' | 'filled';
	size?: 'small' | 'medium' | 'large';
	padding?: 'none' | 'small' | 'medium' | 'large';
	hover?: boolean;
	clickable?: boolean;
	onClick?: () => void;
	style?: React.CSSProperties;
}

/**
 * Base Card component - provides consistent styling and layout
 * Use this as the foundation for all card types
 * Similar to the Modal and Button base components
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			children,
			className = '',
			variant = 'default',
			size = 'medium',
			padding = 'medium',
			hover = false,
			clickable = false,
			onClick,
			style,
			...props
		},
		ref
	) => {
		const combinedClassName = [
			styles.baseCard,
			styles[`card-${variant}`],
			styles[`card-${size}`],
			styles[`card-padding-${padding}`],
			hover && styles.cardHover,
			clickable && styles.cardClickable,
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div
				ref={ref}
				className={combinedClassName}
				onClick={clickable ? onClick : undefined}
				style={style}
				{...props}
			>
				{children}
			</div>
		);
	}
);

Card.displayName = 'Card';

export default Card;
