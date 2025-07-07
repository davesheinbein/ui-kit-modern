import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface MatchSummary {
	teamA: string;
	teamB: string;
	scoreA: number;
	scoreB: number;
	mvp?: string;
	summary?: string;
}

interface MatchSummaryCardContentProps {
	matchSummary: MatchSummary;
}

const MatchSummaryCardContent: React.FC<
	MatchSummaryCardContentProps
> = ({ matchSummary }) => {
	return (
		<Wrapper className={styles['match-summary-card']}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 16,
					marginBottom: 8,
				}}
			>
				<span style={{ fontWeight: 600 }}>
					{matchSummary.teamA}
				</span>
				<span style={{ fontWeight: 700, fontSize: 18 }}>
					{matchSummary.scoreA}
				</span>
				<span
					style={{
						fontWeight: 700,
						fontSize: 16,
						color: '#888',
					}}
				>
					vs
				</span>
				<span style={{ fontWeight: 700, fontSize: 18 }}>
					{matchSummary.scoreB}
				</span>
				<span style={{ fontWeight: 600 }}>
					{matchSummary.teamB}
				</span>
			</div>
			{matchSummary.mvp && (
				<div style={{ color: '#3B82F6', fontWeight: 500 }}>
					MVP: {matchSummary.mvp}
				</div>
			)}
			{matchSummary.summary && (
				<div style={{ marginTop: 8 }}>
					{matchSummary.summary}
				</div>
			)}
		</Wrapper>
	);
};

export default MatchSummaryCardContent;
