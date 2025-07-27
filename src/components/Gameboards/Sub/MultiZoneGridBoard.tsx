import React from 'react';

export interface MultiZoneGridBoardProps {
	grid: any[];
	zones: any[];
	movementTypes: any[];
	[key: string]: any;
}

import './MultiZoneGridBoard.module.scss';

const getZoneColor = (zoneIndex: number) => {
	const colors = [
		'#e0f7fa',
		'#ffe0b2',
		'#c8e6c9',
		'#f8bbd0',
		'#d1c4e9',
		'#fff9c4',
		'#b2dfdb',
		'#ffccbc',
		'#dcedc8',
		'#f0f4c3',
	];
	return colors[zoneIndex % colors.length];
};

const MultiZoneGridBoard: React.FC<
	MultiZoneGridBoardProps
> = ({
	grid = [],
	zones = [],
	movementTypes = [],
	cellRenderer,
	zoneRenderer,
	className = '',
	style = {},
	...props
}) => {
	// Map each cell to its zone
	const getZoneForCell = (
		rowIdx: number,
		colIdx: number
	) => {
		for (let i = 0; i < zones.length; i++) {
			const zone = zones[i];
			if (
				zone.cells?.some(
					(cell: any) =>
						cell[0] === rowIdx && cell[1] === colIdx
				)
			) {
				return i;
			}
		}
		return -1;
	};

	return (
		<div
			className={`multi-zone-grid-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<div className='multi-zone-grid-board__grid'>
				{grid.map((row, rowIdx) => (
					<div
						className='multi-zone-grid-board__row'
						key={rowIdx}
					>
						{row.map((cell: any, colIdx: number) => {
							const zoneIdx = getZoneForCell(
								rowIdx,
								colIdx
							);
							const zone = zones[zoneIdx] || null;
							const movementType =
								movementTypes[zoneIdx] || null;
							const cellStyle = {
								background:
									zoneIdx >= 0 ?
										getZoneColor(zoneIdx)
									:	undefined,
								border: '1px solid #e0e0e0',
								minWidth: 32,
								minHeight: 32,
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: 14,
								cursor:
									movementType ? 'pointer' : 'default',
							};
							return (
								<div
									className={`multi-zone-grid-board__cell zone-${zoneIdx}`}
									key={colIdx}
									style={cellStyle}
									title={zone?.name || undefined}
									data-zone={zoneIdx}
									data-movement-type={
										movementType || undefined
									}
								>
									{cellRenderer ?
										cellRenderer({
											cell,
											rowIdx,
											colIdx,
											zone,
											movementType,
										})
									:	cell}
								</div>
							);
						})}
					</div>
				))}
			</div>
			{/* Optional zone legend */}
			{zones.length > 0 && (
				<div className='multi-zone-grid-board__legend'>
					{zones.map((zone, i) => (
						<div
							key={i}
							className='multi-zone-grid-board__legend-item'
							style={{
								background: getZoneColor(i),
								padding: '4px 8px',
								margin: '2px',
								borderRadius: 4,
								display: 'inline-block',
							}}
						>
							{zoneRenderer ?
								zoneRenderer(zone, i)
							:	zone.name || `Zone ${i + 1}`}
							{movementTypes[i] && (
								<span
									style={{
										marginLeft: 8,
										fontSize: 12,
										color: '#666',
									}}
								>
									({movementTypes[i]})
								</span>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MultiZoneGridBoard;
