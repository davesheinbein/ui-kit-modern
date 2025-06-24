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
	items?: Array<{
		id: string;
		name: string;
		description?: string;
		equipped?: boolean;
		price?: number;
		currency?: string;
		shop?: boolean;
		unlocked?: boolean;
		[key: string]: any;
	}>;
	sections?: Array<{
		id: string;
		title: string;
		description?: string;
		fields: Array<{
			id: string;
			type:
				| 'checkbox'
				| 'radio'
				| 'select'
				| 'range'
				| 'text';
			label: string;
			value: any;
			options?: Array<{ label: string; value: any }>;
		}>;
	}>;
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
	[key: string]: any;
}

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
										className={styles.themeSwatchBar}
										style={{
											backgroundColor: item.primaryColor,
										}}
									/>
								)}
								{item.accentColor && (
									<Wrapper
										className={styles.themeSwatchBar}
										style={{
											backgroundColor: item.accentColor,
										}}
									/>
								)}
								{item.secondaryColor && (
									<Wrapper
										className={styles.themeSwatchBar}
										style={{
											backgroundColor: item.secondaryColor,
										}}
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
							className={styles.fontPreview}
							style={{ fontFamily: item.style }}
						>
							Aa
						</Wrapper>
					)}

					{isBorder && (
						<Wrapper
							className={styles.borderPreview}
							style={{
								borderColor: item.borderColor,
								borderStyle: item.style || 'solid',
							}}
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
							<input
								id={field.id}
								type='checkbox'
								checked={field.value}
								onChange={(e) =>
									handleFieldChange(e.target.checked)
								}
							/>
						)}
						{field.type === 'select' && (
							<select
								id={field.id}
								value={field.value}
								onChange={(e) =>
									handleFieldChange(e.target.value)
								}
							>
								{field.options?.map((option: any) => (
									<option
										key={option.value}
										value={option.value}
									>
										{option.label}
									</option>
								))}
							</select>
						)}
						{field.type === 'range' && (
							<input
								id={field.id}
								type='range'
								value={field.value}
								min={field.min || 0}
								max={field.max || 100}
								step={field.step || 1}
								onChange={(e) =>
									handleFieldChange(Number(e.target.value))
								}
							/>
						)}
						{field.type === 'text' && (
							<input
								id={field.id}
								type='text'
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
