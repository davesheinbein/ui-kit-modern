import React from 'react';
import styles from '../dropdown.module.scss';

interface DropdownHelperProps {
	error?: string;
	helpText?: string;
}

const DropdownHelper: React.FC<DropdownHelperProps> = ({
	error,
	helpText,
}) => (
	<>
		{error && (
			<div className={styles.errorText}>{error}</div>
		)}
		{helpText && (
			<div className={styles.helpText}>{helpText}</div>
		)}
	</>
);

export default DropdownHelper;
