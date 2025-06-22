import React from 'react';

/**
 * Monetization Component System
 * 
 * CART STATE MANAGEMENT MIGRATION:
 * ================================
 * The cart functionality has been migrated from custom React hooks to Redux for better:
 * - Centralized state management
 * - Persistence across component re-renders
 * - Integration with the broader application state
 * - Better testing and debugging capabilities
 * 
 * OLD PATTERN (removed):
 * - useCart() custom hook with local state
 * - CartProvider/useCartContext for context-based state
 * 
 * NEW PATTERN (current):
 * - useCartRedux() hook that uses Redux store
 * - Redux cart slice with actions and selectors
 * - Centralized cart state in the main Redux store
 * 
 * USAGE:
 * ------
 * import { useCartRedux, CartItem, addItem, clearCart } from './components/Monetization';
 * 
 * // In component:
 * const cart = useCartRedux();
 * cart.addItem(product, quantity);
 * 
 * // Or use direct actions:
 * import { useAppDispatch } from './store';
 * import { addItem } from './components/Monetization';
 * const dispatch = useAppDispatch();
 * dispatch(addItem({ item: product, quantity }));
 */

export { default as UnifiedMonetization } from './UnifiedMonetization';
export type {
	UnifiedMonetizationProps,
	BaseMonetizationProps,
} from './UnifiedMonetization';

// Keep the original Monetization component for backward compatibility
export { default as Monetization } from './Monetization';
export type { MonetizationProps } from './Monetization';

export * from './configurations';

// Export Redux-based cart functionality
export {
	useCartRedux,
	selectCartItems,
	selectCartTotalItems,
	selectCartTotalPrice,
	selectCartIsOpen,
	selectCartLoading,
	selectCartError,
	selectCartDiscount,
	selectCartTax,
	selectCartShipping,
	selectCartSubtotal,
	selectCartTotal,
	selectCartIsEmpty,
	addItem,
	removeItem,
	updateQuantity,
	clearCart,
	toggleCart,
	setCartOpen,
	applyDiscount,
	removeDiscount,
	setTax,
	setShipping,
	checkout,
	checkoutSuccess,
	checkoutFailure,
} from '../../store';

export type { CartItem } from '../../store';

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
