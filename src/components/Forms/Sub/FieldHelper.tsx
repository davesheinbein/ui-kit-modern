import React from 'react';
import styles from '../Forms.module.scss';

interface FieldHelperProps {
	helperText?: React.ReactNode;
}

const FieldHelper: React.FC<FieldHelperProps> = ({
	helperText,
}) => {
	if (!helperText) return null;
	return (
		<div className={styles.helperText}>{helperText}</div>
	);
};

export default FieldHelper;
