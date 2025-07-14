import React from 'react';
import styles from '../Forms.module.scss';

interface FieldErrorProps {
	error?: React.ReactNode;
}

const FieldError: React.FC<FieldErrorProps> = ({
	error,
}) => {
	if (!error) return null;
	return <div className={styles.errorText}>{error}</div>;
};

export default FieldError;
