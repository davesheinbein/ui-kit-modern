// Checkbox subcomponent: CheckboxIcon
import React from 'react';
import { Icons } from '../../Icons';

interface CheckboxIconProps {
	icon?: { checked?: string; unchecked?: string };
	checked?: boolean;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
	icon,
	checked,
}) => {
	if (!icon) return null;
	const iconName = checked ? icon.checked : icon.unchecked;
	if (!iconName) return null;
	return <Icons name={iconName as any} size={18} />;
};

export default CheckboxIcon;
