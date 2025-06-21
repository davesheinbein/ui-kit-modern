import React, { forwardRef } from 'react';
import UnifiedSettings from './UnifiedSettings';
import {
	SETTINGS_CONFIGURATIONS,
	SettingsKind,
	SettingsConfiguration,
	SettingsItem,
	SettingsSection,
} from './configurations';

export interface SettingsFactoryProps {
	kind: SettingsKind;
	title?: string;
	items?: SettingsItem[];
	sections?: SettingsSection[];
	onEquip?: (
		slot: string,
		id: string
	) => void | Promise<void>;
	onSettingChange?: (
		sectionId: string,
		fieldId: string,
		value: any
	) => void;
	onLockedClick?: (item: any) => void;
	onShopItemClick?: (item: any) => void;
	onClose?: () => void;
	ariaLabelPrefix?: string;
	lockedIndices?: number[];
	className?: string;
	showHeader?: boolean;
	showFooter?: boolean;
	// Override any configuration
	configuration?: Partial<SettingsConfiguration>;
	[key: string]: any;
}

/**
 * SettingsFactory - Ultra-DRY settings creation using configurations
 *
 * Usage examples:
 * <SettingsFactory kind="settings-panel" sections={userSections} />
 * <SettingsFactory kind="customization-category" items={themeItems} />
 * <SettingsFactory kind="user-settings" sections={userPrefs} />
 * <SettingsFactory kind="theme-settings" items={themes} />
 */
const SettingsFactory = forwardRef<
	HTMLDivElement,
	SettingsFactoryProps
>(
	(
		{
			kind,
			title,
			items = [],
			sections = [],
			onEquip,
			onSettingChange,
			onLockedClick,
			onShopItemClick,
			onClose,
			ariaLabelPrefix = 'settings',
			lockedIndices = [],
			className = '',
			showHeader,
			showFooter,
			configuration: configOverride,
			...props
		},
		ref
	) => {
		const config =
			SETTINGS_CONFIGURATIONS[
				kind as keyof typeof SETTINGS_CONFIGURATIONS
			];

		if (!config) {
			console.warn(`Unknown settings kind: ${kind}`);
			return null;
		}

		// Merge configuration with overrides
		const finalConfig = { ...config, ...configOverride };

		// Use props or config values
		const finalTitle = title ?? finalConfig.title;
		const finalShowHeader =
			showHeader ?? finalConfig.showHeader;
		const finalShowFooter =
			showFooter ?? finalConfig.showFooter;

		return (
			<UnifiedSettings
				ref={ref}
				kind={kind}
				title={finalTitle}
				items={items}
				sections={sections}
				onEquip={onEquip}
				onSettingChange={onSettingChange}
				onLockedClick={onLockedClick}
				onShopItemClick={onShopItemClick}
				onClose={onClose}
				ariaLabelPrefix={ariaLabelPrefix}
				lockedIndices={lockedIndices}
				className={className}
				{...props}
			/>
		);
	}
);

SettingsFactory.displayName = 'SettingsFactory';

/**
 * Ultra-DRY Settings shortcuts - for maximum convenience
 * Similar to Button factory but for settings
 */
export const S = SettingsFactory; // Ultra-short alias

/**
 * Settings presets with common patterns
 */
export const SettingsPresets = {
	// User settings presets
	USER_PREFERENCES: (
		onSettingChange?: SettingsFactoryProps['onSettingChange']
	) => (
		<SettingsFactory
			kind='user-settings'
			onSettingChange={onSettingChange}
		/>
	),

	// Theme customization preset
	THEME_CUSTOMIZATION: (
		items: SettingsItem[],
		onEquip?: SettingsFactoryProps['onEquip']
	) => (
		<SettingsFactory
			kind='theme-settings'
			items={items}
			onEquip={onEquip}
		/>
	),

	// Customization category preset
	CUSTOMIZATION: (
		items: SettingsItem[],
		onEquip?: SettingsFactoryProps['onEquip']
	) => (
		<SettingsFactory
			kind='customization-category'
			items={items}
			onEquip={onEquip}
		/>
	),

	// Settings panel preset
	SETTINGS_PANEL: (
		sections: SettingsSection[],
		onSettingChange?: SettingsFactoryProps['onSettingChange']
	) => (
		<SettingsFactory
			kind='settings-panel'
			sections={sections}
			onSettingChange={onSettingChange}
		/>
	),

	// Accessibility settings preset
	ACCESSIBILITY: (
		sections: SettingsSection[],
		onSettingChange?: SettingsFactoryProps['onSettingChange']
	) => (
		<SettingsFactory
			kind='accessibility-settings'
			sections={sections}
			onSettingChange={onSettingChange}
		/>
	),

	// Privacy settings preset
	PRIVACY: (
		sections: SettingsSection[],
		onSettingChange?: SettingsFactoryProps['onSettingChange']
	) => (
		<SettingsFactory
			kind='privacy-settings'
			sections={sections}
			onSettingChange={onSettingChange}
		/>
	),
};

/**
 * Quick settings for ultra-rapid development
 */
export const QuickSettings = {
	userPrefs: SettingsPresets.USER_PREFERENCES,
	themes: SettingsPresets.THEME_CUSTOMIZATION,
	customization: SettingsPresets.CUSTOMIZATION,
	panel: SettingsPresets.SETTINGS_PANEL,
	accessibility: SettingsPresets.ACCESSIBILITY,
	privacy: SettingsPresets.PRIVACY,
};

export default SettingsFactory;
