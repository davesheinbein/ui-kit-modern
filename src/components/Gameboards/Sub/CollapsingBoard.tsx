import React from 'react';

export interface CollapsingBoardProps {
	/** Array of tile data to display */
	tiles: any[];
	/** Array of booleans indicating collapsed state for each tile */
	collapsed: boolean[];
	/** Optional custom tile renderer */
	renderTile?: (tile: any, idx: number) => React.ReactNode;
	/** Optional className for board container */
	className?: string;
	/** Optional style for board container */
	style?: React.CSSProperties;
	[key: string]: any;
}

const CollapsingBoard: React.FC<CollapsingBoardProps> = ({
	tiles = [],
	collapsed = [],
	className = '',
	style = {},
	renderTile,
	...props
}) => {
	// Render tiles, hiding or fading out collapsed ones
	return (
		<div
			className={`collapsing-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<div className='collapsing-board__grid'>
				{tiles.map((tile, idx) => {
					const isCollapsed = collapsed[idx];
					if (isCollapsed) {
						// Optionally fade out or remove
						return (
							<div
								key={idx}
								className='collapsing-board__cell collapsing-board__cell--collapsed'
								style={{
									opacity: 0.3,
									pointerEvents: 'none',
								}}
							>
								{/* Optionally show placeholder or nothing */}
							</div>
						);
					}
					return (
						<div
							key={idx}
							className='collapsing-board__cell'
						>
							{renderTile ? renderTile(tile, idx) : tile}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CollapsingBoard;
