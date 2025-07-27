import React from 'react';
import styles from './LadderPathBoard.module.scss';

export interface LadderPathBoardProps {
	rungs: Array<{
		label?: string;
		color?: string;
		id?: string;
		[key: string]: any;
	}>;
	className?: string;
	style?: React.CSSProperties;
	renderRung?: (rung: any, idx: number) => React.ReactNode;
	ariaLabel?: string;
	[key: string]: any;
}

const LadderPathBoard: React.FC<LadderPathBoardProps> = ({
	rungs = [],
	className = '',
	style = {},
	renderRung,
	ariaLabel = 'Ladder Board',
	...props
}) => {
	// Render vertical ladder: rungs as rows, rails as sides
	return (
		<div
			className={`${styles.ladderBoard || 'ladder-board'} ${className}`}
			style={style}
			role='grid'
			aria-label={ariaLabel}
			{...props}
		>
			<div
				className={
					styles.ladderBoard__rails || 'ladder-board__rails'
				}
				aria-hidden='true'
			>
				<div
					className={
						styles.ladderBoard__rail || 'ladder-board__rail'
					}
				/>
				<div
					className={
						styles.ladderBoard__rail || 'ladder-board__rail'
					}
				/>
			</div>
			<div
				className={
					styles.ladderBoard__rungs || 'ladder-board__rungs'
				}
			>
				{rungs.length === 0 ?
					<div
						className={
							styles.ladderBoard__empty ||
							'ladder-board__empty'
						}
					>
						No rungs
					</div>
				:	rungs.map((rung, idx) => (
						<div
							key={rung.id || idx}
							className={
								styles.ladderBoard__rung ||
								'ladder-board__rung'
							}
							style={{
								background:
									rung.color || 'var(--rung-bg, #e0e7ef)',
							}}
							role='row'
							aria-label={rung.label || `Rung ${idx + 1}`}
						>
							{renderRung ?
								renderRung(rung, idx)
							:	<span
									className={
										styles.ladderBoard__rungLabel ||
										'ladder-board__rung-label'
									}
								>
									{rung.label || `Rung ${idx + 1}`}
								</span>
							}
						</div>
					))
				}
			</div>
		</div>
	);
};

export default LadderPathBoard;
