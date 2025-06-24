import React from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Pages.module.scss';
import { Button } from '../Button';
import {
	PageConfiguration,
	ExtendedPageKind,
	PAGE_CONFIGURATIONS,
} from './configurations';

// Base page variant types
export type PageVariant =
	| 'default'
	| 'centered'
	| 'full-height'
	| 'dashboard'
	| 'landing'
	| 'custom';

// Base page layout types
export type PageLayout =
	| 'standard'
	| 'centered'
	| 'sidebar'
	| 'split'
	| 'grid'
	| 'custom';

// Base page props interface
export interface BasePageProps
	extends React.HTMLAttributes<HTMLDivElement> {
	variant?: PageVariant;
	layout?: PageLayout;
	size?: 'compact' | 'medium' | 'large' | 'full' | 'custom';
	showHeader?: boolean;
	showFooter?: boolean;
	showNavigation?: boolean;
	centered?: boolean;
	fullHeight?: boolean;
	padding?: string;
	background?: string;
	containerMaxWidth?: string;
	children: React.ReactNode;
}

// Use the extended page kinds from configurations
export type PageKind = ExtendedPageKind;

export interface PageProps
	extends Omit<BasePageProps, 'variant' | 'children'> {
	kind: PageKind;
	configuration?: Partial<PageConfiguration>;
	children?: React.ReactNode;

	// Page-specific props
	title?: string;
	subtitle?: string;
	headerContent?: React.ReactNode;
	footerContent?: React.ReactNode;
	navigationContent?: React.ReactNode;

	// Startup page specific props
	onStartDaily?: () => void;
	onStartCustom?: () => void;
	onBrowseCustom?: () => void;
	onShare?: () => void;

	// Common page actions
	onBack?: () => void;
	onNext?: () => void;
	onSave?: () => void;
	onCancel?: () => void;
}

/**
 * Page - Core page component that handles all page types
 *
 * This component provides a  interface for creating different types of pages
 * using configuration-driven approach, similar to Button.
 */
const Page: React.FC<PageProps> = ({
	kind = 'custom',
	configuration = {},
	children,
	className = '',
	title,
	subtitle,
	headerContent,
	footerContent,
	navigationContent,
	// Startup page props
	onStartDaily,
	onStartCustom,
	onBrowseCustom,
	onShare,
	// Common actions
	onBack,
	onNext,
	onSave,
	onCancel,
	...props
}) => {
	// Import configuration based on page kind
	const getPageConfig = (): PageConfiguration => {
		return {
			...(PAGE_CONFIGURATIONS[kind] ||
				PAGE_CONFIGURATIONS.custom),
			...configuration,
		};
	};

	const config = getPageConfig();

	// Build CSS classes based on configuration
	const pageClasses = [
		styles.page,
		styles[`page-${config.variant}`],
		styles[`page-layout-${config.layout}`],
		styles[`page-size-${config.size}`],
		config.centered && styles['page-centered'],
		config.fullHeight && styles['page-full-height'],
		config.className,
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Container styles based on configuration
	const containerStyles: React.CSSProperties = {
		padding: config.padding,
		maxWidth: config.containerMaxWidth,
		background:
			config.background === 'transparent' ?
				'transparent'
			:	undefined,
		...props.style,
	};

	// Render page-specific content based on kind
	const renderPageContent = () => {
		switch (kind) {
			case 'startup':
				return (
					<Wrapper className={styles.startupPageContent}>
						{title && (
							<h1 className={styles.startupTitle}>
								{title}
							</h1>
						)}
						{subtitle && (
							<p className={styles.startupSubtitle}>
								{subtitle}
							</p>
						)}
						<Wrapper className={styles.startupActions}>
							{onStartDaily && (
								<Button
									kind='primary'
									className={styles.startupButton}
									onClick={onStartDaily}
								>
									Start Daily
								</Button>
							)}
							{onStartCustom && (
								<Button
									kind='secondary'
									className={styles.startupButton}
									onClick={onStartCustom}
								>
									Start Custom
								</Button>
							)}
							{onBrowseCustom && (
								<Button
									kind='secondary'
									className={styles.startupButton}
									onClick={onBrowseCustom}
								>
									Browse Custom
								</Button>
							)}
							{onShare && (
								<Button
									kind='secondary'
									className={styles.startupButton}
									onClick={onShare}
								>
									Share
								</Button>
							)}
						</Wrapper>
						{children}
					</Wrapper>
				);
			default:
				return (
					<Wrapper className={styles.pageContent}>
						{title && (
							<h1 className={styles.pageTitle}>{title}</h1>
						)}
						{subtitle && (
							<p className={styles.pageSubtitle}>
								{subtitle}
							</p>
						)}
						{children}
					</Wrapper>
				);
		}
	};

	return (
		<Wrapper
			className={pageClasses}
			style={containerStyles}
			{...props}
		>
			{config.showHeader && (
				<header className={styles.pageHeader}>
					{headerContent || (
						<Wrapper className={styles.defaultHeader}>
							{onBack && (
								<Button
									kind='go-back'
									className={styles.backButton}
									onClick={onBack}
								>
									← Back
								</Button>
							)}
							{title && (
								<h1 className={styles.headerTitle}>
									{title}
								</h1>
							)}
						</Wrapper>
					)}
				</header>
			)}
			{config.showNavigation && (
				<nav className={styles.pageNavigation}>
					{navigationContent || (
						<Wrapper className={styles.defaultNavigation}>
							{/* Default navigation content */}
						</Wrapper>
					)}
				</nav>
			)}
			<main className={styles.pageMain}>
				{renderPageContent()}
			</main>
			{config.showFooter && (
				<footer className={styles.pageFooter}>
					{footerContent || (
						<Wrapper className={styles.defaultFooter}>
							{onCancel && (
								<Button
									kind='secondary'
									className={styles.footerButton}
									onClick={onCancel}
								>
									Cancel
								</Button>
							)}
							{onSave && (
								<Button
									kind='primary'
									className={styles.footerButtonPrimary}
									onClick={onSave}
								>
									Save
								</Button>
							)}
							{onNext && (
								<Button
									kind='primary'
									className={styles.footerButtonPrimary}
									onClick={onNext}
								>
									Next
								</Button>
							)}
						</Wrapper>
					)}
				</footer>
			)}
		</Wrapper>
	);
};

Page.displayName = 'Page';

export default Page;
