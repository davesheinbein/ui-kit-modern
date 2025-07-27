import React from 'react';
import styles from '../input.module.scss';

interface InputPrefixProps {
	prefix?: React.ReactNode;
}

const InputPrefix: React.FC<InputPrefixProps> = ({
	prefix,
}) => {
	if (!prefix) return null;
	return <span className={styles.prefix}>{prefix}</span>;
};

export default InputPrefix;
