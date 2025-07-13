// Checkbox subcomponent: CheckboxLabel
import React from 'react';
import styles from '../checkbox.module.scss';

interface CheckboxLabelProps {
	label?: React.ReactNode;
	disabled?: boolean;
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
	label,
	disabled,
}) => {
	if (!label) return null;
	return (
		<span
			className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ''}`}
		>
			{label}
		</span>
	);
};

export default CheckboxLabel;
