import React from 'react';

export { default as UnifiedMonetization } from './UnifiedMonetization';
export type {
	UnifiedMonetizationProps,
	BaseMonetizationProps,
} from './UnifiedMonetization';

// Keep the original Monetization component for backward compatibility
export { default as Monetization } from './Monetization';
export type { MonetizationProps } from './Monetization';

export * from './configurations';

export {
	default as MonetizationFactory,
	M,
	MonetizationPresets,
	QuickMonetization,
	SimpleMonetizationFactory,
	createMonetization,
} from './factory';

// =============================================================================
// BACKWARD COMPATIBILITY WRAPPERS
// =============================================================================

// These can be added as needed for legacy component compatibility
// For now, the system is comprehensive enough to handle most use cases
