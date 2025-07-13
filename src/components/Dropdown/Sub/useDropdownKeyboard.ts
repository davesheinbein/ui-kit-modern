import { useCallback } from 'react';

export function useDropdownKeyboard({
	open,
	setOpen,
	optionsLength,
	highlightedIndex,
	setHighlightedIndex,
	onSelect,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	optionsLength: number;
	highlightedIndex: number;
	setHighlightedIndex: (i: number) => void;
	onSelect: (idx: number) => void;
}) {
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (!open) return;
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				setHighlightedIndex((i) => (i + 1) % optionsLength);
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				setHighlightedIndex(
					(i) => (i - 1 + optionsLength) % optionsLength
				);
			} else if (e.key === 'Enter') {
				e.preventDefault();
				if (highlightedIndex >= 0)
					onSelect(highlightedIndex);
			} else if (e.key === 'Escape') {
				setOpen(false);
			}
		},
		[
			open,
			setOpen,
			optionsLength,
			highlightedIndex,
			setHighlightedIndex,
			onSelect,
		]
	);
	return { handleKeyDown };
}
