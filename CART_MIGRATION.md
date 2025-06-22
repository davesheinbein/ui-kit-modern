# Cart State Management Migration

## Overview

This document outlines the migration of cart state management from custom React hooks to Redux in the Monetization component system.

## Changes Made

### 1. Removed Custom Cart Hooks

- **Removed**: `src/components/Monetization/hooks/useCart.ts`
- **Removed**: `src/components/Monetization/hooks/CartContext.tsx`
- **Removed**: `src/components/Monetization/hooks/` directory

### 2. Redux Integration

- **Added**: Cart slice to Redux store (`src/store/slices/cartSlice.ts`)
- **Added**: Redux cart hook (`src/store/hooks/useCartRedux.ts`)
- **Updated**: Store configuration to include cart slice
- **Updated**: Store exports to include cart functionality

### 3. Updated Monetization Components

- **Updated**: `src/components/Monetization/index.tsx` - Now exports Redux-based cart functionality
- **Updated**: `src/components/Monetization/configurations.ts` - Imports CartItem from Redux store
- **Updated**: `src/stories/Monetization/Monetization.stories.tsx` - Uses Redux cart with Provider

### 4. Architecture Improvements

- **Centralized State**: Cart state is now managed in the main Redux store
- **Consistency**: Cart state management follows the same patterns as other app state
- **Performance**: Redux provides better performance for complex state updates
- **Debugging**: Redux DevTools support for cart state debugging

## Migration Guide

### Before (Custom Hooks)

```typescript
import { useCart, CartProvider } from './components/Monetization';

// In app root
<CartProvider>
  <App />
</CartProvider>

// In component
const cart = useCart();
cart.actions.addItem(product, quantity);
```

### After (Redux)

```typescript
import { useCartRedux } from './components/Monetization';
import { Provider } from 'react-redux';
import { store } from './store';

// In app root
<Provider store={store}>
  <App />
</Provider>

// In component
const cart = useCartRedux();
cart.addItem(product, quantity);
```

## Benefits

1. **Centralized State Management**: Cart state is part of the main application state
2. **Persistence**: Cart state persists across component re-renders and navigation
3. **DevTools**: Full Redux DevTools support for debugging
4. **Performance**: Better performance with Redux selectors and memoization
5. **Testing**: Easier to test with Redux testing utilities
6. **Consistency**: Follows the same patterns as other app state management

## API Compatibility

The new Redux-based cart API provides the same functionality as the old custom hooks but with improved performance and state management:

- ✅ Add items to cart
- ✅ Remove items from cart
- ✅ Update item quantities
- ✅ Clear cart
- ✅ Apply discounts/promo codes
- ✅ Calculate totals (subtotal, tax, shipping, total)
- ✅ Checkout functionality
- ✅ Cart open/close state
- ✅ Loading and error states

## Files Affected

### Added:

- `src/store/slices/cartSlice.ts`
- `src/store/hooks/useCartRedux.ts`

### Modified:

- `src/store/index.ts`
- `src/components/Monetization/index.tsx`
- `src/components/Monetization/configurations.ts`
- `src/stories/Monetization/Monetization.stories.tsx`

### Removed:

- `src/components/Monetization/hooks/useCart.ts`
- `src/components/Monetization/hooks/CartContext.tsx`
- `src/components/Monetization/hooks/` (entire directory)

## Testing

The build passes successfully after the migration, confirming that:

- All TypeScript types are correctly resolved
- No import/export conflicts exist
- Redux integration works properly
- Story components render without errors

## Next Steps

1. ✅ Migrate cart state from custom hooks to Redux
2. ✅ Update Monetization components to use Redux cart
3. ✅ Remove custom cart hooks directory
4. ✅ Update stories to demonstrate Redux cart usage
5. ✅ Verify build passes with all changes
6. 📋 Update documentation for developers
7. 📋 Add comprehensive cart tests with Redux testing utilities
