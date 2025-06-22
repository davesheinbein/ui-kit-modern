/**
 * Cart Slice - E-commerce cart state management
 *
 * Handles shopping cart items, quantities, pricing, and checkout state
 * for monetization components
 */

import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	currency: string;
	image?: string;
	description?: string;
	variant?: string;
	category?: string;
}

interface CartState {
	items: CartItem[];
	totalItems: number;
	totalPrice: number;
	isOpen: boolean;
	loading: boolean;
	error: string | null;
	discountCode?: string;
	discountAmount?: number;
	tax?: number;
	shipping?: number;
}

const initialState: CartState = {
	items: [],
	totalItems: 0,
	totalPrice: 0,
	isOpen: false,
	loading: false,
	error: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (
			state,
			action: PayloadAction<{
				item: Omit<CartItem, 'quantity'>;
				quantity?: number;
			}>
		) => {
			const { item, quantity = 1 } = action.payload;
			const existingItem = state.items.find(
				(i) => i.id === item.id
			);

			if (existingItem) {
				existingItem.quantity += quantity;
			} else {
				state.items.push({ ...item, quantity });
			}

			cartSlice.caseReducers.calculateTotals(state);
		},

		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			);
			cartSlice.caseReducers.calculateTotals(state);
		},

		updateQuantity: (
			state,
			action: PayloadAction<{
				id: string;
				quantity: number;
			}>
		) => {
			const { id, quantity } = action.payload;
			if (quantity <= 0) {
				state.items = state.items.filter(
					(item) => item.id !== id
				);
			} else {
				const item = state.items.find(
					(item) => item.id === id
				);
				if (item) {
					item.quantity = quantity;
				}
			}
			cartSlice.caseReducers.calculateTotals(state);
		},

		clearCart: (state) => {
			state.items = [];
			state.totalItems = 0;
			state.totalPrice = 0;
			state.discountCode = undefined;
			state.discountAmount = undefined;
		},

		toggleCart: (state) => {
			state.isOpen = !state.isOpen;
		},

		setCartOpen: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.isOpen = action.payload;
		},

		applyDiscount: (
			state,
			action: PayloadAction<{
				code: string;
				amount: number;
			}>
		) => {
			state.discountCode = action.payload.code;
			state.discountAmount = action.payload.amount;
		},

		removeDiscount: (state) => {
			state.discountCode = undefined;
			state.discountAmount = undefined;
		},

		setTax: (state, action: PayloadAction<number>) => {
			state.tax = action.payload;
		},

		setShipping: (state, action: PayloadAction<number>) => {
			state.shipping = action.payload;
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		setError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.error = action.payload;
		},

		// Checkout action - simulates checkout process
		checkout: (state) => {
			state.loading = true;
			state.error = null;
		},

		checkoutSuccess: (state) => {
			state.items = [];
			state.totalItems = 0;
			state.totalPrice = 0;
			state.loading = false;
			state.isOpen = false;
			state.discountCode = undefined;
			state.discountAmount = undefined;
			state.tax = undefined;
			state.shipping = undefined;
		},

		checkoutFailure: (
			state,
			action: PayloadAction<string>
		) => {
			state.loading = false;
			state.error = action.payload;
		},

		// Internal helper - calculates totals
		calculateTotals: (state) => {
			state.totalItems = state.items.reduce(
				(total, item) => total + item.quantity,
				0
			);
			state.totalPrice = state.items.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
		},
	},
});

// Selectors
export const selectCartItems = (state: {
	cart: CartState;
}) => state.cart.items;
export const selectCartTotalItems = (state: {
	cart: CartState;
}) => state.cart.totalItems;
export const selectCartTotalPrice = (state: {
	cart: CartState;
}) => state.cart.totalPrice;
export const selectCartIsOpen = (state: {
	cart: CartState;
}) => state.cart.isOpen;
export const selectCartLoading = (state: {
	cart: CartState;
}) => state.cart.loading;
export const selectCartError = (state: {
	cart: CartState;
}) => state.cart.error;
export const selectCartDiscount = (state: {
	cart: CartState;
}) => ({
	code: state.cart.discountCode,
	amount: state.cart.discountAmount,
});
export const selectCartTax = (state: { cart: CartState }) =>
	state.cart.tax;
export const selectCartShipping = (state: {
	cart: CartState;
}) => state.cart.shipping;

// Computed selectors
export const selectCartSubtotal = (state: {
	cart: CartState;
}) => state.cart.totalPrice;
export const selectCartTotal = (state: {
	cart: CartState;
}) => {
	const subtotal = state.cart.totalPrice;
	const discountAmount = state.cart.discountAmount || 0;
	const tax = state.cart.tax || 0;
	const shipping = state.cart.shipping || 0;
	return subtotal - discountAmount + tax + shipping;
};
export const selectCartIsEmpty = (state: {
	cart: CartState;
}) => state.cart.items.length === 0;

export const {
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
	setLoading,
	setError,
	checkout,
	checkoutSuccess,
	checkoutFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
