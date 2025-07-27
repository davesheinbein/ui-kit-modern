import React from 'react';

export interface LinearTrackBoardProps {
	length: number;
	positions: any[];
	[key: string]: any;
}
const LinearTrackBoard: React.FC<LinearTrackBoardProps> = ({
	length,
	positions,
	...props
}) => {
	// Styles
	const trackStyle: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		gap: 8,
		padding: '12px 0',
		background: 'var(--board-bg, #f8fafc)',
		borderRadius: 8,
		boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
		position: 'relative',
	};
	const cellStyle: React.CSSProperties = {
		width: 32,
		height: 32,
		borderRadius: '50%',
		background: 'var(--cell-bg, #fff)',
		border: '2px solid #e0e7ef',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: 500,
		fontSize: 16,
		position: 'relative',
	};
	// Build the track cells
	const cells = Array.from({ length }, (_, i) => {
		const marker =
			positions.includes(i) ?
				<span
					style={{
						position: 'absolute',
						top: -12,
						left: '50%',
						transform: 'translateX(-50%)',
						background: '#3b82f6',
						color: '#fff',
						borderRadius: '50%',
						width: 20,
						height: 20,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 12,
						fontWeight: 600,
						boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
					}}
				>
					●
				</span>
			:	null;
		return (
			<div key={i} style={cellStyle}>
				{i + 1}
				{marker}
			</div>
		);
	});
	return (
		<div style={trackStyle} {...props}>
			{cells}
		</div>
	);
};

export default LinearTrackBoard;
