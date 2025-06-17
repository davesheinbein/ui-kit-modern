import React from 'react';

export interface FriendsToggleButtonProps {
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
	imageUrl?: string;
	userName?: string;
}

const FriendsToggleButton: React.FC<
	FriendsToggleButtonProps
> = ({
	onClick,
	className = '',
	style,
	imageUrl,
	userName,
}) => {
	return (
		<button
			onClick={onClick}
			className={`friends-toggle-btn ${className}`.trim()}
			style={style}
			aria-label={'Open friends sidebar'}
		>
			{imageUrl ?
				<img
					src={imageUrl}
					alt={userName || 'Profile'}
					style={{
						width: 36,
						height: 36,
						borderRadius: '50%',
						objectFit: 'cover',
						border: '2px solid #38bdf8',
					}}
				/>
			:	<span
					className='friends-toggle-icon'
					style={{ fontSize: 28, color: '#2563eb' }}
				>
					<svg
						width='28'
						height='28'
						viewBox='0 0 24 24'
						fill='none'
						stroke='#2563eb'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<circle cx='9' cy='7' r='4' />
						<path d='M17 11v-1a4 4 0 0 0-4-4' />
						<path d='M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2' />
					</svg>
				</span>
			}
		</button>
	);
};

export default FriendsToggleButton;
