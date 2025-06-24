import React from 'react';
import { Wrapper } from '../Wrappers';

export { default as Monetization } from './Monetization';
export type {
	MonetizationProps,
	BaseMonetizationProps,
} from './Monetization';

export * from './configurations';

export {
	default as MonetizationFactory,
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
