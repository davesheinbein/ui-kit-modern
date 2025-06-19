import React from 'react';
import UnifiedSettings from './UnifiedSettings';
import { SettingsItem } from './SettingsConfigurations';

export interface CustomizationCategoryProps {
	title: string;
	items: SettingsItem[];
	onEquip: (
		slot: string,
		id: string
	) => void | Promise<void>;
	ariaLabelPrefix: string;
	lockedIndices?: number[];
	onLockedClick?: (item: any) => void;
	onShopItemClick?: (item: any) => void;
}

/**
 * CustomizationCategory - Backward compatibility wrapper
 * For new development, use UnifiedSettings with kind="customization-category"
 */
const CustomizationCategory: React.FC<
	CustomizationCategoryProps
> = ({
	title,
	items,
	onEquip,
	ariaLabelPrefix,
	lockedIndices = [],
	onLockedClick,
	onShopItemClick,
}) => {
	return (
		<UnifiedSettings
			kind='customization-category'
			title={title}
			items={items}
			onEquip={onEquip}
			ariaLabelPrefix={ariaLabelPrefix}
			lockedIndices={lockedIndices}
			onLockedClick={onLockedClick}
			onShopItemClick={onShopItemClick}
		/>
	);
};

export default CustomizationCategory;
