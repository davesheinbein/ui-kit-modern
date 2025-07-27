import React from 'react';

export interface HiddenZonesRandomRevealBoardProps {
	zones: any[];
	revealed: boolean[];
	[key: string]: any;
}

import './HiddenZonesRandomRevealBoard.module.scss';

const HiddenZonesRandomRevealBoard: React.FC<
	HiddenZonesRandomRevealBoardProps
> = ({
	zones = [],
	revealed = [],
	onReveal,
	className = '',
	style = {},
	...props
}) => {
	// Defensive: handle missing zones/revealed
	const zoneCount = zones.length;
	const revealedArr =
		(
			Array.isArray(revealed) &&
			revealed.length === zoneCount
		) ?
			revealed
		:	Array(zoneCount).fill(false);

	// Click handler for revealing a zone
	const handleReveal = (idx: number) => {
		if (
			typeof onReveal === 'function' &&
			!revealedArr[idx]
		) {
			onReveal(idx);
		}
	};

	return (
		<div
			className={`hidden-zones-random-reveal-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<div className='hidden-zones-random-reveal-board__grid'>
				{zones.map((zone, idx) => (
					<div
						key={idx}
						className={`hidden-zones-random-reveal-board__tile${revealedArr[idx] ? ' revealed' : ''}`}
						onClick={() => handleReveal(idx)}
						role='button'
						tabIndex={0}
						aria-label={
							revealedArr[idx] ?
								`Zone ${idx + 1} revealed`
							:	`Zone ${idx + 1} hidden`
						}
						style={{
							cursor:
								revealedArr[idx] ? 'default' : 'pointer',
							opacity: revealedArr[idx] ? 1 : 0.7,
						}}
					>
						{revealedArr[idx] ?
							<span className='hidden-zones-random-reveal-board__content'>
								{zone}
							</span>
						:	<span className='hidden-zones-random-reveal-board__hidden'>
								?
							</span>
						}
					</div>
				))}
			</div>
		</div>
	);
};

export default HiddenZonesRandomRevealBoard;
