// Hook for dropzone drag/drop logic
import { useCallback } from 'react';

/**
 * useDropzone
 * Exposes drag/drop event handlers for a dropzone area.
 * All config and callbacks must be provided via props.
 * No internal state or context usage.
 */
export function useDropzone({
	disabled = false,
	onDropFiles,
	onDragActiveChange,
}: {
	disabled?: boolean;
	onDropFiles?: (files: File[]) => void;
	onDragActiveChange?: (active: boolean) => void;
}) {
	const onDragEnter = useCallback(
		(e: React.DragEvent) => {
			if (disabled) return;
			e.preventDefault();
			e.stopPropagation();
			onDragActiveChange?.(true);
		},
		[disabled, onDragActiveChange]
	);

	const onDragLeave = useCallback(
		(e: React.DragEvent) => {
			if (disabled) return;
			e.preventDefault();
			e.stopPropagation();
			onDragActiveChange?.(false);
		},
		[disabled, onDragActiveChange]
	);

	const onDragOver = useCallback(
		(e: React.DragEvent) => {
			if (disabled) return;
			e.preventDefault();
			e.stopPropagation();
		},
		[disabled]
	);

	const onDrop = useCallback(
		(e: React.DragEvent) => {
			if (disabled) return;
			e.preventDefault();
			e.stopPropagation();
			onDragActiveChange?.(false);
			const files = Array.from(e.dataTransfer.files);
			if (files.length && onDropFiles) {
				onDropFiles(files);
			}
		},
		[disabled, onDropFiles, onDragActiveChange]
	);

	return {
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
	};
}
