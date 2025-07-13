import React from 'react';
import { Button } from '../../Button';
import type { EmptyStateAction } from '../configurations';

export interface EmptyStateActionsProps {
	primaryAction?: EmptyStateAction;
	secondaryAction?: EmptyStateAction;
	actions?: EmptyStateAction[];
	className?: string;
}

const EmptyStateActions: React.FC<
	EmptyStateActionsProps
> = ({
	primaryAction,
	secondaryAction,
	actions,
	className,
}) => {
	if (!primaryAction && !secondaryAction && !actions)
		return null;
	return (
		<div
			className={className}
			style={{
				display: 'flex',
				gap: 8,
				justifyContent: 'center',
				marginTop: 16,
			}}
		>
			{primaryAction && (
				<Button
					{...primaryAction}
					variant={primaryAction.variant || 'primary'}
				>
					{primaryAction.label}
				</Button>
			)}
			{secondaryAction && (
				<Button
					{...secondaryAction}
					variant={secondaryAction.variant || 'secondary'}
				>
					{secondaryAction.label}
				</Button>
			)}
			{actions &&
				actions.map((action, i) => (
					<Button
						key={i}
						{...action}
						variant={action.variant || 'text'}
					>
						{action.label}
					</Button>
				))}
		</div>
	);
};

export default EmptyStateActions;
