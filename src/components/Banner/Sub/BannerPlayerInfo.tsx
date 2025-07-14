import React from 'react';
import type { BannerProps } from './types';

const BannerPlayerInfo: React.FC<
	Pick<
		BannerProps,
		| 'player'
		| 'opponent'
		| 'timer'
		| 'totalGroups'
		| 'showMistakes'
		| 'showTimer'
		| 'onEmoteClick'
	>
> = ({
	player,
	opponent,
	timer,
	totalGroups,
	showMistakes,
	showTimer,
	onEmoteClick,
}) => {
	// Stub: implement player/opponent/timer UI as needed
	if (!player && !opponent && !timer) return null;
	return (
		<div className='banner-player-info'>
			{/* Render player/opponent/timer info here */}
		</div>
	);
};

export default BannerPlayerInfo;
