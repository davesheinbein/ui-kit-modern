import React from 'react';
import CountUp from 'react-countup';
import { format, parseISO } from 'date-fns';

export type StatisticsSummaryMode =
	| 'daily'
	| 'vs'
	| 'history';

export interface PlayerStats {
	total_matches_played: number;
	vs_bot_matches_played: number;
	vs_multiplayer_matches_played: number;
	win_count: number;
	loss_count: number;
	perfect_puzzles: number;
	longest_streak: number;
	current_streak: number;
	average_solve_time: number;
	mistake_rate: number;
	favorite_category: string;
	last_played_at: string;
	join_date: string;
}

export interface StatisticsSummaryProps {
	stats: PlayerStats;
	mode: StatisticsSummaryMode;
	className?: string;
	style?: React.CSSProperties;
	opponentStats?: PlayerStats;
	globalStats?: {
		percentileRank?: number;
		leaderboardPosition?: number;
	};
}

const StatisticsSummary: React.FC<
	StatisticsSummaryProps
> = ({
	stats,
	mode,
	className = '',
	style = {},
	opponentStats,
	globalStats,
}) => {
	// ...component logic and rendering...
	return (
		<div className={className} style={style}>
			{/* Render stats summary here */}
			<div>Statistics Summary for mode: {mode}</div>
		</div>
	);
};

export default StatisticsSummary;
