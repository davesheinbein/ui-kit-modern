export { default as UnifiedCard } from './UnifiedCard';
export type {
	CardKind,
	UnifiedCardProps,
} from './UnifiedCard';

// Keep the original Card component for backward compatibility
export { default as Card } from './Card';
export type { CardProps } from './Card';

// Export enhanced card configuration system
export * from './CardConfigurations';

// Export enhanced card factory and ultra-DRY system
export {
	default as CardFactory,
	C,
	CardPresets,
	CardFactoryClass,
	QuickCards,
} from './CardFactoryDRY';
