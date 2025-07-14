import React from 'react';
import type { BannerAction } from '../configurations';
import { Button } from '../../Button';

interface BannerActionsProps {
	actions?: BannerAction[];
}

const BannerActions: React.FC<BannerActionsProps> = ({
	actions,
}) => {
	if (!actions || actions.length === 0) return null;
	return (
		<div className='banner-actions'>
			{actions.map((action, i) => (
				<Button
					key={i}
					kind={action.variant || 'primary'}
					onClick={action.onClick}
					disabled={action.disabled}
				>
					{action.label}
				</Button>
			))}
		</div>
	);
};

export default BannerActions;
