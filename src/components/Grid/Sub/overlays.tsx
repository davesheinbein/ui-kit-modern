// Overlay rendering logic for Grid
import React from 'react';
import styles from '../Grid.module.scss';
import type { CellState, GridProps } from './types';

export function renderOverlays(
	cellState: CellState,
	props: Pick<
		GridProps,
		| 'showOverlays'
		| 'preview'
		| 'overlayRenderer'
		| 'showOpponentIndicators'
		| 'playerId'
		| 'opponentId'
		| 'botDifficulty'
		| 'playerColor'
		| 'opponentColor'
		| 'showSolvedBadges'
	> & { overlayPosition?: string }
) {
	const {
		showOverlays = true,
		preview = false,
		overlayRenderer,
		showOpponentIndicators = true,
		playerId,
		opponentId,
		botDifficulty,
		playerColor = '#2563eb',
		opponentColor = '#ef4444',
		showSolvedBadges = true,
		overlayPosition = 'top-right',
	} = props;

	if (!showOverlays || preview) return null;

	if (overlayRenderer) {
		return overlayRenderer(cellState.word, cellState);
	}

	const overlays = [];

	if (
		showOpponentIndicators &&
		cellState.isOpponentSelected &&
		!cellState.solvedByPlayer
	) {
		overlays.push(
			<span
				key='opponent'
				className={styles.opponentOverlay}
			>
				Opponent
			</span>
		);
	}

	if (showSolvedBadges && cellState.solvedByPlayer) {
		const isPlayerSolved =
			cellState.solvedByPlayer === playerId;
		const label =
			isPlayerSolved ? 'You'
			: botDifficulty ? 'Bot'
			: 'Opponent';
		const color =
			isPlayerSolved ? playerColor : opponentColor;
		overlays.push(
			<span
				key='solved'
				className={styles.solvedBadge}
				style={{ backgroundColor: color }}
			>
				{label}
			</span>
		);
	}

	return overlays.length > 0 ?
			<div
				className={`${styles.overlayContainer} ${styles[overlayPosition]}`}
			>
				{overlays}
			</div>
		:	null;
}
