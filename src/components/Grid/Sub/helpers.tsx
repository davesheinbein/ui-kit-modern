// Helper functions for Grid
import type { CellState } from './types';

export function getSolvedByPlayer(
	word: string,
	solvedBy: Record<string, string[]>
): string | null {
	for (const pid in solvedBy) {
		if (solvedBy[pid]?.includes(word)) {
			return pid;
		}
	}
	return null;
}

export function handleKeyDown(
	word: string,
	onSelect?: (word: string) => void
) {
	return (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onSelect?.(word);
		}
	};
}
