import React from 'react';
import classNames from 'classnames';
import styles from './NotificationBanner.module.scss';

export type NotificationType =
	| 'burn'
	| 'achievement'
	| 'system'
	| 'taunt';

export interface NotificationBannerProps {
	type: NotificationType;
	message: string;
	onClose: () => void;
	index: number;
}

const typeColors: Record<NotificationType, string> = {
	burn: '#ff7043',
	achievement: '#ffd700',
	system: '#2196f3',
	taunt: '#a259f7',
};

const NotificationBanner: React.FC<
	NotificationBannerProps
> = ({ type, message, onClose, index }) => {
	React.useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 2500);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div
			className={classNames(
				styles.notificationBanner,
				styles[
					`notificationBanner${type.charAt(0).toUpperCase() + type.slice(1)}`
				]
			)}
			style={{ backgroundColor: typeColors[type] }}
		>
			{message}
		</div>
	);
};

export default NotificationBanner;
