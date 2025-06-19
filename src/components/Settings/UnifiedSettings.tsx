import React, { forwardRef } from 'react';
import SettingsFactory from './SettingsFactoryDRY';
import { ExtendedSettingsKind } from './SettingsConfigurations';

// Re-export types for backward compatibility
export type SettingsKind = ExtendedSettingsKind;

export interface UnifiedSettingsProps {
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

/**
 * UnifiedSettings - High-level settings interface using the DRY system
 * Maintains backward compatibility while leveraging the factory pattern
 */
const UnifiedSettings = forwardRef<
	HTMLDivElement,
	UnifiedSettingsProps
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
			...props
		},
		ref
	) => {
		return (
			<SettingsFactory
				ref={ref}
				kind={kind}
				title={title}
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

UnifiedSettings.displayName = 'UnifiedSettings';

export default UnifiedSettings;
