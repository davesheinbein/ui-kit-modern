export { default as UnifiedCard } from './UnifiedCard';
export type {
	CardKind,
	UnifiedCardProps,
} from './UnifiedCard';

// Keep the original Card component for backward compatibility
export { default as Card } from './Card';
export type { CardProps } from './Card';

export * from './configurations';

export {
	default as CardFactory,
	C,
	CardPresets,
	CardFactoryClass,
	QuickCards,
} from './factory';
