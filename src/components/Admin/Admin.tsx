import React from 'react';
import styles from './Admin.module.scss';
import type { AdminConfiguration } from './configurations';

export interface AdminProps extends AdminConfiguration {
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const Admin: React.FC<AdminProps> = ({
	children,
	position = 'top-left',
	enabled = false,
	className = '',
	style,
	zIndex = 9999,
	...props
}) => {
	if (!enabled) return null;

	const positionClass = `admin-${position}`;
	const combinedClassName = [
		styles.adminComponent,
		styles[positionClass],
		className,
	]
		.filter(Boolean)
		.join(' ');

	const combinedStyle = {
		zIndex,
		...style,
	};

	return (
		<div
			className={combinedClassName}
			style={combinedStyle}
			{...props}
		>
			{children}
		</div>
	);
};

export default Admin;
