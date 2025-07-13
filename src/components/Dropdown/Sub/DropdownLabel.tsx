import React from 'react';
import styles from '../dropdown.module.scss';

interface DropdownLabelProps {
	label?: React.ReactNode;
	required?: boolean;
	disabled?: boolean;
}

const DropdownLabel: React.FC<DropdownLabelProps> = ({
	label,
	required,
	disabled,
}) => {
	if (!label) return null;
	return (
		<label
			className={`${styles.fieldLabel} ${disabled ? styles.disabled : ''}`}
		>
			{label}
			{required && (
				<span className={styles.required}>*</span>
			)}
		</label>
	);
};

export default DropdownLabel;
