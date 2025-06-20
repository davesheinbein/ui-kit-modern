import React, { forwardRef } from 'react';
import UnifiedMedia, {
	UnifiedMediaProps,
} from './UnifiedMedia';

export interface MediaProps
	extends Omit<UnifiedMediaProps, 'kind'> {
	kind?: UnifiedMediaProps['kind'];
}

const Media = forwardRef<HTMLDivElement, MediaProps>(
	({ kind = 'image-card', ...props }, ref) => {
		return (
			<UnifiedMedia ref={ref} kind={kind} {...props} />
		);
	}
);

Media.displayName = 'Media';
export default Media;
