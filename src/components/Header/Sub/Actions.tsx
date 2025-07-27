import React from 'react';
import { Button, ExtendedButtonKind } from '../../Button';
import styles from '../Header.module.scss';
import type {
	HeaderAction,
	HeaderActionsAlign,
} from './types';

interface ActionsProps {
	primaryAction?: HeaderAction;
	actions: HeaderAction[];
	secondaryActions: HeaderAction[];
	actionsAlign: HeaderActionsAlign;
	testId?: string;
}

const mapActionVariantToKind = (
	variant?: string
): ExtendedButtonKind => {
	switch (variant) {
		case 'primary':
			return 'primary';
		case 'secondary':
			return 'secondary';
		case 'ghost':
			return 'ghost';
		case 'outline':
			return 'ghost';
		default:
			return 'ghost';
	}
};

const Actions: React.FC<ActionsProps> = ({
	primaryAction,
	actions,
	secondaryActions,
	actionsAlign,
	testId,
}) => {
	const allActions = [
		...(primaryAction ? [primaryAction] : []),
		...actions,
		...secondaryActions,
	];
	if (!allActions.length) return null;
	return (
		<div
			className={[
				styles.actions,
				styles[`actions-align-${actionsAlign}`],
			]
				.filter(Boolean)
				.join(' ')}
			data-testid={`${testId}-actions`}
		>
			{allActions.map((action, index) => (
				<Button
					key={action.id || index}
					kind={mapActionVariantToKind(action.variant)}
					size={action.size || 'medium'}
					onClick={action.onClick}
					href={action.href}
					disabled={action.disabled}
					loading={action.loading}
					className={action.className}
					label={action.ariaLabel || action.label}
					icon={action.icon}
					data-testid={`${testId}-action-${action.id || index}`}
				>
					{action.type !== 'icon' && action.label}
				</Button>
			))}
		</div>
	);
};

export default Actions;
