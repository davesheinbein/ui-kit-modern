import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface NotificationCardContentProps {
	notificationType?:
		| 'info'
		| 'warning'
		| 'error'
		| 'success';
	title?: string;
	subtitle?: string;
	content?: React.ReactNode;
	actions?: React.ReactNode;
}

const NotificationCardContent: React.FC<
	NotificationCardContentProps
> = ({
	notificationType = 'info',
	title,
	subtitle,
	content,
	actions,
}) => {
	const notificationClass = [
		styles['notification-card'],
		`notification-${notificationType}`,
	].join(' ');

	const getNotificationIcon = () => {
		switch (notificationType) {
			case 'success':
				return '✔️';
			case 'error':
				return '❌';
			case 'warning':
				return '⚠️';
			case 'info':
			default:
				return 'ℹ️';
		}
	};

	return (
		<Wrapper
			className={notificationClass}
			style={{
				display: 'flex',
				alignItems: 'flex-start',
				gap: 12,
			}}
		>
			<span style={{ fontSize: 22, marginTop: 2 }}>
				{getNotificationIcon()}
			</span>
			<div style={{ flex: 1 }}>
				{title && <h3 style={{ margin: 0 }}>{title}</h3>}
				{subtitle && (
					<div
						style={{ color: '#888', fontSize: '0.95em' }}
					>
						{subtitle}
					</div>
				)}
				{content && (
					<div style={{ marginTop: 8 }}>{content}</div>
				)}
				{actions && (
					<div style={{ marginTop: 12 }}>{actions}</div>
				)}
			</div>
		</Wrapper>
	);
};

export default NotificationCardContent;
