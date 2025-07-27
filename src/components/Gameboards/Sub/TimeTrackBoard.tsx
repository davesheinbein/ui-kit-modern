import React from 'react';
let styles: any = {};
try {
	styles = require('./TimeTrackBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.module.scss');
	} catch {
		styles = {};
	}
}

export interface TimeTrackBoardProps {
	/**
	 * Array of positions for advanced usage. If not provided, will use trackLength/currentTime.
	 */
	positions?: Array<{
		label: string;
		active?: boolean;
		completed?: boolean;
		icon?: React.ReactNode;
		[key: string]: any;
	}>;
	/**
	 * Array of round labels. If not provided, will use numbers 1..trackLength.
	 */
	roundOrder?: Array<string>;
	/**
	 * The current round index (for highlighting in roundOrder).
	 */
	currentRound?: number;
	/**
	 * Simple mode: number of cells in the track.
	 */
	trackLength?: number;
	/**
	 * Simple mode: current cell index.
	 */
	currentTime?: number;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const TimeTrackBoard: React.FC<TimeTrackBoardProps> = ({
	positions,
	roundOrder,
	currentRound,
	trackLength = 10,
	currentTime = 0,
	className = '',
	style = {},
	...props
}) => {
	// If positions not provided, generate simple cells
	const computedPositions =
		positions && positions.length > 0 ?
			positions
		:	Array.from({ length: trackLength }).map((_, i) => ({
				label: String(i + 1),
				active: i === currentTime,
				completed: i < currentTime,
			}));
	// If roundOrder not provided, use numbers
	const computedRoundOrder =
		roundOrder && roundOrder.length > 0 ?
			roundOrder
		:	Array.from({ length: trackLength }).map((_, i) =>
				String(i + 1)
			);
	const computedCurrentRound =
		typeof currentRound === 'number' ? currentRound : (
			currentTime
		);
	return (
		<div
			className={`${styles.timeTrackBoard || ''} ${className}`.trim()}
			style={style}
			role='list'
			aria-label='Time Track Board'
			{...props}
		>
			<div
				className={styles.timeTrackBoard__roundOrder || ''}
			>
				{computedRoundOrder.length > 0 && (
					<span
						className={
							styles.timeTrackBoard__roundLabel || ''
						}
					>
						Round Order:
					</span>
				)}
				{computedRoundOrder.map((round, idx) => (
					<span
						key={round}
						className={`${styles.timeTrackBoard__round || ''} ${
							idx === computedCurrentRound ?
								styles.activeRound || 'active'
							:	''
						}`.trim()}
						aria-current={
							idx === computedCurrentRound ? 'step' : (
								undefined
							)
						}
					>
						{round}
					</span>
				))}
			</div>
			<div className={styles.timeTrackBoard__track || ''}>
				{computedPositions.map((pos, idx) => (
					<div
						key={pos.label + idx}
						className={`${styles.timeTrackBoard__cell || ''} ${
							pos.active ?
								styles.activeCell || 'active'
							:	''
						} ${pos.completed ? styles.completedCell || 'completed' : ''}`.trim()}
						tabIndex={0}
						aria-label={`Time position ${pos.label}${pos.active ? ' (active)' : ''}${pos.completed ? ' (completed)' : ''}`}
						role='listitem'
					>
						<span
							className={
								styles.timeTrackBoard__cellLabel || ''
							}
						>
							{pos.label}
						</span>
						{'icon' in pos && pos.icon && (
							<span
								className={
									styles.timeTrackBoard__cellIcon || ''
								}
							>
								{pos.icon}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default TimeTrackBoard;
