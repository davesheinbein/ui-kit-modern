import React, { forwardRef } from 'react';
import UnifiedUtility, {
	UnifiedUtilityProps,
} from './UnifiedUtility';

export interface UtilityProps
	extends Omit<UnifiedUtilityProps, 'kind'> {
	kind?: UnifiedUtilityProps['kind'];
}

const Utility = forwardRef<HTMLDivElement, UtilityProps>(
	({ kind = 'tooltip', ...props }, ref) => {
		return (
			<UnifiedUtility ref={ref} kind={kind} {...props} />
		);
	}
);

Utility.displayName = 'Utility';
export default Utility;
