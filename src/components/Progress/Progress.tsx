import React, { forwardRef } from 'react';
import UnifiedProgress, {
	UnifiedProgressProps,
} from './UnifiedProgress';

export interface ProgressProps
	extends Omit<UnifiedProgressProps, 'kind'> {
	kind?: UnifiedProgressProps['kind'];
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
