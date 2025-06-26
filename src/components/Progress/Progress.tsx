import React, { forwardRef } from 'react';
import Progress, { ProgressProps } from './Progress';

export interface ProgressProps
	extends Omit<ProgressProps, 'kind'> {
	kind?: ProgressProps['kind'];
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
	({ kind = 'linear-progress', ...props }, ref) => {
		return <Progress ref={ref} kind={kind} {...props} />;
	}
);

Progress.displayName = 'Progress';
export default Progress;
