import React, { forwardRef, memo } from 'react';
import { getEmptyStateConfig } from './configurations';
import { useEmptyStateConfig } from './Sub/useEmptyStateConfig';
import EmptyStateIcon from './Sub/EmptyStateIcon';
import EmptyStateIllustration from './Sub/EmptyStateIllustration';
import EmptyStateActions from './Sub/EmptyStateActions';
import { getEmptyStateClassNames } from './Sub/classNames';
import styles from './empty-state.module.scss';

const EmptyState = forwardRef<HTMLDivElement, any>(
	(props, ref) => {
		const {
			kind = 'no-data',
			children,
			className,
			title,
			description,
			icon,
			illustration,
			variant,
			size,
			centered,
			fullHeight,
			primaryAction,
			secondaryAction,
			actions,
			showIcon,
			showIllustration,
			allowCustomContent,
			...restProps
		} = props;

		const baseConfig = useEmptyStateConfig(kind, props);

		const cssClasses = getEmptyStateClassNames({
			variant,
			size,
			centered,
			fullHeight,
			className,
		});

		return (
			<div ref={ref} className={cssClasses} {...restProps}>
				<EmptyStateIcon
					icon={icon || baseConfig?.icon}
					showIcon={showIcon}
					className={styles.empty_state__icon}
				/>
				<EmptyStateIllustration
					illustration={
						illustration || baseConfig?.illustration
					}
					showIllustration={showIllustration}
					className={styles.empty_state__illustration}
				/>
				<div className={styles.empty_state__content}>
					{title && (
						<div className={styles.empty_state__title}>
							{title}
						</div>
					)}
					{description && (
						<div
							className={styles.empty_state__description}
						>
							{description}
						</div>
					)}
					{allowCustomContent && children}
				</div>
				<EmptyStateActions
					primaryAction={primaryAction}
					secondaryAction={secondaryAction}
					actions={actions}
					className={styles.empty_state__actions}
				/>
			</div>
		);
	}
);

EmptyState.displayName = 'EmptyState';
export default memo(EmptyState);
