import React from 'react';

export interface AbstractAreaControlBoardProps {
	areas: any[];
	controlZones: any[];
	[key: string]: any;
}

const AbstractAreaControlBoard: React.FC<
	AbstractAreaControlBoardProps
> = ({ areas, controlZones, ...props }) => {
	// Render abstract area control board
	return (
		<div
			style={{
				display: 'flex',
				gap: 16,
				padding: 16,
				background: 'var(--board-bg, #f8fafc)',
				borderRadius: 8,
			}}
			{...props}
		>
			{areas?.map((area, idx) => {
				const isControlled = controlZones?.includes(
					area.id
				);
				return (
					<div
						key={area.id || idx}
						style={{
							flex: 1,
							minHeight: 80,
							background:
								isControlled ? '#3b82f6' : '#e0e7ef',
							color: isControlled ? '#fff' : '#222',
							borderRadius: 6,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 600,
							fontSize: 18,
							position: 'relative',
							boxShadow:
								isControlled ?
									'0 2px 8px rgba(59,130,246,0.12)'
								:	'0 2px 8px rgba(0,0,0,0.04)',
							transition: 'background 0.2s',
						}}
					>
						{area.name || `Area ${idx + 1}`}
						{isControlled && (
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
								Controlled
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default AbstractAreaControlBoard;
