import React from 'react';
import styles from '../input.module.scss';

interface InputSuffixProps {
	suffix?: React.ReactNode;
}

const InputSuffix: React.FC<InputSuffixProps> = ({
	suffix,
}) => {
	if (!suffix) return null;
	return <span className={styles.suffix}>{suffix}</span>;
};

export default InputSuffix;
