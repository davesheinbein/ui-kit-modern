import React from 'react';
let styles: any = {};
try {
	styles = require('./TimeEventCardRowBoard.module.scss');
} catch {
	try {
		styles = require('./TableauLayoutBoard.module.scss');
	} catch {
		styles = {};
	}
}

export interface TimeEventCardRowBoardProps {
	events: any[];
	cardRenderer?: (
		event: any,
		idx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const TimeEventCardRowBoard: React.FC<
	TimeEventCardRowBoardProps
> = ({
	events,
	cardRenderer = (event, idx) => (
		<div
			className={
				styles?.timeEventCard ||
				'time-event-card-row-board__card'
			}
			style={{
				width: 96,
				height: 140,
				background: event?.color || '#f3f4f6',
				border: '1px solid #d1d5db',
				borderRadius: 8,
				boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				fontWeight: 500,
				fontSize: 16,
				margin: '0 4px',
				userSelect: 'none',
			}}
			tabIndex={0}
			aria-label={`Event card ${idx + 1}: ${event?.label || 'event'}`}
			key={idx}
		>
			{event?.label || `Event ${idx + 1}`}
			{event?.time && (
				<span
					style={{
						fontSize: 12,
						color: '#6b7280',
						marginTop: 4,
					}}
				>
					{event.time}
				</span>
			)}
		</div>
	),
	className = '',
	style = {},
	...props
}) => {
	// Render time-event card row as horizontal flex
	return (
		<div
			className={`${styles?.timeEventCardRowBoard || 'time-event-card-row-board'} ${className}`.trim()}
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: 8,
				padding: 8,
				background: '#f8fafc',
				borderRadius: 8,
				boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
				...style,
			}}
			role='list'
			aria-label='Time event card row board'
			{...props}
		>
			{events.map((event, idx) => cardRenderer(event, idx))}
		</div>
	);
};

export default TimeEventCardRowBoard;
