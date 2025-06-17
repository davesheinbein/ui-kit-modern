import React from 'react';
import styles from './SolvedGroupsDisplay.module.scss';

export interface SolvedGroupsDisplayProps {
	pendingSolvedGroups: {
		groupIdx: number;
		words: string[];
	}[];
	activePuzzle: any;
}

const SolvedGroupsDisplay: React.FC<
	SolvedGroupsDisplayProps
> = ({ pendingSolvedGroups, activePuzzle }) => {
	if (!pendingSolvedGroups.length) return null;
	return (
		<div
			className={styles.solvedGroupsDisplay}
			aria-label='Solved Groups'
		>
			{pendingSolvedGroups
				.filter(
					(g, i, arr) =>
						arr.findIndex(
							(x) => x.groupIdx === g.groupIdx
						) === i
				)
				.sort((a, b) => a.groupIdx - b.groupIdx)
				.map(({ groupIdx, words }) => (
					<section
						className={styles.solvedGroup}
						key={groupIdx}
						role='img'
						aria-label={`Solved group: ${activePuzzle?.groupLabels?.[groupIdx] || `Group ${groupIdx + 1}`}`}
					>
						<div className={styles.solvedLabel}>
							{activePuzzle?.groupLabels?.[groupIdx] ||
								`Group ${groupIdx + 1}`}
						</div>
						<ul className={styles.solvedWords}>
							{(Array.isArray(words) ? words : []).map(
								(word) => (
									<li
										className={styles.solvedWord}
										key={word}
									>
										{word}
									</li>
								)
							)}
						</ul>
					</section>
				))}
		</div>
	);
};

export default SolvedGroupsDisplay;
