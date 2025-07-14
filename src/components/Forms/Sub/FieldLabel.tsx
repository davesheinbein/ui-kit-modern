import React from 'react';
import styles from '../Forms.module.scss';

interface FieldLabelProps {
	name: string;
	label?: React.ReactNode;
	required?: boolean;
}

const FieldLabel: React.FC<FieldLabelProps> = ({
	name,
	label,
	required,
}) => {
	if (!label) return null;
	return (
		<label className={styles.label} htmlFor={name}>
			{label}
			{required && (
				<span className={styles.required}>*</span>
			)}
		</label>
	);
};

export default FieldLabel;
