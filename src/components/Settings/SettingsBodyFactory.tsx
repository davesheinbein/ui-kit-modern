import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Settings.module.scss';
import {
	SettingsConfiguration,
	SettingsItem,
	SettingsSection,
} from './SettingsConfigurations';

export interface SettingsBodyFactoryProps {
	kind:
		| 'settings-panel'
		| 'customization-category'
		| 'user-settings'
		| 'theme-settings'
		| 'accessibility-settings'
		| 'privacy-settings';
	configuration?: SettingsConfiguration;
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
	ariaLabelPrefix?: string;
	lockedIndices?: number[];
	[key: string]: any;
}

/**
 * SettingsBodyFactory - Creates the settings content based on settings kind
 * This is the DRY equivalent of individual settings components
 */
const SettingsBodyFactory = forwardRef<
	any,
	SettingsBodyFactoryProps
>(
	(
		{
			kind,
			configuration,
			items = [],
			sections = [],
			onEquip,
			onSettingChange,
			onLockedClick,
			onShopItemClick,
			ariaLabelPrefix = 'settings',
			lockedIndices = [],
			...props
		},
		ref
	) => {
		// Helper function to get customization type flags
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

		// Render customization item
		const renderCustomizationItem = (
			item: SettingsItem,
			idx: number
		) => {
			const isLocked = lockedIndices.includes(idx);
			const isShop = !!item.shop && !item.unlocked;
			const title = configuration?.title || '';
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
				<button
					key={item.id}
					onClick={handleClick}
					className={itemClasses}
					aria-label={`${ariaLabelPrefix} ${item.name}`}
					disabled={isLocked && !onLockedClick}
				>
					{/* Render preview based on type */}
					{isTheme && (
						<div className={styles.themePreview}>
							<div className={styles.themeSwatch}>
								{item.primaryColor && (
									<div
										className={styles.themeSwatchBar}
										style={{
											backgroundColor: item.primaryColor,
										}}
									/>
								)}
								{item.accentColor && (
									<div
										className={styles.themeSwatchBar}
										style={{
											backgroundColor: item.accentColor,
										}}
									/>
								)}
								{item.secondaryColor && (
									<div
										className={styles.themeSwatchBar}
										style={{
											backgroundColor: item.secondaryColor,
										}}
									/>
								)}
							</div>
						</div>
					)}

					{isEmote && item.imageUrl && (
						<div className={styles.emotePreview}>
							<img src={item.imageUrl} alt={item.name} />
						</div>
					)}

					{isFont && (
						<div
							className={styles.fontPreview}
							style={{ fontFamily: item.style }}
						>
							Aa
						</div>
					)}

					{isBorder && (
						<div
							className={styles.borderPreview}
							style={{
								borderColor: item.borderColor,
								borderStyle: item.style || 'solid',
							}}
						/>
					)}

					{isBackground && item.imageUrl && (
						<div className={styles.backgroundPreview}>
							<img src={item.imageUrl} alt={item.name} />
						</div>
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
				</button>
			);
		};

		// Render settings field
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
				<div
					key={field.id}
					className={styles.settingsField}
				>
					<label
						className={styles.fieldLabel}
						htmlFor={field.id}
					>
						{field.label}
					</label>
					<div className={styles.fieldInput}>
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
					</div>
				</div>
			);
		};

		// Render settings section
		const renderSettingsSection = (
			section: SettingsSection
		) => (
			<div
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
			</div>
		);

		switch (kind) {
			case 'customization-category':
				return (
					<div
						ref={ref}
						className={styles.customizationCategory}
						{...props}
					>
						{items.length === 0 ?
							<div className={styles.customizationEmptyMsg}>
								No{' '}
								{configuration?.customizationType ||
									'items'}{' '}
								unlocked yet.
							</div>
						:	<div className={styles.customizationGrid}>
								{items.map(renderCustomizationItem)}
							</div>
						}
					</div>
				);

			case 'settings-panel':
			case 'user-settings':
			case 'theme-settings':
			case 'accessibility-settings':
			case 'privacy-settings':
			default:
				return (
					<div ref={ref} {...props}>
						{sections.length === 0 ?
							<div className={styles.customizationEmptyMsg}>
								No settings configured.
							</div>
						:	sections.map(renderSettingsSection)}
					</div>
				);
		}
	}
);

SettingsBodyFactory.displayName = 'SettingsBodyFactory';

export default SettingsBodyFactory;
