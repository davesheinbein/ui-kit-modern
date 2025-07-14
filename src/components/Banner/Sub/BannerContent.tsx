import React from 'react';
import type { BannerProps } from './types';
import BannerPlayerInfo from './BannerPlayerInfo';
import BannerActions from './BannerActions';

const BannerContent: React.FC<BannerProps> = (props) => {
	const {
		message,
		icon,
		children,
		actions,
		player,
		opponent,
		timer,
		totalGroups,
		showMistakes,
		showTimer,
		onEmoteClick,
	} = props;
	return (
		<div className='banner-content'>
			{icon && <span className='banner-icon'>{icon}</span>}
			{message && (
				<span className='banner-message'>{message}</span>
			)}
			<BannerPlayerInfo
				player={player}
				opponent={opponent}
				timer={timer}
				totalGroups={totalGroups}
				showMistakes={showMistakes}
				showTimer={showTimer}
				onEmoteClick={onEmoteClick}
			/>
			{children}
			<BannerActions actions={actions} />
		</div>
	);
};

export default BannerContent;
