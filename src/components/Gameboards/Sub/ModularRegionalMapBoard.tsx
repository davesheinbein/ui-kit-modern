import React from 'react';
import clsx from 'clsx';
import styles from './ModularRegionalMapBoard.module.scss';

export interface ModularRegionalMapBoardProps {
	regions: Array<{
		id: string | number;
		name: string;
		color?: string;
		tiles?: Array<string | number>;
		[key: string]: any;
	}>;
	tiles: Array<{
		id: string | number;
		regionId?: string | number;
		label?: string;
		color?: string;
		[key: string]: any;
	}>;
	regionRenderer?: (region: any) => React.ReactNode;
	tileRenderer?: (tile: any) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const ModularRegionalMapBoard: React.FC<
	ModularRegionalMapBoardProps
> = ({
	regions = [],
	tiles = [],
	regionRenderer,
	tileRenderer,
	className = '',
	style = {},
	...props
}) => {
	// Defensive: handle empty regions/tiles
	if (!Array.isArray(regions) || regions.length === 0) {
		return (
			<div
				className={clsx(
					styles['modular-regional-map-board'],
					className
				)}
				style={style}
			>
				No regions
			</div>
		);
	}

	// Group tiles by region
	const regionTiles: Record<string | number, any[]> = {};
	tiles.forEach((tile) => {
		const regionId = tile.regionId;
		if (regionId !== undefined) {
			if (!regionTiles[regionId])
				regionTiles[regionId] = [];
			regionTiles[regionId].push(tile);
		}
	});

	return (
		<div
			className={clsx(
				styles['modular-regional-map-board'],
				className
			)}
			style={style}
			role='region'
			aria-label='Modular Regional Map Board'
			{...props}
		>
			<div
				className={
					styles['modular-regional-map-board__regions']
				}
			>
				{regions.map((region) => (
					<div
						key={region.id}
						className={clsx(
							styles['modular-regional-map-board__region']
						)}
						style={{
							background: region.color || '#e0e7ef',
						}}
						aria-label={region.name}
					>
						{regionRenderer ?
							regionRenderer(region)
						:	<span
								className={
									styles[
										'modular-regional-map-board__region-label'
									]
								}
							>
								{region.name}
							</span>
						}
						<div
							className={
								styles['modular-regional-map-board__tiles']
							}
						>
							{(regionTiles[region.id] || []).map(
								(tile) => (
									<div
										key={tile.id}
										className={clsx(
											styles[
												'modular-regional-map-board__tile'
											]
										)}
										style={{
											background: tile.color || '#fff',
										}}
										aria-label={
											tile.label || `Tile ${tile.id}`
										}
									>
										{tileRenderer ?
											tileRenderer(tile)
										:	<span
												className={
													styles[
														'modular-regional-map-board__tile-label'
													]
												}
											>
												{tile.label || tile.id}
											</span>
										}
									</div>
								)
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ModularRegionalMapBoard;
