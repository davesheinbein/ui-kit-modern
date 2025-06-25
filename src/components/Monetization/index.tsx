import React from 'react';
import { Wrapper } from '../Wrappers';

export { default as Monetization } from './UnifiedMonetization';
export type {
	UnifiedMonetizationProps,
	BaseMonetizationProps,
} from './UnifiedMonetization';

// Keep the original Monetization component for backward compatibility
export { default as Monetization } from './Monetization';
export type { MonetizationProps } from './Monetization';

export * from './configurations';

// Remove all factory and preset exports
// =============================================================================
// BACKWARD COMPATIBILITY WRAPPERS
// =============================================================================

// These can be added as needed for legacy component compatibility
// For now, the system is comprehensive enough to handle most use cases
