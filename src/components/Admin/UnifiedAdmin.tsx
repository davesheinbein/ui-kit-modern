import React from 'react';
import Admin from './Admin';
import { AdminBodyFactory } from './factory';
import { ADMIN_CONFIGURATIONS } from './configurations';
import type {
	AdminKind,
	AdminConfiguration,
} from './configurations';

export interface UnifiedAdminProps
	extends AdminConfiguration {
	kind: AdminKind;
	componentId?: string; // For identifying this instance in Redux
	children?: React.ReactNode;
	[key: string]: any;
}

/**
 * UnifiedAdmin - The main DRY admin component
 *
 * This component combines the base Admin wrapper with the AdminBodyFactory
 * to create any admin component type through configuration.
 */
const UnifiedAdmin: React.FC<UnifiedAdminProps> = ({
	kind,
	componentId,
	children,
	...props
}) => {
	// Get base configuration for this admin kind
	const baseConfig = ADMIN_CONFIGURATIONS[kind] || {};

	// Merge base config with props (props take precedence)
	const finalConfig = {
		...baseConfig,
		...props,
		kind,
	};

	return (
		<Admin {...finalConfig}>
			{children || (
				<AdminBodyFactory
					kind={kind}
					componentId={componentId}
					{...props}
				/>
			)}
		</Admin>
	);
};

export default UnifiedAdmin;
