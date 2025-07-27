import React from 'react';

export interface MysteryShuffleRevealBoardProps {
	elements: any[];
	revealed: boolean[];
	[key: string]: any;
}

import './MysteryShuffleRevealBoard.module.scss';

const MysteryShuffleRevealBoard: React.FC<
	MysteryShuffleRevealBoardProps
> = ({
	elements = [],
	revealed = [],
	tileRenderer,
	className = '',
	style = {},
	onTileClick,
	...props
}) => {
	return (
		<div
			className={`mystery-shuffle-reveal-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<div className='mystery-shuffle-reveal-board__grid'>
				{elements.map((el, i) => {
					const isRevealed = revealed[i];
					return (
						<div
							key={i}
							className={`mystery-shuffle-reveal-board__tile${isRevealed ? ' revealed' : ' unrevealed'}`}
							aria-label={
								isRevealed ?
									`Revealed: ${el}`
								:	'Unrevealed tile'
							}
							tabIndex={0}
							role='button'
							onClick={
								onTileClick ?
									() => onTileClick(i, el, isRevealed)
								:	undefined
							}
							style={{
								background:
									isRevealed ? '#e0f7fa' : '#bdbdbd',
								color: isRevealed ? '#333' : '#888',
								border: '1px solid #e0e0e0',
								borderRadius: 8,
								minWidth: 48,
								minHeight: 48,
								margin: 4,
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: 18,
								fontWeight: 600,
								cursor: onTileClick ? 'pointer' : 'default',
								boxShadow:
									isRevealed ?
										'0 2px 8px rgba(0,0,0,0.08)'
									:	'none',
								transition: 'background 0.2s',
							}}
						>
							{tileRenderer ?
								tileRenderer({ el, i, isRevealed })
							: isRevealed ?
								el
							:	<span
									style={{ fontSize: 24, color: '#bbb' }}
								>
									?
								</span>
							}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MysteryShuffleRevealBoard;
