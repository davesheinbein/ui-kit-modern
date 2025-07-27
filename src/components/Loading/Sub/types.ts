export type LoadingKind =
	| 'spinner'
	| 'dots'
	| 'bar'
	| 'skeleton'
	| 'pulse'
	| 'wave'
	| 'ring'
	| 'bounce'
	| 'dualRing'
	| 'ellipsis'
	| 'grid'
	| 'customSVG'
	| 'custom';

export interface LoadingProps
	extends React.HTMLAttributes<HTMLDivElement> {
	'kind'?: LoadingKind;
	'size'?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
	'color'?: string;
	'message'?: string;
	'className'?: string;
	'animationSpeed'?: number;
	'count'?: number;
	'direction'?: 'horizontal' | 'vertical';
	'shape'?: 'circle' | 'rect' | 'text-line';
	'thickness'?: number;
	'backgroundColor'?: string;
	'customLoader'?: React.ReactNode;
	'svg'?: React.ReactNode;
	'aria-busy'?: boolean;
	'aria-label'?: string;
	'role'?: string;
}
