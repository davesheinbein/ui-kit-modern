import React from 'react';
import styles from './Admin.module.scss';
import { Wrapper } from '../Wrappers';
import type { AdminConfiguration } from './configurations';

export interface AdminProps extends AdminConfiguration {
	children?: React.ReactNode;
	className?: string;
}

const getZIndexClass = (zIndex?: number) => {
	if (!zIndex) return '';
	return styles[`adminZ${zIndex}`] || '';
};

const Admin: React.FC<AdminProps> = ({
	children,
	position = 'top-left',
	enabled = false,
	className = '',
	zIndex = 9999,
	...props
}) => {
	if (!enabled) return null;

	const positionClass = `admin-${position}`;
	const zIndexClass = getZIndexClass(zIndex);
	const combinedClassName = [
		styles.adminComponent,
		styles[positionClass],
		zIndexClass,
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Wrapper className={combinedClassName} {...props}>
			{children}
		</Wrapper>
	);
};

export default Admin;
