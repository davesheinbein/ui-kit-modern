export { default as UnifiedSettings } from './UnifiedSettings';
export type {
	SettingsKind,
	UnifiedSettingsProps,
} from './UnifiedSettings';

// Keep the original components for backward compatibility
export { default as CustomizationCategory } from './CustomizationCategory';
export type { CustomizationCategoryProps } from './CustomizationCategory';

export { default as SettingsPanel } from './SettingsPanel';

export * from './configurations';

export {
	default as SettingsFactory,
	S,
	SettingsPresets,
	QuickSettings,
} from './factory';
export type { SettingsFactoryProps } from './factory';

// Export base components
export { default as Settings } from './Settings';
export type { SettingsProps } from './Settings';

export { default as SettingsBodyFactory } from './SettingsBodyFactory';
export type { SettingsBodyFactoryProps } from './SettingsBodyFactory';

// Default export for backward compatibility
export { default } from './UnifiedSettings';
