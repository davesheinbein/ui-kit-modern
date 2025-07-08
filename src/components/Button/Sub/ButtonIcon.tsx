import React from 'react';
import { Icons } from '../../Icons';
import type { ButtonProps } from '../Button';

/**
 * Handles icon rendering logic for Button, including string icon names and React nodes.
 */
export function resolveDisplayIcon(
	icon: React.ReactNode,
	configIcon: React.ReactNode,
	size: ButtonProps['size']
): React.ReactNode {
	let displayIcon = icon || configIcon;
	if (typeof displayIcon === 'string') {
		const validIconNames = [
			'check',
			'close',
			'settings',
			'user',
			'home',
			'star',
			'search',
			'heart',
			'bell',
			'arrow-left',
			'arrow-right',
			'copy',
			'warning',
			'success',
			'danger',
		];
		if (validIconNames.includes(displayIcon)) {
			return (
				<Icons
					name={displayIcon as any}
					size={
						size === 'small' ? 16
						: size === 'large' ?
							28
						:	20
					}
				/>
			);
		}
	}
	return displayIcon;
}
