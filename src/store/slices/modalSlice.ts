/**
 * Modal Slice - Modal Domain State Management
 *
 * Responsible for:
 * - Modal open/close states
 * - Modal data and form states
 * - Modal loading and error states
 * - Modal stack management
 *
 * Simple modal domain for all modal-related operations
 */

import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../index';

// Modal interfaces
export interface ModalFormData {
	[key: string]: any;
}

export interface ModalState {
	id: string;
	isOpen: boolean;
	data?: ModalFormData;
	loading: boolean;
	error: string | null;
	success: boolean;
}

export interface ModalsState {
	activeModals: ModalState[];
	globalLoading: boolean;
	globalError: string | null;
}

const initialState: ModalsState = {
	activeModals: [],
	globalLoading: false,
	globalError: null,
};

const modalSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		// Modal lifecycle actions
		openModal: (
			state,
			action: PayloadAction<{
				id: string;
				data?: ModalFormData;
			}>
		) => {
			const { id, data } = action.payload;
			const existingModal = state.activeModals.find(
				(modal) => modal.id === id
			);

			if (existingModal) {
				existingModal.isOpen = true;
				if (data) existingModal.data = data;
			} else {
				state.activeModals.push({
					id,
					isOpen: true,
					data: data || {},
					loading: false,
					error: null,
					success: false,
				});
			}
		},

		closeModal: (state, action: PayloadAction<string>) => {
			const modalId = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === modalId
			);
			if (modal) {
				modal.isOpen = false;
			}
		},

		removeModal: (state, action: PayloadAction<string>) => {
			const modalId = action.payload;
			state.activeModals = state.activeModals.filter(
				(modal) => modal.id !== modalId
			);
		},

		closeAllModals: (state) => {
			state.activeModals.forEach((modal) => {
				modal.isOpen = false;
			});
		},

		// Modal data actions
		updateModalData: (
			state,
			action: PayloadAction<{
				id: string;
				data: Partial<ModalFormData>;
			}>
		) => {
			const { id, data } = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === id
			);
			if (modal) {
				modal.data = { ...modal.data, ...data };
			}
		},

		setModalFormField: (
			state,
			action: PayloadAction<{
				id: string;
				field: string;
				value: any;
			}>
		) => {
			const { id, field, value } = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === id
			);
			if (modal) {
				if (!modal.data) modal.data = {};
				modal.data[field] = value;
			}
		},

		clearModalData: (
			state,
			action: PayloadAction<string>
		) => {
			const modalId = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === modalId
			);
			if (modal) {
				modal.data = {};
			}
		},

		// Modal state actions
		setModalLoading: (
			state,
			action: PayloadAction<{
				id: string;
				loading: boolean;
			}>
		) => {
			const { id, loading } = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === id
			);
			if (modal) {
				modal.loading = loading;
			}
		},

		setModalError: (
			state,
			action: PayloadAction<{
				id: string;
				error: string | null;
			}>
		) => {
			const { id, error } = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === id
			);
			if (modal) {
				modal.error = error;
			}
		},

		setModalSuccess: (
			state,
			action: PayloadAction<{
				id: string;
				success: boolean;
			}>
		) => {
			const { id, success } = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === id
			);
			if (modal) {
				modal.success = success;
			}
		},

		resetModalState: (
			state,
			action: PayloadAction<string>
		) => {
			const modalId = action.payload;
			const modal = state.activeModals.find(
				(modal) => modal.id === modalId
			);
			if (modal) {
				modal.loading = false;
				modal.error = null;
				modal.success = false;
			}
		},

		// Global modal actions
		setGlobalLoading: (
			state,
			action: PayloadAction<boolean>
		) => {
			state.globalLoading = action.payload;
		},

		setGlobalError: (
			state,
			action: PayloadAction<string | null>
		) => {
			state.globalError = action.payload;
		},

		resetGlobalState: (state) => {
			state.globalLoading = false;
			state.globalError = null;
		},
	},
});

// Actions
export const {
	openModal,
	closeModal,
	removeModal,
	closeAllModals,
	updateModalData,
	setModalFormField,
	clearModalData,
	setModalLoading,
	setModalError,
	setModalSuccess,
	resetModalState,
	setGlobalLoading,
	setGlobalError,
	resetGlobalState,
} = modalSlice.actions;

// Selectors
export const selectActiveModals = (state: RootState) =>
	state.modals.activeModals;
export const selectModalById = (
	state: RootState,
	modalId: string
) =>
	state.modals.activeModals.find(
		(modal) => modal.id === modalId
	);
export const selectIsModalOpen = (
	state: RootState,
	modalId: string
) =>
	state.modals.activeModals.find(
		(modal) => modal.id === modalId
	)?.isOpen || false;
export const selectModalData = (
	state: RootState,
	modalId: string
) =>
	state.modals.activeModals.find(
		(modal) => modal.id === modalId
	)?.data || {};
export const selectModalLoading = (
	state: RootState,
	modalId: string
) =>
	state.modals.activeModals.find(
		(modal) => modal.id === modalId
	)?.loading || false;
export const selectModalError = (
	state: RootState,
	modalId: string
) =>
	state.modals.activeModals.find(
		(modal) => modal.id === modalId
	)?.error || null;
export const selectModalSuccess = (
	state: RootState,
	modalId: string
) =>
	state.modals.activeModals.find(
		(modal) => modal.id === modalId
	)?.success || false;
export const selectGlobalLoading = (state: RootState) =>
	state.modals.globalLoading;
export const selectGlobalError = (state: RootState) =>
	state.modals.globalError;
export const selectOpenModalsCount = (state: RootState) =>
	state.modals.activeModals.filter((modal) => modal.isOpen)
		.length;

export default modalSlice.reducer;
