import React, { forwardRef } from 'react';
import Progress, { UnifiedProgressProps } from './Progress';

export interface ProgressProps
	extends Omit<UnifiedProgressProps, 'kind'> {
	kind?: ProgressProps['kind'];
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
	({ kind = 'linear-progress', ...props }, ref) => {
		return (
			<UnifiedProgress ref={ref} kind={kind} {...props} />
		);
	}
);

Progress.displayName = 'Progress';
export default Progress;
