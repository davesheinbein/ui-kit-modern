/**
 * Simplified Modal Factory - DRY modal creation
 *
 * This provides a simple, practical factory for creating modals
 * that addresses the core requirement of making modals more reusable.
 */

import React, { useState } from 'react';
import UnifiedModal, {
	UnifiedModalProps,
} from './UnifiedModal';
import { ExtendedModalKind } from './configurations';

/**
 * Simple Modal Factory - Main entry point for creating modals
 */
export class SimpleModalFactory {
	/**
	 * Create any modal with required props and optional overrides
	 */
	static create(
		kind: ExtendedModalKind,
		open: boolean,
		onClose: () => void,
		overrides: Partial<
			Omit<UnifiedModalProps, 'kind' | 'open' | 'onClose'>
		> = {}
	): React.ReactElement {
		return (
			<UnifiedModal
				kind={kind}
				open={open}
				onClose={onClose}
				{...overrides}
			/>
		);
	}

	// === CONFIRMATION MODALS ===
	static confirmation(
		open: boolean,
		onClose: () => void,
		title: string,
		message: string,
		onConfirm: () => void,
		onCancel?: () => void
	) {
		return this.create('confirmation', open, onClose, {
			title,
			message,
			onConfirm,
			onCancel: onCancel || onClose,
		});
	}

	// === ALERT MODALS ===
	static alert(
		open: boolean,
		onClose: () => void,
		title: string,
		message: string
	) {
		return this.create('alert', open, onClose, {
			title,
			message,
			onConfirm: onClose,
		});
	}

	// === GAME MODALS ===
	static preGame(
		open: boolean,
		onClose: () => void,
		onReady: () => void,
		onGoHome?: () => void
	) {
		return this.create('pre-game', open, onClose, {
			onConfirm: onReady,
			onCancel: onGoHome || onClose,
		});
	}

	static endGame(
		open: boolean,
		onClose: () => void,
		onShare: () => void,
		gameData: {
			score: number;
			win: boolean;
			attemptsLeft: number;
			burnBonus: number;
			finishTime?: string;
		}
	) {
		return this.create('end-game', open, onClose, {
			onConfirm: onShare,
			...gameData,
		});
	}

	static rules(
		open: boolean,
		onClose: () => void,
		gameOptions?: {
			columnCount?: number;
			mode?: string;
			wildcardsActive?: boolean;
		}
	) {
		return this.create('rules', open, onClose, gameOptions);
	}

	static statistics(open: boolean, onClose: () => void) {
		return this.create('statistics', open, onClose);
	}

	// === VS MODE MODALS ===
	static vsMode(
		open: boolean,
		onClose: () => void,
		onSelect: (mode: string, ...args: any[]) => void,
		options?: {
			isSearching?: boolean;
			session?: any;
			signIn?: () => void;
		}
	) {
		return this.create('vs-mode', open, onClose, {
			onSelect,
			...options,
		});
	}

	static vsRoom(
		open: boolean,
		onClose: () => void,
		onCreateRoom: (code: string) => void,
		onJoinRoom: (code: string) => void,
		options?: {
			isJoining?: boolean;
		}
	) {
		return this.create('vs-room', open, onClose, {
			onCreateRoom,
			onJoinRoom,
			...options,
		});
	}

	// === COMMERCE MODALS ===
	static purchase(
		open: boolean,
		onClose: () => void,
		item: any,
		onPurchase: (item: any) => Promise<void>,
		user: any
	) {
		return this.create('purchase', open, onClose, {
			item,
			onPurchase,
			user,
		});
	}

	static signIn(
		open: boolean,
		onClose: () => void,
		onSignIn: () => void
	) {
		return this.create('sign-in', open, onClose, {
			onConfirm: onSignIn,
		});
	}

	// === FORM MODALS ===
	static form(
		open: boolean,
		onClose: () => void,
		title: string,
		onSubmit: () => void,
		onCancel?: () => void,
		submitText?: string
	) {
		return this.create('form', open, onClose, {
			title,
			onSubmit,
			onCancel: onCancel || onClose,
			submitText,
		});
	}

	// === CUSTOM MODALS ===
	static customPuzzle(
		open: boolean,
		onClose: () => void,
		children?: React.ReactNode
	) {
		return this.create('custom-puzzle', open, onClose, {
			children,
		});
	}

	static shareContent(
		open: boolean,
		onClose: () => void,
		children?: React.ReactNode
	) {
		return this.create('share-content', open, onClose, {
			children,
		});
	}

	// === QUICK PRESETS ===
	static deleteConfirmation(
		open: boolean,
		onConfirm: () => void,
		onCancel?: () => void
	) {
		return this.confirmation(
			open,
			onCancel || (() => {}),
			'Delete Item',
			'Are you sure you want to delete this item? This action cannot be undone.',
			onConfirm,
			onCancel
		);
	}

	static saveConfirmation(
		open: boolean,
		onConfirm: () => void,
		onCancel?: () => void
	) {
		return this.confirmation(
			open,
			onCancel || (() => {}),
			'Save Changes',
			'Do you want to save your changes before leaving?',
			onConfirm,
			onCancel
		);
	}

	static errorAlert(
		open: boolean,
		onClose: () => void,
		message: string
	) {
		return this.alert(open, onClose, 'Error', message);
	}

	static successAlert(
		open: boolean,
		onClose: () => void,
		message: string
	) {
		return this.alert(open, onClose, 'Success', message);
	}

	static warningAlert(
		open: boolean,
		onClose: () => void,
		message: string
	) {
		return this.alert(open, onClose, 'Warning', message);
	}
}

/**
 * Hook-based modal manager for React components
 */
export function useModal() {
	const [modals, setModals] = useState<
		Record<
			string,
			{ open: boolean; element: React.ReactElement }
		>
	>({});

	const open = (
		id: string,
		modalElement: React.ReactElement
	) => {
		setModals((prev) => ({
			...prev,
			[id]: { open: true, element: modalElement },
		}));
	};

	const close = (id: string) => {
		setModals((prev) => ({
			...prev,
			[id]: { ...prev[id], open: false },
		}));
	};

	const closeAll = () => {
		setModals({});
	};

	const isOpen = (id: string) => modals[id]?.open || false;

	// Quick helper methods
	const showConfirmation = (
		id: string,
		title: string,
		message: string,
		onConfirm: () => void
	) => {
		const modal = SimpleModalFactory.confirmation(
			true,
			() => close(id),
			title,
			message,
			() => {
				onConfirm();
				close(id);
			}
		);
		open(id, modal);
	};

	const showAlert = (
		id: string,
		title: string,
		message: string
	) => {
		const modal = SimpleModalFactory.alert(
			true,
			() => close(id),
			title,
			message
		);
		open(id, modal);
	};

	return {
		modals: Object.values(modals).map(
			(m: any) => m.element
		),
		open,
		close,
		closeAll,
		isOpen,
		showConfirmation,
		showAlert,
	};
}

export default SimpleModalFactory;
