import React from 'react';
let styles: any = {};
try {
	styles = require('./TimeTravelEpochMapBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.module.scss');
	} catch {
		styles = {};
	}
}

export interface TimeTravelEpochMapBoardProps {
	epochs: Array<{
		label?: string;
		name?: string;
		year?: number;
		icon?: React.ReactNode;
		[key: string]: any;
	}>;
	maps?: Array<{
		name: string;
		regions?: any[];
		color?: string;
		[key: string]: any;
	}>;
	currentEpoch?: number;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const TimeTravelEpochMapBoard: React.FC<
	TimeTravelEpochMapBoardProps
> = ({
	epochs = [],
	maps = [],
	currentEpoch = 0,
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={`${styles.timeTravelEpochMapBoard || ''} ${className}`.trim()}
			style={style}
			role='list'
			aria-label='Time Travel Epoch Map Board'
			{...props}
		>
			<div className={styles.epochTimeline || ''}>
				{epochs.map((epoch, idx) => {
					const label =
						epoch.label || epoch.name || `Epoch ${idx + 1}`;
					return (
						<div
							key={label + idx}
							className={`${styles.epochNode || ''} ${
								idx === currentEpoch ?
									styles.activeEpoch || 'active'
								:	''
							}`.trim()}
							tabIndex={0}
							aria-label={`Epoch ${label}${idx === currentEpoch ? ' (current)' : ''}`}
							role='listitem'
						>
							{epoch.icon && (
								<span className={styles.epochIcon || ''}>
									{epoch.icon}
								</span>
							)}
							<span className={styles.epochLabel || ''}>
								{label}
							</span>
							{epoch.year && (
								<span className={styles.epochYear || ''}>
									{epoch.year}
								</span>
							)}
						</div>
					);
				})}
			</div>
			{maps && maps.length > 0 && (
				<div className={styles.epochMaps || ''}>
					{maps.map((map, idx) => (
						<div
							key={map.name + idx}
							className={`${styles.epochMap || ''} ${map.color ? styles.coloredMap || '' : ''}`.trim()}
							style={
								map.color ?
									{ background: map.color }
								:	undefined
							}
							aria-label={`Map ${map.name}`}
							role='region'
						>
							<span className={styles.mapName || ''}>
								{map.name}
							</span>
							{map.regions &&
								Array.isArray(map.regions) && (
									<div className={styles.mapRegions || ''}>
										{map.regions.map(
											(region: any, rIdx: number) => (
												<span
													key={region.name + rIdx}
													className={styles.mapRegion || ''}
												>
													{region.name}
												</span>
											)
										)}
									</div>
								)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default TimeTravelEpochMapBoard;
