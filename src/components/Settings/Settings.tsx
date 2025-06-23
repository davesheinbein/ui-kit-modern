import React, { forwardRef } from 'react';
import { Button } from '../Button';
import styles from './Settings.module.scss';

export interface SettingsProps {
	children: React.ReactNode;
	className?: string;
	variant?:
		| 'panel'
		| 'customization'
		| 'user-preferences'
		| 'theme-selector'
		| 'accessibility'
		| 'privacy';
	position?: 'modal' | 'sidebar' | 'inline' | 'floating';
	showHeader?: boolean;
	showFooter?: boolean;
	title?: string;
	onClose?: () => void;
	footer?: React.ReactNode;
}

/**
 * Base Settings component - provides consistent styling and layout
 * Use this as the foundation for all settings-related components
 * Similar to the Modal and FormField base components
 */
const Settings = forwardRef<HTMLDivElement, SettingsProps>(
	(
		{
			children,
			className = '',
			variant = 'panel',
			position = 'modal',
			showHeader = true,
			showFooter = false,
			title = 'Settings',
			onClose,
			footer,
			...props
		},
		ref
	) => {
		const settingsClasses = [
			styles.settings,
			styles[`settings--${variant}`],
			styles[`settings--${position}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div ref={ref} className={settingsClasses} {...props}>
				{showHeader && (
					<div className={styles.settingsHeader}>
						<h2>{title}</h2>
						{onClose && (
							<Button
								kind='close'
								className={styles.settingsCloseButton}
								onClick={onClose}
								aria-label='Close settings'
							>
								×
							</Button>
						)}
					</div>
				)}

				<div className={styles.settingsContent}>
					{children}
				</div>

				{showFooter && footer && (
					<div className={styles.settingsFooter}>
						{footer}
					</div>
				)}
			</div>
		);
	}
);

Settings.displayName = 'Settings';

export default Settings;
