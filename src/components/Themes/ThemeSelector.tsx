import React from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Theme.module.scss';
import {
	defaultThemes,
	vsModeDefaults,
	ThemeVariant,
	ThemeDisplay,
	ThemeLayout,
	ThemeDefinition,
	ThemeConfiguration,
	ExtendedThemeKind,
	THEME_CONFIGURATIONS,
} from './configurations';

// Re-export the original exports for backward compatibility
export { defaultThemes as themes, vsModeDefaults };

export interface ThemeSelectorProps
	extends Partial<ThemeConfiguration> {
	value?: string;
	kind?: ExtendedThemeKind;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	id?: string;
	['data-testid']?: string;
}

export type ThemeKind = ExtendedThemeKind;
export type {
	ThemeVariant,
	ThemeDisplay,
	ThemeLayout,
	ThemeDefinition,
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
	// DRY system
	kind,

	// Core configuration
	variant = 'selector',
	display = 'swatches',
	layout = 'horizontal',
	value,

	// Display options
	showLabels = true,
	showPreview = true,
	allowCustom = false,
	animated = true,
	size = 'medium',
	borderRadius,
	gap = 18,

	// Content
	title,
	subtitle,
	placeholder,

	// Styling
	className = '',
	containerClassName = '',
	itemClassName = '',
	labelClassName = '',

	// Behavior
	defaultTheme = 'light',
	themes = defaultThemes,
	onChange,
	onCustomTheme,

	// Visual
	colorScheme = 'default',
	showGlow = true,
	showShadow = true,
	hoverEffect = true,

	// Events
	children,

	// HTML props
	style,
	id,
	'data-testid': testId,

	...restProps
}) => {
	// Apply DRY configuration if kind is provided
	const config = React.useMemo(() => {
		if (kind && THEME_CONFIGURATIONS[kind]) {
			return {
				...THEME_CONFIGURATIONS[kind],
				variant,
				display,
				layout,
				showLabels,
				showPreview,
				allowCustom,
				animated,
				size,
				gap,
				colorScheme,
				showGlow,
				showShadow,
				hoverEffect,
				themes,
				...restProps,
			};
		}
		return {
			variant,
			display,
			layout,
			showLabels,
			showPreview,
			allowCustom,
			animated,
			size,
			gap,
			colorScheme,
			showGlow,
			showShadow,
			hoverEffect,
			themes,
			...restProps,
		};
	}, [
		kind,
		variant,
		display,
		layout,
		showLabels,
		showPreview,
		allowCustom,
		animated,
		size,
		gap,
		colorScheme,
		showGlow,
		showShadow,
		hoverEffect,
		themes,
		restProps,
	]);

	// Redux state management (stubbed for consolidation)
	const activeTheme = value || defaultTheme;

	// Generate CSS classes
	const cssClasses = React.useMemo(() => {
		return [styles.themeBase, className]
			.filter(Boolean)
			.join(' ');
	}, [className]);

	// Handle theme change
	const handleThemeChange = (themeName: string) => {
		onChange?.(themeName);
	};

	// Get theme definitions
	const themeDefinitions = React.useMemo(() => {
		if (Array.isArray(themes)) {
			if (typeof themes[0] === 'string') {
				return (themes as string[]).map((name) => ({
					name,
					label: name,
					color: '#ccc',
					bg: '#fff',
					font: '#222',
					swatchType: 'solid',
					vsMode: vsModeDefaults,
				}));
			}
			return themes as ThemeDefinition[];
		}
		return defaultThemes;
	}, [themes]);

	// Render dropdown display
	const renderDropdown = () => (
		<Wrapper
			className={`${styles.dropdown} ${itemClassName}`}
		>
			{config.showLabels && (
				<label
					className={`${styles.themeLabel} ${labelClassName}`}
				>
					{title || 'Theme:'}
				</label>
			)}
			<select
				className={styles.themeSelect}
				value={activeTheme}
				onChange={(e) => handleThemeChange(e.target.value)}
			>
				{themeDefinitions.map((theme) => (
					<option key={theme.name} value={theme.name}>
						{theme.label}
					</option>
				))}
			</select>
		</Wrapper>
	);

	// Render swatches display
	const renderSwatches = () => (
		<ul
			className={`${styles.swatches} ${itemClassName}`}
			style={{ gap: `${config.gap}px` }}
		>
			{themeDefinitions.map((theme) => (
				<li
					key={theme.name}
					className={`${styles.themeItem} ${activeTheme === theme.name ? styles.active : ''} ${activeTheme === theme.name ? 'active' : ''}`}
					onClick={() => handleThemeChange(theme.name)}
					style={{
						background: theme.bg,
						border: `${activeTheme === theme.name ? '3px' : '2px'} solid ${activeTheme === theme.name ? theme.color : '#e0e7ef'}`,
						boxShadow:
							(
								activeTheme === theme.name &&
								config.showGlow
							) ?
								`0 0 16px 2px ${theme.color}66`
							: config.showShadow ? '0 1px 4px 0 #e3eaff33'
							: 'none',
					}}
					aria-label={`Select ${theme.label} theme`}
				>
					{config.showPreview && (
						<span
							className={styles.themePreview}
							style={{ background: theme.color }}
						/>
					)}
					{activeTheme === theme.name &&
						config.showGlow &&
						config.animated && (
							<span
								className={styles.themeGlow}
								style={{
									boxShadow: `0 0 24px 6px ${theme.color}55`,
								}}
							/>
						)}
				</li>
			))}
		</ul>
	);

	// Render cards display
	const renderCards = () => (
		<Wrapper
			className={`${styles.cards} ${itemClassName}`}
			style={{ gap: `${config.gap}px` }}
		>
			{themeDefinitions.map((theme) => (
				<Wrapper
					key={theme.name}
					className={`${styles.themeCard} ${activeTheme === theme.name ? styles.active : ''} ${activeTheme === theme.name ? 'active' : ''}`}
					onClick={() => handleThemeChange(theme.name)}
					style={{
						borderColor:
							activeTheme === theme.name ?
								'var(--color-primary)'
							:	'var(--color-border)',
					}}
				>
					{config.showPreview && (
						<span
							className={styles.cardPreview}
							style={{ background: theme.color }}
						/>
					)}
					{config.showLabels && (
						<span className={styles.cardLabel}>
							{theme.label}
						</span>
					)}
				</Wrapper>
			))}
		</Wrapper>
	);

	// Render list display
	const renderList = () => (
		<ul className={`${styles.list} ${itemClassName}`}>
			{themeDefinitions.map((theme) => (
				<li
					key={theme.name}
					className={`${styles.themeListItem} ${activeTheme === theme.name ? styles.active : ''} ${activeTheme === theme.name ? 'active' : ''}`}
					onClick={() => handleThemeChange(theme.name)}
				>
					{config.showPreview && (
						<Wrapper
							className={styles.listPreview}
							style={{ background: theme.color }}
						/>
					)}
					{config.showLabels && (
						<span className={styles.listLabel}>
							{theme.label}
						</span>
					)}
				</li>
			))}
		</ul>
	);

	// Render content based on display type
	const renderContent = () => {
		if (
			Array.isArray(config.themes) &&
			typeof config.themes[0] === 'string' &&
			config.display === 'swatches'
		) {
			return renderDropdown();
		}
		switch (config.display) {
			case 'dropdown':
				return renderDropdown();
			case 'cards':
				return renderCards();
			case 'grid':
				return renderCards();
			case 'list':
				return renderList();
			case 'swatches':
			default:
				return renderSwatches();
		}
	};

	// Dynamic title generation
	const dynamicTitle =
		title ||
		config.title ||
		(() => {
			switch (config.variant) {
				case 'selector':
					return 'Select Theme';
				case 'palette':
					return 'Theme Palette';
				case 'provider':
					return 'Theme Provider';
				case 'switcher':
					return 'Switch Theme';
				default:
					return 'Themes';
			}
		})();

	const dynamicSubtitle = subtitle || config.subtitle;

	return (
		<Wrapper
			className={`${styles.themeContainer} ${containerClassName}`}
			style={{ borderRadius: borderRadius, ...style }}
			id={id}
			data-testid={testId}
		>
			{/* Header */}
			{(dynamicTitle || dynamicSubtitle) && (
				<Wrapper className={styles.themeHeader}>
					{dynamicTitle && (
						<h3 className={styles.themeTitle}>
							{dynamicTitle}
						</h3>
					)}
					{dynamicSubtitle && (
						<p className={styles.themeSubtitle}>
							{dynamicSubtitle}
						</p>
					)}
				</Wrapper>
			)}
			{/* Content */}
			<Wrapper className={cssClasses}>
				{renderContent()}
				{children}
			</Wrapper>
			{/* Footer */}
			{config.allowCustom && (
				<Wrapper className={styles.themeFooter}> </Wrapper>
			)}
		</Wrapper>
	);
};

export default ThemeSelector;
