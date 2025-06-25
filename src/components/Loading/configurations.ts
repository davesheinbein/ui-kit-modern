// Loading component configuration types and presets (optional, for future extensibility)
export type LoadingKind =
	| 'spinner'
	| 'dots'
	| 'bar'
	| 'skeleton'
	| 'custom';

export interface LoadingConfiguration {
	kind: LoadingKind;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	color?: string;
	message?: string;
}

export const LOADING_PRESETS: Record<
	LoadingKind,
	LoadingConfiguration
> = {
	spinner: { kind: 'spinner', size: 'md' },
	dots: { kind: 'dots', size: 'md' },
	bar: { kind: 'bar', size: 'md' },
	skeleton: { kind: 'skeleton', size: 'md' },
	custom: { kind: 'custom', size: 'md' },
};
