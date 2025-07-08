import React from 'react';
import styles from '../button.module.scss';
import type { ButtonProps } from '../Button';

/**
 * Handles the content layout for Button: icon, text, icon+text, children, word, etc.
 */
export function ButtonContent({
	finalContentType,
	iconPosition,
	displayIcon,
	displayText,
	stylesOverride = {},
}: {
	finalContentType: 'text' | 'icon' | 'textIcon';
	iconPosition:
		| 'left'
		| 'right'
		| 'top'
		| 'bottom'
		| 'only';
	displayIcon: React.ReactNode;
	displayText: React.ReactNode;
	stylesOverride?: Partial<typeof styles>;
}) {
	// Treat 'only' as 'left' for layout
	const effectiveIconPosition =
		iconPosition === 'only' ? 'left' : iconPosition;
	if (finalContentType === 'icon') {
		return <>{displayIcon}</>;
	}
	if (finalContentType === 'textIcon') {
		if (
			(effectiveIconPosition === 'top' ||
				effectiveIconPosition === 'bottom') &&
			displayIcon
		) {
			return (
				<span
					className={
						effectiveIconPosition === 'top' ?
							stylesOverride.button__icon_text_top ||
							styles['button__icon-text--top']
						:	stylesOverride.button__icon_text_bottom ||
							styles['button__icon-text--bottom']
					}
				>
					<span>{displayIcon}</span>
					{displayText && <span>{displayText}</span>}
				</span>
			);
		}
		return (
			<>
				{effectiveIconPosition === 'left' &&
					displayIcon && (
						<span
							className={
								stylesOverride.leftIcon || styles.leftIcon
							}
						>
							{displayIcon}
						</span>
					)}
				{displayText && <span>{displayText}</span>}
				{effectiveIconPosition === 'right' &&
					displayIcon && (
						<span
							className={
								stylesOverride.rightIcon || styles.rightIcon
							}
						>
							{displayIcon}
						</span>
					)}
			</>
		);
	}
	// finalContentType === 'text' (default)
	return <>{displayText}</>;
}
