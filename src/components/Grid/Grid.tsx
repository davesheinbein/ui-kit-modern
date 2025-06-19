import React from 'react';
import UnifiedGrid, {
	UnifiedGridProps,
} from './UnifiedGrid';

/**
 * Grid - Basic wrapper around UnifiedGrid for simple use cases
 * Similar to the Button component's relationship with UnifiedButton
 *
 * @example
 * <Grid words={words} onSelect={handleSelect} />
 * <Grid kind="vs-grid" words={words} selected={selected} />
 */
export interface GridProps
	extends Omit<UnifiedGridProps, 'kind'> {
	/** Grid kind - defaults to 'game' */
	kind?: UnifiedGridProps['kind'];
}

const Grid: React.FC<GridProps> = ({
	kind = 'game',
	...props
}) => {
	return <UnifiedGrid kind={kind} {...props} />;
};

export default Grid;
