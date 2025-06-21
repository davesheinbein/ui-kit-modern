import React from 'react';
import {
	ThemeConfiguration,
	ThemeVariant,
	ThemeDisplay,
	ThemeLayout,
	ThemeDefinition,
	ExtendedThemeKind,
	THEME_CONFIGURATIONS,
	defaultThemes,
	vsModeDefaults,
	getThemeByName,
	applyTheme,
	getThemeClassName,
	validateTheme,
} from './configurations';
import styles from './Theme.module.scss';

// Extended props interface for UnifiedTheme
export interface UnifiedThemeProps
	extends Partial<ThemeConfiguration> {
	// Core theme data
	'value'?: string;

	// DRY system
	'kind'?: ExtendedThemeKind;

	// Component overrides
	'children'?: React.ReactNode;

	// Additional styling
	'style'?: React.CSSProperties;
	'id'?: string;
	'data-testid'?: string;
}

// Export types for convenience
export type ThemeKind = ExtendedThemeKind;
export type {
	ThemeVariant,
	ThemeDisplay,
	ThemeLayout,
	ThemeDefinition,
};

/**
 * UnifiedTheme - A comprehensive, DRY theme component
 *
 * This component serves as the single source of truth for all theme selection needs.
 * It supports:
 * - All theme variants (selector, palette, provider, switcher)
 * - Multiple display modes (swatches, dropdown, cards, grid, list)
 * - Various layouts (horizontal, vertical, grid, compact)
 * - Ultra-short configuration via the 'kind' prop
 * - Full customization via individual props
 * - Animation and styling options
 */
