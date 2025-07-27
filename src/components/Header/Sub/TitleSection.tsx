import React from 'react';
import { Wrapper } from '../../Wrappers';
import { Button } from '../../Button';
import styles from '../Header.module.scss';
import type { HeaderProps } from './types';

interface TitleSectionProps {
	title?: string;
	subtitle?: string;
	icon?: React.ReactNode;
	collapsible?: boolean;
	collapsed?: boolean;
	onCollapseToggle?: () => void;
	testId?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
	title,
	subtitle,
	icon,
	collapsible,
	collapsed,
	onCollapseToggle,
	testId,
}) => {
	if (!title && !subtitle && !icon) return null;

	return (
		<Wrapper className={styles.titleSection}>
			{icon && (
				<span className={styles.titleIcon}>{icon}</span>
			)}
			<Wrapper className={styles.titleContent}>
				{title && (
					<h1
						className={styles.title}
						data-testid={`${testId}-title`}
					>
						{title}
					</h1>
				)}
				{subtitle && (
					<p
						className={styles.subtitle}
						data-testid={`${testId}-subtitle`}
					>
						{subtitle}
					</p>
				)}
			</Wrapper>
			{collapsible && (
				<Button
					kind='icon'
					size='small'
					onClick={onCollapseToggle}
					className={styles.collapseButton}
					label={
						collapsed ? 'Expand header' : 'Collapse header'
					}
					icon={collapsed ? '▼' : '▲'}
					data-testid={`${testId}-collapse-button`}
				/>
			)}
		</Wrapper>
	);
};

export default TitleSection;
