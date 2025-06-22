/**
 * useCartRedux Hook - Redux-based cart state management
 *
 * Provides cart functionality using Redux store instead of local state
 */

import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../index';
import {
	addItem as addItemAction,
	removeItem as removeItemAction,
	updateQuantity as updateQuantityAction,
	clearCart as clearCartAction,
	toggleCart as toggleCartAction,
	setCartOpen as setCartOpenAction,
	applyDiscount as applyDiscountAction,
	removeDiscount as removeDiscountAction,
	setTax as setTaxAction,
	setShipping as setShippingAction,
	checkout as checkoutAction,
	checkoutSuccess,
	checkoutFailure,
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
	CartItem,
} from '../slices/cartSlice';

export interface UseCartReduxReturn {
	// State
	items: CartItem[];
	totalItems: number;
	totalPrice: number;
	isOpen: boolean;
	loading: boolean;
	error: string | null;
	discount: { code?: string; amount?: number };
	tax?: number;
	shipping?: number;

	// Actions
	addItem: (
		item: Omit<CartItem, 'quantity'>,
		quantity?: number
	) => void;
	removeItem: (itemId: string) => void;
	updateQuantity: (
		itemId: string,
		quantity: number
	) => void;
	clearCart: () => void;
	toggleCart: () => void;
	setCartOpen: (open: boolean) => void;
	applyDiscount: (code: string, amount: number) => void;
	removeDiscount: () => void;
	setTax: (tax: number) => void;
	setShipping: (shipping: number) => void;
	checkout: () => Promise<void>;

	// Computed values
	subtotal: number;
	total: number;
	isEmpty: boolean;
	itemCount: number;
}

export const useCartRedux = (): UseCartReduxReturn => {
	const dispatch = useAppDispatch();

	// Selectors
	const items = useAppSelector(selectCartItems);
	const totalItems = useAppSelector(selectCartTotalItems);
	const totalPrice = useAppSelector(selectCartTotalPrice);
	const isOpen = useAppSelector(selectCartIsOpen);
	const loading = useAppSelector(selectCartLoading);
	const error = useAppSelector(selectCartError);
	const discount = useAppSelector(selectCartDiscount);
	const tax = useAppSelector(selectCartTax);
	const shipping = useAppSelector(selectCartShipping);
	const subtotal = useAppSelector(selectCartSubtotal);
	const total = useAppSelector(selectCartTotal);
	const isEmpty = useAppSelector(selectCartIsEmpty);

	// Actions
	const addItem = useCallback(
		(item: Omit<CartItem, 'quantity'>, quantity = 1) => {
			dispatch(addItemAction({ item, quantity }));
		},
		[dispatch]
	);

	const removeItem = useCallback(
		(itemId: string) => {
			dispatch(removeItemAction(itemId));
		},
		[dispatch]
	);

	const updateQuantity = useCallback(
		(itemId: string, quantity: number) => {
			dispatch(
				updateQuantityAction({ id: itemId, quantity })
			);
		},
		[dispatch]
	);

	const clearCart = useCallback(() => {
		dispatch(clearCartAction());
	}, [dispatch]);

	const toggleCart = useCallback(() => {
		dispatch(toggleCartAction());
	}, [dispatch]);

	const setCartOpen = useCallback(
		(open: boolean) => {
			dispatch(setCartOpenAction(open));
		},
		[dispatch]
	);

	const applyDiscount = useCallback(
		(code: string, amount: number) => {
			dispatch(applyDiscountAction({ code, amount }));
		},
		[dispatch]
	);

	const removeDiscount = useCallback(() => {
		dispatch(removeDiscountAction());
	}, [dispatch]);

	const setTax = useCallback(
		(taxAmount: number) => {
			dispatch(setTaxAction(taxAmount));
		},
		[dispatch]
	);

	const setShipping = useCallback(
		(shippingCost: number) => {
			dispatch(setShippingAction(shippingCost));
		},
		[dispatch]
	);

	const checkout = useCallback(async () => {
		dispatch(checkoutAction());

		try {
			// Simulate checkout process
			await new Promise((resolve) =>
				setTimeout(resolve, 2000)
			);
			dispatch(checkoutSuccess());
		} catch (err) {
			const errorMessage =
				err instanceof Error ?
					err.message
				:	'Checkout failed';
			dispatch(checkoutFailure(errorMessage));
			throw err;
		}
	}, [dispatch]);

	return {
		// State
		items,
		totalItems,
		totalPrice,
		isOpen,
		loading,
		error,
		discount,
		tax,
		shipping,

		// Actions
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

		// Computed values
		subtotal,
		total,
		isEmpty,
		itemCount: totalItems,
	};
};

export default useCartRedux;
