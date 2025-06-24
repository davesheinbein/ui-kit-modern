// Keep the original Navigation component for backward compatibility
export { default as Navigation } from './Navigation';
export type { NavigationProps } from './Navigation';

export * from './configurations';

export {
	default as NavigationFactory,
	NavigationPresets,
} from './factory';
