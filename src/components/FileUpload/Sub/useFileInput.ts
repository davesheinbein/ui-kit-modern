// Hook for file input logic (refs, handlers)
import { useRef, useCallback } from 'react';

/**
 * useFileInput
 * Exposes file input ref and onChange handler.
 * All config and callbacks must be provided via props.
 * No internal state or context usage.
 */
export function useFileInput({
	accept,
	multiple = false,
	disabled = false,
	onFilesSelected,
}: {
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	onFilesSelected?: (files: File[]) => void;
}) {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			if (disabled) return;
			const files =
				e.target.files ? Array.from(e.target.files) : [];
			if (files.length && onFilesSelected) {
				onFilesSelected(files);
			}
		},
		[disabled, onFilesSelected]
	);

	return {
		fileInputRef,
		onChange,
		accept,
		multiple,
		disabled,
	};
}
