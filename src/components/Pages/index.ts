export { default as UnifiedPage } from './UnifiedPage';
export type {
	PageKind,
	UnifiedPageProps,
	BasePageProps,
} from './UnifiedPage';

// Keep the original Page component for backward compatibility
export { default as Page } from './Page';
export type { PageProps } from './Page';

export * from './configurations';

export {
	default as PageFactory,
	P,
	PagePresets,
	createPage,
} from './factory';
export type { UnifiedPageProps as PageFactoryProps } from './UnifiedPage';

// Legacy components using the unified system
export { default as StartupPage } from './StartupPage';
export type { StartupPageProps } from './StartupPage';
