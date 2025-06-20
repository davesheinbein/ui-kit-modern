import React, { forwardRef } from 'react';
import UnifiedMap, { UnifiedMapProps } from './UnifiedMap';

export interface MapProps
	extends Omit<UnifiedMapProps, 'kind'> {
	kind?: UnifiedMapProps['kind'];
}

const Map = forwardRef<HTMLDivElement, MapProps>(
	({ kind = 'interactive-map', ...props }, ref) => {
		return <UnifiedMap ref={ref} kind={kind} {...props} />;
	}
);

Map.displayName = 'Map';
export default Map;
