import React from 'react';
import UnifiedGraph, {
	UnifiedGraphProps,
} from './UnifiedGraph';

export type GraphShape =
	| 'bar'
	| 'horizontalBar'
	| 'pie'
	| 'line'
	| 'area'
	| 'radar'
	| 'composed';

/**
 * Primary Graph component - a wrapper around UnifiedGraph for the most common use case
 * For more advanced graph types, use UnifiedGraph with the 'kind' prop
 * @example
 * <Graphs data={data} />
 * <Graphs data={data} shape="pie" />
 * <Graphs data={data} kind="analytics-trend" />
 */
export interface GraphsProps
	extends Omit<UnifiedGraphProps, 'kind'> {
	/** Graph shape - defaults to 'bar' */
	shape?: GraphShape;
	/** Graph kind - for advanced configurations */
	kind?: UnifiedGraphProps['kind'];
}

const Graphs: React.FC<GraphsProps> = ({
	shape = 'bar',
	kind,
	...props
}) => {
	// Map legacy shape to kind if kind is not provided
	const finalKind =
		kind || (shape as UnifiedGraphProps['kind']);

	return <UnifiedGraph kind={finalKind} {...props} />;
};

export default Graphs;
