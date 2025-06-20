import React, { forwardRef } from 'react';
import UnifiedNotification, {
	UnifiedNotificationProps,
} from './UnifiedNotification';

// ========================================
// Props Interface
// ========================================

export interface NotificationProps
	extends Omit<UnifiedNotificationProps, 'kind'> {
	// Make kind optional and default to 'toast'
	kind?: UnifiedNotificationProps['kind'];
}

// ========================================
// Notification Component
// ========================================

/**
 * Notification - A simple wrapper around UnifiedNotification
 *
 * This component provides a simplified interface for basic notification usage,
 * defaulting to 'toast' kind while still allowing customization.
 */
const Notification = forwardRef<
	HTMLDivElement,
	NotificationProps
>((props, ref) => {
	const { kind = 'toast', ...restProps } = props;

	return (
		<UnifiedNotification
			{...restProps}
			kind={kind}
			ref={ref}
		/>
	);
});

Notification.displayName = 'Notification';

export default Notification;
