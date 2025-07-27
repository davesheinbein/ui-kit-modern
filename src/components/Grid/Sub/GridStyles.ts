// Utility for computing grid container styles
import type { GridProps } from './types';

export function getGridStyles(
	props: GridProps,
	rows: number,
	cols: number
): React.CSSProperties {
	const {
		gap = 'var(--spacing-sm)',
		maxWidth = '480px',
		minHeight = '320px',
		backgroundColor,
		borderRadius = '12px',
		boxShadow,
		padding = '8px',
		style = {},
	} = props;
	return {
		display: 'grid',
		gridTemplateRows: `repeat(${rows}, 1fr)`,
		gridTemplateColumns: `repeat(${cols}, 1fr)`,
		gap,
		maxWidth,
		minHeight,
		...(backgroundColor && { backgroundColor }),
		...(borderRadius && { borderRadius }),
		...(boxShadow && { boxShadow }),
		...(padding && { padding }),
		...style,
	};
}
