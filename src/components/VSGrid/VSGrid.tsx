import React from 'react';
import styles from './VSGrid.module.scss';
import { WordButton } from '../WordButton';

export interface VSGridProps {
	words: string[];
	selected: string[];
	locked: string[];
	wildcards?: string[];
	onSelect: (word: string) => void;
	opponentSelected?: string[];
	playerColor?: string;
	opponentColor?: string;
	solvedBy?: Record<string, string[]>;
	playerId?: string;
	opponentId?: string;
	gridSize?: { rows: number; cols: number };
	preview?: boolean;
}

const VSGrid: React.FC<VSGridProps> = ({
	words,
	selected,
	locked,
	wildcards = [],
	onSelect,
	opponentSelected = [],
	playerColor = '#2563eb',
	opponentColor = '#ef4444',
	solvedBy = {},
	playerId,
	opponentId,
	gridSize = { rows: 4, cols: 4 },
	preview = false,
}) => {
	const gridStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
		gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
		gap: 12,
		width: '100%',
		maxWidth: 480,
		margin: '0 auto',
		minHeight: 320,
		background: '#fff',
		borderRadius: 16,
		boxShadow: '0 2px 16px 0 #e3eaff33',
		padding: 12,
	};

	return (
		<div className={styles.vsGrid} style={gridStyle}>
			{words.map((word, i) => {
				const isSelected = selected.includes(word);
				const isLocked = locked.includes(word);
				const isWildcard = wildcards.includes(word);
				const isOpponent = opponentSelected.includes(word);
				let solvedByPlayer = null;
				for (const pid in solvedBy) {
					if (solvedBy[pid]?.includes(word))
						solvedByPlayer = pid;
				}
				return (
					<div key={word} style={{ position: 'relative' }}>
						<WordButton
							word={word}
							isSelected={isSelected}
							isLocked={isLocked}
							onClick={
								preview ? () => {} : () => onSelect(word)
							}
							className={
								(isWildcard ? 'wildcard ' : '') +
								(isOpponent ? 'opponent ' : '') +
								(solvedByPlayer === playerId ?
									'solved-by-player '
								: solvedByPlayer === opponentId ?
									'solved-by-opponent '
								:	'')
							}
							style={
								preview ?
									{
										background:
											'rgb(253.8571428571, 240.7142857143, 188.1428571429)',
										color: '#1e293b',
										borderColor: '#fde047',
										boxShadow:
											'0 0 0 3px rgba(253, 224, 71, 0.3333333333), 0 4px 16px 0 rgba(56, 189, 248, 0.3333333333)',
										transform:
											'translateY(-2px) scale(1.03)',
										zIndex: 2,
									}
								:	undefined
							}
							tabIndex={preview ? -1 : 0}
						/>
						{/* VS overlays */}
						{isOpponent && !preview && (
							<span className={styles.vsGhostOverlay}>
								Opponent
							</span>
						)}
						{solvedByPlayer && !preview && (
							<span
								className={styles.vsSolvedBadge}
								style={{
									background:
										solvedByPlayer === playerId ?
											playerColor
										:	opponentColor,
								}}
							>
								{solvedByPlayer === playerId ?
									'You'
								:	'Them'}
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default VSGrid;
