import React from 'react';

export interface AncientRuinsMapBoardProps {
	ruins: any[];
	discoveries: any[];
	[key: string]: any;
}

const AncientRuinsMapBoard: React.FC<
	AncientRuinsMapBoardProps
> = ({ ruins, discoveries, ...props }) => {
	// Render ancient ruins exploration map
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(5, 1fr)`,
				gap: 12,
				padding: 24,
				background: '#f5f3e7',
				borderRadius: 12,
				boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
			}}
			{...props}
		>
			{ruins?.map((ruin, idx) => {
				const found = discoveries?.find(
					(d) => d.ruinId === ruin.id
				);
				return (
					<div
						key={ruin.id || idx}
						style={{
							position: 'relative',
							background: found ? '#b7e4c7' : '#e9ecef',
							color: found ? '#222' : '#888',
							borderRadius: 8,
							minHeight: 80,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 600,
							fontSize: 16,
							boxShadow:
								found ?
									'0 2px 8px rgba(71,191,145,0.12)'
								:	'0 2px 8px rgba(0,0,0,0.04)',
							transition: 'background 0.2s',
						}}
					>
						{ruin.name || `Ruin ${idx + 1}`}
						{found && (
							<span
								style={{
									position: 'absolute',
									top: 8,
									right: 12,
									background: '#f59e42',
									color: '#fff',
									borderRadius: 12,
									padding: '2px 10px',
									fontSize: 12,
									fontWeight: 700,
									boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
								}}
							>
								Discovered
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default AncientRuinsMapBoard;
