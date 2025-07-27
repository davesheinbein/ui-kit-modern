import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export type MapCustomChildrenPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'center'
	| 'custom';

export interface MapCustomChildrenProps {
	children?: ReactNode;
	position?: MapCustomChildrenPosition;
	visible?: boolean;
	portal?: boolean;
	className?: string;
	style?: React.CSSProperties;
	ariaLabel?: string;
	tabIndex?: number;
}

const MapCustomChildren: React.FC<
	MapCustomChildrenProps
> = ({
	children,
	position = 'top-right',
	visible = true,
	portal = false,
	className = '',
	style = {},
	ariaLabel,
	tabIndex = 0,
}) => {
	if (!visible || !children) return null;

	// Position class for container
	const positionClass = `map-custom-children map-custom-children--${position}`;
	const containerProps = {
		'className': `${positionClass} ${className}`.trim(),
		'style': {
			...style,
		},
		'role': 'region',
		'aria-label': ariaLabel,
		tabIndex,
	};

	const content = <div {...containerProps}>{children}</div>;

	if (portal) {
		// Render in portal (e.g., document.body)
		return createPortal(content, document.body);
	}
	return content;
};

export default MapCustomChildren;
