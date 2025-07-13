// Hook for auto-close timer logic
import { useEffect } from 'react';
import type { SingleAdProps } from './types';

export function useAdAutoClose(
	visible: boolean,
	handleAdClose: () => void,
	singleProps: SingleAdProps
) {
	useEffect(() => {
		if (
			singleProps.autoClose &&
			singleProps.autoCloseDelay &&
			visible
		) {
			const timer = setTimeout(() => {
				handleAdClose();
			}, singleProps.autoCloseDelay);
			return () => clearTimeout(timer);
		}
	}, [
		singleProps.autoClose,
		singleProps.autoCloseDelay,
		visible,
		handleAdClose,
	]);
}
