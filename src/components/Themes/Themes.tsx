import React from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Theme.module.scss';
import {
	ThemeVariant,
	ThemeDisplay,
	ThemeLayout,
	ThemeDefinition,
	ThemeConfiguration,
	ExtendedThemeKind,
	THEME_CONFIGURATIONS,
	THEME_GROUPS,
	QUICK_THEMES,
} from './configurations';

export interface ThemesProps
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

const Themes: React.FC<ThemesProps> = ({
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
	themes,
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
			return themes as ThemeDefinition[];
		}
		return [];
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
			className={[
				styles.swatches,
				itemClassName,
				getGapClass(config.gap),
			]
				.filter(Boolean)
				.join(' ')}
		>
			{themeDefinitions.map((theme) => (
				<li
					key={theme.name}
					className={[
						styles.themeItem,
						activeTheme === theme.name ? styles.active : '',
						activeTheme === theme.name ? 'active' : '',
						styles['theme-bg'],
						activeTheme === theme.name ?
							styles['theme-border-active']
						:	styles['theme-border'],
						activeTheme === theme.name && config.showGlow ?
							styles['theme-box-shadow-active']
						: config.showShadow ? styles['theme-box-shadow']
						: '',
					]
						.filter(Boolean)
						.join(' ')}
					onClick={() => handleThemeChange(theme.name)}
					style={
						{
							'--theme-bg': theme.bg,
							'--theme-border': '#e0e7ef',
							'--theme-active-border': theme.color,
							'--theme-shadow': '#e3eaff33',
							'--theme-active-shadow': theme.color + '66',
						} as React.CSSProperties
					}
					aria-label={`Select ${theme.label} theme`}
				>
					{config.showPreview && (
						<span
							className={[
								styles.themePreview,
								styles['theme-preview-color'],
							].join(' ')}
							style={
								{
									'--theme-preview-color': theme.color,
								} as React.CSSProperties
							}
						/>
					)}
					{activeTheme === theme.name &&
						config.showGlow &&
						config.animated && (
							<span
								className={
									styles.themeGlow +
									' ' +
									styles['theme-glow-active']
								}
								style={
									{
										'--theme-glow': theme.color + '55',
									} as React.CSSProperties
								}
							/>
						)}
				</li>
			))}
		</ul>
	);

	// Render cards display
	const renderCards = () => (
		<Wrapper
			className={[
				styles.cards,
				itemClassName,
				getGapClass(config.gap),
			]
				.filter(Boolean)
				.join(' ')}
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

// Helper to create a Themes component with a specific kind
export function createTheme(
	kind: ThemeKind,
	props: Partial<ThemesProps> = {}
) {
	return <Themes kind={kind} {...props} />;
}

// Group creation helper
export function createThemeGroup(
	groupName: keyof typeof THEME_GROUPS,
	sharedProps: Partial<ThemesProps> = {}
) {
	const group = THEME_GROUPS[groupName];
	if (!group) return [];
	return group.map((kind, index) => (
		<Themes
			key={`${groupName}-${index}`}
			kind={kind as ExtendedThemeKind}
			{...sharedProps}
		/>
	));
}

// Quick theme creation
export function createQuickTheme(
	quickName: keyof typeof QUICK_THEMES,
	props: Partial<ThemesProps> = {}
) {
	const quickConfig = QUICK_THEMES[quickName];
	if (!quickConfig)
		throw new Error(`Quick theme "${quickName}" not found`);
	return <Themes kind={quickConfig} {...props} />;
}

// Ultra-shortcuts
export const ThemeSelector = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector', props);
export const ThemeSwatches = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-swatches', props);
export const ThemeDropdown = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-dropdown', props);
export const ThemeCards = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-cards', props);
export const ThemeGrid = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-grid', props);
export const HorizontalThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-horizontal', props);
export const VerticalThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-vertical', props);
export const CompactThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-compact', props);
export const ExpandedThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-expanded', props);
export const SmallThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-small', props);
export const MediumThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-medium', props);
export const LargeThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-large', props);
export const LabeledThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-with-labels', props);
export const UnlabeledThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-no-labels', props);
export const PreviewThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-with-preview', props);
export const NoPreviewThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-no-preview', props);
export const AnimatedThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-animated', props);
export const StaticThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('selector-static', props);
export const ThemePalette = (
	props: Partial<ThemesProps> = {}
) => createTheme('palette-provider', props);
export const ThemeSwitcher = (
	props: Partial<ThemesProps> = {}
) => createTheme('theme-switcher', props);
export const CustomThemeBuilder = (
	props: Partial<ThemesProps> = {}
) => createTheme('custom-theme-builder', props);
export const VSModeThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('vs-mode-selector', props);
export const MobileThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('mobile-optimized', props);
export const DesktopThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('desktop-optimized', props);
export const TabletThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('tablet-optimized', props);
export const ModalThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('modal-theme-selector', props);
export const SidebarThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('sidebar-theme-selector', props);
export const HeaderThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('header-theme-selector', props);
export const FooterThemes = (
	props: Partial<ThemesProps> = {}
) => createTheme('footer-theme-selector', props);

// Preset helpers
export const DashboardThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	ThemeSelector({
		size: 'small',
		layout: 'horizontal',
		showLabels: false,
		gap: 8,
		...props,
	});
export const ModalThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	ThemeCards({
		size: 'large',
		showLabels: true,
		showPreview: true,
		gap: 20,
		...props,
	});
export const SidebarThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: true,
		...props,
	});
export const HeaderThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: false,
		...props,
	});
export const MobileThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	ThemeDropdown({
		size: 'small',
		showLabels: true,
		...props,
	});
export const DesktopThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	ThemeSwatches({
		size: 'large',
		showLabels: true,
		showPreview: true,
		animated: true,
		gap: 18,
		...props,
	});

// Utility helpers
export const CustomThemeSelector = (
	themes: ThemeDefinition[] | string[],
	props: Partial<ThemesProps> = {}
) => createTheme('selector', { themes, ...props });
export const AnimatedThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	createTheme('selector', {
		animated: true,
		showGlow: true,
		hoverEffect: true,
		...props,
	});
export const StaticThemeSelector = (
	props: Partial<ThemesProps> = {}
) =>
	createTheme('selector', {
		animated: false,
		showGlow: false,
		hoverEffect: false,
		...props,
	});
export const StyledThemeSelector = (
	className: string,
	props: Partial<ThemesProps> = {}
) => createTheme('selector', { className, ...props });
export const ControlledThemeSelector = (
	value: string,
	onChange: (theme: string) => void,
	props: Partial<ThemesProps> = {}
) => createTheme('selector', { value, onChange, ...props });

// Common patterns object
export const ThemesPresets = {
	Default: () => ThemeSelector(),
	Compact: () => CompactThemes(),
	Dropdown: () => ThemeDropdown(),
	Cards: () => ThemeCards(),
	Mobile: () => MobileThemes(),
	Desktop: () => DesktopThemes(),
	Tablet: () => TabletThemes(),
	Modal: () => ModalThemes(),
	Sidebar: () => SidebarThemes(),
	Header: () => HeaderThemes(),
	Footer: () => FooterThemes(),
	VSMode: () => VSModeThemes(),
	Custom: () => CustomThemeBuilder(),
};

export default Themes;

const getGapClass = (gap: number) => {
	if (gap <= 10) return styles['theme-gap-small'];
	if (gap >= 20) return styles['theme-gap-large'];
	return styles['theme-gap-medium'];
};
