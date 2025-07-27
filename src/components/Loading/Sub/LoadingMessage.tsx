import React from 'react';
import styles from '../Loading.module.scss';

interface LoadingMessageProps {
	message?: string;
}

const LoadingMessage: React.FC<LoadingMessageProps> = ({
	message,
}) =>
	message ?
		<div className={styles.message}>{message}</div>
	:	null;

export default LoadingMessage;
