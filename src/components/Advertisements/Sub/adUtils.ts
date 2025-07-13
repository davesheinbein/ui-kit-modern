// Utility functions for Advertisements
import type { SingleAdProps } from './types';

export const generateContainerStyles = (
	props: SingleAdProps
): React.CSSProperties => {
	const styles: React.CSSProperties = {};
	// ...copy logic from original...
	return styles;
};

export const generateAnimationStyles = (
	props: SingleAdProps
): string => {
	if (!props.animationEnabled) return '';
	const duration = props.animationDuration || 300;
	const easing = props.animationEasing || 'ease';
	const delay = props.animationDelay || 0;
	return `${duration}ms ${easing} ${delay}ms`;
};

export const generateClassName = (
	props: SingleAdProps
): string => {
	const classes: string[] = [];
	// ...copy logic from original...
	return classes.filter(Boolean).join(' ');
};