const UnifiedTheme: React.FC<UnifiedThemeProps> = ({
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
				// Allow prop overrides
				variant: variant,
				display: display,
				layout: layout,
				showLabels: showLabels,
				showPreview: showPreview,
				allowCustom: allowCustom,
				animated: animated,
				size: size,
				gap: gap,
				colorScheme: colorScheme,
				showGlow: showGlow,
				showShadow: showShadow,
				hoverEffect: hoverEffect,
				themes: themes,
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

	// State management
	const [activeTheme, setActiveTheme] = React.useState(
		value || defaultTheme
	);

	// Update active theme when value prop changes
	React.useEffect(() => {
		if (value !== undefined) {
			setActiveTheme(value);
		}
	}, [value]);

	// Apply theme to document body
	React.useEffect(() => {
		if (
			config.variant === 'provider' ||
			config.variant === 'switcher'
		) {
			applyTheme(
				activeTheme,
				Array.isArray(config.themes) ?
					(config.themes as ThemeDefinition[])
				:	defaultThemes
			);
		}
	}, [activeTheme, config.variant, config.themes]);

	// Generate CSS classes
	const cssClasses = React.useMemo(() => {
		const baseClass = getThemeClassName(config);
		const animatedClass =
			config.animated && animated ?
				styles.animatedSelector
			:	'';
		const staticClass =
			!config.animated && !animated ?
				styles.staticSelector
			:	'';

		return [
			styles.themeBase,
			baseClass,
			animatedClass,
			staticClass,
			className,
		]
			.filter(Boolean)
			.join(' ');
	}, [config, animated, className]);

	// Handle theme change
	const handleThemeChange = (themeName: string) => {
		setActiveTheme(themeName);
		if (onChange) {
			onChange(themeName);
		}
	};

	// Get theme definitions
	const themeDefinitions = React.useMemo(() => {
		if (Array.isArray(config.themes)) {
			// If it's an array of strings, convert to minimal theme definitions
			if (typeof config.themes[0] === 'string') {
				return (config.themes as string[]).map((name) => {
					const existing = getThemeByName(
						name,
						defaultThemes
					);
					return (
						existing || {
							name,
							label:
								name.charAt(0).toUpperCase() +
								name.slice(1),
							color: '#666',
							bg: '#f5f5f5',
							font: '#333',
							swatchType: 'solid' as const,
							vsMode: vsModeDefaults,
						}
					);
				});
			}
			return config.themes as ThemeDefinition[];
		}
		return defaultThemes;
	}, [config.themes]);

	// Render dropdown display
	const renderDropdown = () => {
		return (
			<div
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
					onChange={(e) =>
						handleThemeChange(e.target.value)
					}
				>
					{themeDefinitions.map((theme) => (
						<option key={theme.name} value={theme.name}>
							{theme.label}
						</option>
					))}
				</select>
			</div>
		);
	};

	// Render swatches display
	const renderSwatches = () => {
		return (
			<ul
				className={`${styles.swatches} ${itemClassName}`}
				style={{
					gap: `${config.gap}px`,
				}}
			>
				{themeDefinitions.map((theme) => (
					<li
						key={theme.name}
						className={`${styles.themeItem} ${
							activeTheme === theme.name ?
								styles.active
							:	''
						} ${activeTheme === theme.name ? 'active' : ''}`}
						onClick={() => handleThemeChange(theme.name)}
						style={{
							background: theme.bg,
							border: `${activeTheme === theme.name ? '3px' : '2px'} solid ${
								activeTheme === theme.name ?
									theme.color
								:	'#e0e7ef'
							}`,
							boxShadow:
								(
									activeTheme === theme.name &&
									config.showGlow
								) ?
									`0 0 16px 2px ${theme.color}66`
								: config.showShadow ?
									'0 1px 4px 0 #e3eaff33'
								:	'none',
						}}
						aria-label={`Select ${theme.label} theme`}
					>
						{config.showPreview && (
							<div
								className={styles.themePreview}
								style={{
									background: theme.color,
									boxShadow:
										(
											activeTheme === theme.name &&
											config.showGlow
										) ?
											`0 0 8px 2px ${theme.color}99`
										:	'none',
								}}
							>
								<span
									className={styles.themeInitial}
									style={{
										color: theme.font,
									}}
								>
									{theme.label[0]}
								</span>
							</div>
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
	};

	// Render cards display
	const renderCards = () => {
		return (
			<div
				className={`${styles.cards} ${itemClassName}`}
				style={{
					gap: `${config.gap}px`,
				}}
			>
				{themeDefinitions.map((theme) => (
					<div
						key={theme.name}
						className={`${styles.themeCard} ${
							activeTheme === theme.name ?
								styles.active
							:	''
						} ${activeTheme === theme.name ? 'active' : ''}`}
						onClick={() => handleThemeChange(theme.name)}
						style={{
							borderColor:
								activeTheme === theme.name ?
									'var(--color-primary)'
								:	'var(--color-border)',
						}}
					>
						{config.showPreview && (
							<div
								className={styles.cardPreview}
								style={{
									background: theme.bg,
									border: `2px solid ${theme.color}`,
								}}
							>
								<span
									style={{
										color: theme.font,
										fontWeight: 700,
									}}
								>
									{theme.label[0]}
								</span>
							</div>
						)}

						{config.showLabels && (
							<div
								className={`${styles.cardLabel} ${labelClassName}`}
							>
								{theme.label}
							</div>
						)}
					</div>
				))}
			</div>
		);
	};

	// Render list display
	const renderList = () => {
		return (
			<ul className={`${styles.list} ${itemClassName}`}>
				{themeDefinitions.map((theme) => (
					<li
						key={theme.name}
						className={`${styles.themeListItem} ${
							activeTheme === theme.name ?
								styles.active
							:	''
						} ${activeTheme === theme.name ? 'active' : ''}`}
						onClick={() => handleThemeChange(theme.name)}
					>
						{config.showPreview && (
							<div
								className={styles.listPreview}
								style={{
									background: theme.color,
								}}
							/>
						)}

						{config.showLabels && (
							<span
								className={`${styles.listLabel} ${labelClassName}`}
							>
								{theme.label}
							</span>
						)}
					</li>
				))}
			</ul>
		);
	};

	// Render content based on display type
	const renderContent = () => {
		// If themes is a simple string array and display is not specified, use dropdown
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
				return renderCards(); // Grid uses card layout
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

	// Dynamic subtitle generation
	const dynamicSubtitle = subtitle || config.subtitle;

	return (
		<div
			className={`${styles.themeContainer} ${containerClassName}`}
			style={{
				borderRadius: borderRadius,
				...style,
			}}
			id={id}
			data-testid={testId}
		>
			{/* Header */}
			{(dynamicTitle || dynamicSubtitle) && (
				<div className={styles.themeHeader}>
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
				</div>
			)}

			{/* Content */}
			<div className={cssClasses}>
				{renderContent()}
				{children}
			</div>

			{/* Footer */}
			{config.allowCustom && (
				<div className={styles.themeFooter}>
					<div className={styles.themeActions}>
						<button
							onClick={() => {
								const customTheme: ThemeDefinition = {
									name: 'custom',
									label: 'Custom',
									color: '#666',
									bg: '#f5f5f5',
									font: '#333',
									swatchType: 'solid',
									vsMode: vsModeDefaults,
								};
								if (onCustomTheme) {
									onCustomTheme(customTheme);
								}
							}}
						>
							Create Custom Theme
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default UnifiedTheme;
