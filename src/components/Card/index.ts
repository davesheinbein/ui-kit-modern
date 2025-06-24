// Main Card component with enhanced functionality
export { default as Card } from './Card';
export type { CardProps } from './Card';

// Re-export the card kind type for convenience
export type { ExtendedCardKind as CardKind } from './configurations';

// Export all configuration utilities
export * from './configurations';

// Export factory system
export {
	default as CardFactory,
	CardPresets,
	CardFactoryClass,
} from './factory';
