import React, { forwardRef } from 'react';
import UnifiedEmptyState, {
	UnifiedEmptyStateProps,
} from './UnifiedEmptyState';

export interface EmptyStateProps
	extends Omit<UnifiedEmptyStateProps, 'kind'> {
	kind?: UnifiedEmptyStateProps['kind'];
}

const EmptyState = forwardRef<
	HTMLDivElement,
	EmptyStateProps
>((props, ref) => {
	const { kind = 'no-data', ...restProps } = props;
	return (
		<UnifiedEmptyState
			{...restProps}
			kind={kind}
			ref={ref}
		/>
	);
});

EmptyState.displayName = 'EmptyState';
export default EmptyState;
