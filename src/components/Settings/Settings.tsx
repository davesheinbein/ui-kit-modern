import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import clsx from 'clsx';
import styles from './Settings.module.scss';
import {
	SETTINGS_CONFIGURATIONS,
	SettingsConfiguration,
	SettingsItem,
	SettingsSection,
} from './configurations';
import type { SettingsKind } from './configurations';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Inputs/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { Range } from '../Ranges/Range';
import { Radio } from '../Radios/Radio';

// ========== Settings Layout (Internal) ========== //
interface SettingsLayoutProps {
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

const SettingsLayout = forwardRef<
	HTMLDivElement,
	SettingsLayoutProps
>(
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
			<Wrapper
				ref={ref}
				className={settingsClasses}
				{...props}
			>
				{showHeader && (
					<Wrapper className={styles.settingsHeader}>
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
					</Wrapper>
				)}

				<Wrapper className={styles.settingsContent}>
					{children}
				</Wrapper>

				{showFooter && footer && (
					<Wrapper className={styles.settingsFooter}>
						{footer}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);
SettingsLayout.displayName = 'SettingsLayout';

export type { SettingsKind } from './configurations';

export interface SettingsProps {
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
	configuration?: Partial<SettingsConfiguration>;
	[key: string]: any;
}

function getFinalSettingsConfig(
	kind: SettingsKind,
	configOverride?: Partial<SettingsConfiguration>
) {
	const config =
		SETTINGS_CONFIGURATIONS[
			kind as keyof typeof SETTINGS_CONFIGURATIONS
		];
	return { ...config, ...configOverride };
}

// Static preset helpers
export const UserPreferences: React.FC<
	Partial<SettingsProps>
> = (props) => <Settings kind='user-settings' {...props} />;
export const ThemeCustomization: React.FC<{
	items: SettingsItem[];
	onEquip?: SettingsProps['onEquip'];
}> = ({ items, onEquip, ...props }) => (
	<Settings
		kind='theme-settings'
		items={items}
		onEquip={onEquip}
		{...props}
	/>
);
export const CustomizationCategory: React.FC<{
	items: SettingsItem[];
	onEquip?: SettingsProps['onEquip'];
}> = ({ items, onEquip, ...props }) => (
	<Settings
		kind='customization-category'
		items={items}
		onEquip={onEquip}
		{...props}
	/>
);
export const SettingsPanel: React.FC<{
	sections: SettingsSection[];
	onSettingChange?: SettingsProps['onSettingChange'];
}> = ({ sections, onSettingChange, ...props }) => (
	<Settings
		kind='settings-panel'
		sections={sections}
		onSettingChange={onSettingChange}
		{...props}
	/>
);
export const AccessibilitySettings: React.FC<{
	sections: SettingsSection[];
	onSettingChange?: SettingsProps['onSettingChange'];
}> = ({ sections, onSettingChange, ...props }) => (
	<Settings
		kind='accessibility-settings'
		sections={sections}
		onSettingChange={onSettingChange}
		{...props}
	/>
);
export const PrivacySettings: React.FC<{
	sections: SettingsSection[];
	onSettingChange?: SettingsProps['onSettingChange'];
}> = ({ sections, onSettingChange, ...props }) => (
	<Settings
		kind='privacy-settings'
		sections={sections}
		onSettingChange={onSettingChange}
		{...props}
	/>
);

const Settings = forwardRef<HTMLDivElement, SettingsProps>(
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

		const finalTitle = title ?? config.title;
		const finalShowHeader = config.showHeader ?? true;
		const finalShowFooter = config.showFooter ?? false;

		const getCustomizationTypeFlags = (title: string) => {
			const lowerTitle = title.toLowerCase();
			return {
				isEmote: lowerTitle.includes('emote'),
				isFont: lowerTitle.includes('font'),
				isTheme: lowerTitle.includes('theme'),
				isBorder: lowerTitle.includes('border'),
				isBackground: lowerTitle.includes('background'),
				lowerTitle,
			};
		};

		const renderCustomizationItem = (
			item: SettingsItem,
			idx: number
		) => {
			const isLocked = lockedIndices.includes(idx);
			const isShop = !!item.shop && !item.unlocked;
			const title = config?.title || '';
			const {
				isEmote,
				isFont,
				isTheme,
				isBorder,
				isBackground,
			} = getCustomizationTypeFlags(title);

			const itemClasses = clsx(
				styles.customizationItemBtn,
				{
					[styles.equipped]: item.equipped,
					[styles.locked]: isLocked,
					[styles.shop]: isShop,
				}
			);

			const handleClick = () => {
				if (isLocked) {
					if (onLockedClick) onLockedClick(item);
				} else if (isShop) {
					if (onShopItemClick) onShopItemClick(item);
				} else {
					if (onEquip)
						onEquip(title.toLowerCase(), item.id);
				}
			};

			return (
				<Button
					key={item.id}
					onClick={handleClick}
					className={itemClasses}
					aria-label={`${ariaLabelPrefix} ${item.name}`}
					disabled={isLocked && !onLockedClick}
					kind='ghost'
				>
					{/* Render preview based on type */}
					{isTheme && (
						<Wrapper className={styles.themePreview}>
							<Wrapper className={styles.themeSwatch}>
								{item.primaryColor && (
									<Wrapper
										className={clsx(
											styles.themeSwatchBar,
											styles['themeSwatchBar--primary']
										)}
										style={
											{
												'--theme-primary-color':
													item.primaryColor,
											} as React.CSSProperties
										}
									/>
								)}
								{item.accentColor && (
									<Wrapper
										className={clsx(
											styles.themeSwatchBar,
											styles['themeSwatchBar--accent']
										)}
										style={
											{
												'--theme-accent-color':
													item.accentColor,
											} as React.CSSProperties
										}
									/>
								)}
								{item.secondaryColor && (
									<Wrapper
										className={clsx(
											styles.themeSwatchBar,
											styles['themeSwatchBar--secondary']
										)}
										style={
											{
												'--theme-secondary-color':
													item.secondaryColor,
											} as React.CSSProperties
										}
									/>
								)}
							</Wrapper>
						</Wrapper>
					)}

					{isEmote && item.imageUrl && (
						<Wrapper className={styles.emotePreview}>
							<img src={item.imageUrl} alt={item.name} />
						</Wrapper>
					)}

					{isFont && (
						<Wrapper
							className={clsx(
								styles.fontPreview,
								styles['fontPreview--customFont']
							)}
							style={
								{
									'--custom-font-family': item.style,
								} as React.CSSProperties
							}
						>
							Aa
						</Wrapper>
					)}

					{isBorder && (
						<Wrapper
							className={clsx(
								styles.borderPreview,
								styles['borderPreview--customBorder']
							)}
							style={
								{
									'--custom-border-color': item.borderColor,
									'--custom-border-style':
										item.style || 'solid',
								} as React.CSSProperties
							}
						/>
					)}

					{isBackground && item.imageUrl && (
						<Wrapper className={styles.backgroundPreview}>
							<img src={item.imageUrl} alt={item.name} />
						</Wrapper>
					)}

					<span>{item.name}</span>

					{item.equipped && (
						<span
							className={
								styles.customizationEquippedIndicator
							}
						>
							✓
						</span>
					)}

					{isLocked && (
						<span
							className={
								styles.customizationLockedIndicator
							}
						>
							🔒
						</span>
					)}

					{item.price && item.currency && (
						<span className={styles.customizationPrice}>
							{item.price} {item.currency}
						</span>
					)}
				</Button>
			);
		};

		const renderSettingsField = (
			sectionId: string,
			field: any
		) => {
			const handleFieldChange = (value: any) => {
				if (onSettingChange) {
					onSettingChange(sectionId, field.id, value);
				}
			};

			return (
				<Wrapper
					key={field.id}
					className={styles.settingsField}
				>
					<label
						className={styles.fieldLabel}
						htmlFor={field.id}
					>
						{field.label}
					</label>
					<Wrapper className={styles.fieldInput}>
						{field.type === 'checkbox' && (
							<Checkbox
								id={field.id}
								checked={field.value}
								onChange={(e) =>
									handleFieldChange(e.target.checked)
								}
							/>
						)}
						{field.type === 'select' && (
							<Dropdown
								id={field.id}
								value={field.value}
								onChange={(e) =>
									handleFieldChange(e.target.value)
								}
							>
								{field.options?.map((option: any) => (
									<Radio
										key={option.value}
										value={option.value}
										onChange={() =>
											handleFieldChange(option.value)
										}
									>
										{option.label}
									</Radio>
								))}
							</Dropdown>
						)}
						{field.type === 'range' && (
							<Range
								id={field.id}
								value={field.value}
								min={field.min || 0}
								max={field.max || 100}
								step={field.step || 1}
								onChange={(value) =>
									handleFieldChange(Number(value))
								}
							/>
						)}
						{field.type === 'text' && (
							<Input
								id={field.id}
								value={field.value}
								onChange={(e) =>
									handleFieldChange(e.target.value)
								}
							/>
						)}
					</Wrapper>
				</Wrapper>
			);
		};

		const renderSettingsSection = (
			section: SettingsSection
		) => (
			<Wrapper
				key={section.id}
				className={styles.settingsSection}
			>
				<h3 className={styles.sectionTitle}>
					{section.title}
				</h3>
				{section.description && (
					<p className={styles.sectionDescription}>
						{section.description}
					</p>
				)}
				{section.fields.map((field) =>
					renderSettingsField(section.id, field)
				)}
			</Wrapper>
		);

		const renderContent = () => {
			switch (kind) {
				case 'customization-category':
					return (
						<Wrapper
							className={styles.customizationCategory}
						>
							{items.length === 0 ?
								<Wrapper
									className={styles.customizationEmptyMsg}
								>
									No {config?.customizationType || 'items'}{' '}
									unlocked yet.
								</Wrapper>
							:	<Wrapper
									className={styles.customizationGrid}
								>
									{items.map(renderCustomizationItem)}
								</Wrapper>
							}
						</Wrapper>
					);

				case 'settings-panel':
				case 'user-settings':
				case 'theme-settings':
				case 'accessibility-settings':
				case 'privacy-settings':
				default:
					return (
						<Wrapper>
							{sections.length === 0 ?
								<Wrapper
									className={styles.customizationEmptyMsg}
								>
									No settings configured.
								</Wrapper>
							:	sections.map(renderSettingsSection)}
						</Wrapper>
					);
			}
		};

		const mapVariant = (
			configVariant: string | undefined
		) => {
			switch (configVariant) {
				case 'theme-customization':
					return 'customization';
				case 'theme-selector':
					return 'theme-selector';
				case 'user-preferences':
					return 'user-preferences';
				default:
					return configVariant as
						| 'panel'
						| 'customization'
						| 'user-preferences'
						| 'theme-selector'
						| 'accessibility'
						| 'privacy';
			}
		};

		return (
			<SettingsLayout
				ref={ref}
				variant={mapVariant(config.variant)}
				position={config.position}
				title={finalTitle}
				onClose={onClose}
				showHeader={finalShowHeader}
				showFooter={finalShowFooter}
				className={className}
			>
				{renderContent()}
			</SettingsLayout>
		);
	}
);
Settings.displayName = 'Settings';

export default Settings;
