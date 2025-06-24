/**
 * ModalFactory - DRY modal factory system
 *
 * This factory provides a simplified API for creating modals using the configuration system,
 * similar to ButtonFactory but for modals.
 */

import React, { useState } from 'react';
import Modal, { ModalProps } from './Modal';
import {
	ExtendedModalKind,
	getModalConfiguration,
} from './configurations';

// Factory function for creating modals
export const ModalFactory: React.FC<ModalProps> = ({
	kind,
	...props
}) => {
	return <Modal kind={kind} {...props} />;
};

ModalFactory.displayName = 'ModalFactory';

// Preset modal components for common use cases
export const ModalPresets = {
	// Basic modals
	Alert: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='alert' {...props} />
	),
	Confirm: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='confirmation' {...props} />
	),
	Form: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='form' {...props} />
	),

	// Game modals
	PreGame: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='pre-game' {...props} />
	),
	EndGame: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='end-game' {...props} />
	),
	Rules: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='rules' {...props} />
	),
	Statistics: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='statistics' {...props} />
	),

	// Commerce modals
	Purchase: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='purchase' {...props} />
	),
	SignIn: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='sign-in' {...props} />
	),

	// VS Mode modals
	VSMode: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='vs-mode' {...props} />
	),
	VSRoom: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='vs-room' {...props} />
	),

	// Utility modals
	Custom: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='custom' {...props} />
	),
	Fullscreen: (props: Omit<ModalProps, 'kind'>) => (
		<M kind='fullscreen' {...props} />
	),
};

// Quick create functions for common modal patterns
export const createModal = {
	alert: (
		message: string,
		title?: string,
		onClose?: () => void
	) => ({
		kind: 'alert' as ExtendedModalKind,
		message,
		title,
		onClose,
		open: true,
	}),

	confirm: (
		message: string,
		onConfirm?: () => void,
		onCancel?: () => void,
		title?: string
	) => ({
		kind: 'confirmation' as ExtendedModalKind,
		message,
		title,
		onConfirm,
		onCancel,
		onClose: onCancel,
		open: true,
	}),

	form: (
		title: string,
		onSubmit?: () => void,
		onCancel?: () => void,
		children?: React.ReactNode
	) => ({
		kind: 'form' as ExtendedModalKind,
		title,
		onSubmit,
		onCancel,
		onClose: onCancel,
		children,
		open: true,
	}),
};

/**
 * SimpleModalFactory - Simplified API for creating modals
 * Provides static methods for common modal creation patterns
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
			Omit<ModalProps, 'kind' | 'open' | 'onClose'>
		> = {}
	): React.ReactElement {
		return (
			<Modal
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
 * Modal workflow builders for common patterns
 */
export const ModalWorkflows = {
	/**
	 * Create predefined modal groups for game flow
	 */
	createGameFlow: (
		open: boolean,
		onClose: () => void,
		onReady: () => void,
		onGoHome: () => void,
		onShare: () => void,
		gameData?: {
			score?: number;
			win?: boolean;
			attemptsLeft?: number;
			burnBonus?: number;
			finishTime?: string;
		}
	) => ({
		preGame: SimpleModalFactory.create(
			'pre-game',
			open,
			onClose,
			{
				onConfirm: onReady,
				onCancel: onGoHome,
			}
		),
		endGame: SimpleModalFactory.create(
			'end-game',
			open,
			onClose,
			{
				onConfirm: onShare,
				...gameData,
			}
		),
		rules: SimpleModalFactory.create(
			'rules',
			open,
			onClose,
			{}
		),
		statistics: SimpleModalFactory.create(
			'statistics',
			open,
			onClose,
			{}
		),
	}),

	/**
	 * Create VS mode modal flow
	 */
	createVSFlow: (
		open: boolean,
		onClose: () => void,
		onSelect: (mode: string, ...args: any[]) => void,
		onCreateRoom: (code: string) => void,
		onJoinRoom: (code: string) => void
	) => ({
		modeSelection: SimpleModalFactory.create(
			'vs-mode',
			open,
			onClose,
			{
				onSelect,
			}
		),
		roomManagement: SimpleModalFactory.create(
			'vs-room',
			open,
			onClose,
			{
				onCreateRoom,
				onJoinRoom,
			}
		),
	}),

	/**
	 * Create commerce modal flow
	 */
	createCommerceFlow: (
		open: boolean,
		onClose: () => void,
		onPurchase: (item: any) => Promise<void>,
		onSignIn: () => void,
		item?: any,
		user?: any
	) => ({
		purchase: SimpleModalFactory.create(
			'purchase',
			open,
			onClose,
			{
				item,
				onPurchase,
				user,
			}
		),
		signIn: SimpleModalFactory.create(
			'sign-in',
			open,
			onClose,
			{
				onConfirm: onSignIn,
			}
		),
	}),
};

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
		const modalElement = SimpleModalFactory.confirmation(
			true,
			() => close(id),
			title,
			message,
			() => {
				onConfirm();
				close(id);
			},
			() => close(id)
		);
		open(id, modalElement);
	};

	const showAlert = (
		id: string,
		title: string,
		message: string
	) => {
		const modalElement = SimpleModalFactory.alert(
			true,
			() => close(id),
			title,
			message
		);
		open(id, modalElement);
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

export default ModalFactory;
