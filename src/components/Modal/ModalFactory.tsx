/**
 * Modal Factory - DRY modal creation with presets and utilities
 *
 * Provides factory methods and presets for creating modals with minimal code.
 * Similar to ButtonFactory but for modals.
 */

import React from 'react';
import UnifiedModal, {
	UnifiedModalProps,
} from './UnifiedModal';
import {
	ExtendedModalKind,
	getModalConfiguration,
} from './configurations';

/**
 * Modal Factory Class - Main factory for creating modals
 */
export class ModalFactory {
	/**
	 * Create a modal with the specified kind and props
	 */
	static create(
		kind: ExtendedModalKind,
		props: Omit<UnifiedModalProps, 'kind'>
	): React.ReactElement {
		return <UnifiedModal kind={kind} {...props} />;
	}

	/**
	 * Create predefined modal groups for common use cases
	 */
	static createGameFlow(
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
	) {
		return {
			preGame: this.create('pre-game', {
				open,
				onClose,
				onConfirm: onReady,
				onCancel: onGoHome,
			}),
			endGame: this.create('end-game', {
				open,
				onClose,
				onConfirm: onShare,
				...gameData,
			}),
			rules: this.create('rules', { open, onClose }),
			statistics: this.create('statistics', {
				open,
				onClose,
			}),
		};
	}

	/**
	 * Create VS mode modals
	 */
	static createVSFlow(
		open: boolean,
		onClose: () => void,
		onSelect: (mode: string, ...args: any[]) => void,
		onCreateRoom: (code: string) => void,
		onJoinRoom: (code: string) => void
	) {
		return {
			modeSelection: this.create('vs-mode', {
				open,
				onClose,
				onSelect,
			}),
			roomManagement: this.create('vs-room', {
				open,
				onClose,
				onCreateRoom,
				onJoinRoom,
			}),
		};
	}

	/**
	 * Create commerce modals
	 */
	static createCommerceFlow(
		open: boolean,
		onClose: () => void,
		onPurchase: (item: any) => Promise<void>,
		onSignIn: () => void,
		item?: any,
		user?: any
	) {
		return {
			purchase: this.create('purchase', {
				open,
				onClose,
				item,
				onPurchase,
				user,
			}),
			signIn: this.create('sign-in', {
				open,
				onClose,
				onConfirm: onSignIn,
			}),
		};
	}

	/**
	 * Create basic interaction modals
	 */
	static createInteractions(
		open: boolean,
		onClose: () => void,
		onConfirm: () => void,
		onCancel: () => void,
		onSubmit?: () => void
	) {
		return {
			confirm: this.create('confirmation', {
				open,
				onClose,
				onConfirm,
				onCancel,
			}),
			alert: this.create('alert', {
				open,
				onClose,
				onConfirm,
			}),
			form: this.create('form', {
				open,
				onClose,
				onSubmit: onSubmit || onConfirm,
				onCancel,
			}),
		};
	}
}

/**
 * Modal Presets - Pre-configured modals for common scenarios
 */
export const ModalPresets = {
	// === CONFIRMATION DIALOGS ===
	deleteConfirmation: (
		open: boolean,
		onConfirm: () => void,
		onCancel: () => void
	) =>
		ModalFactory.create('confirmation', {
			open,
			onClose: onCancel,
			title: 'Delete Item',
			message:
				'Are you sure you want to delete this item? This action cannot be undone.',
			confirmText: 'Delete',
			cancelText: 'Cancel',
			onConfirm,
			onCancel,
		}),

	saveConfirmation: (
		onConfirm: () => void,
		onCancel: () => void
	) =>
		ModalFactory.create('confirmation', {
			title: 'Save Changes',
			message:
				'Do you want to save your changes before leaving?',
			confirmText: 'Save',
			cancelText: 'Discard',
			onConfirm,
			onCancel,
		}),

	// === ALERTS ===
	errorAlert: (message: string, onClose: () => void) =>
		ModalFactory.create('alert', {
			title: 'Error',
			message,
			onClose,
		}),

	successAlert: (message: string, onClose: () => void) =>
		ModalFactory.create('alert', {
			title: 'Success',
			message,
			onClose,
		}),

	warningAlert: (message: string, onClose: () => void) =>
		ModalFactory.create('alert', {
			title: 'Warning',
			message,
			onClose,
		}),

	// === GAME MODALS ===
	gameReady: (onReady: () => void, onGoHome: () => void) =>
		ModalFactory.create('pre-game', {
			onConfirm: onReady,
			onCancel: onGoHome,
		}),

	gameComplete: (
		gameData: {
			score: number;
			win: boolean;
			attemptsLeft: number;
			burnBonus: number;
			finishTime?: string;
		},
		onShare: () => void
	) =>
		ModalFactory.create('end-game', {
			...gameData,
			onConfirm: onShare,
		}),

	gameRules: (
		gameOptions: {
			columnCount?: number;
			mode?: string;
			wildcardsActive?: boolean;
		},
		onClose: () => void
	) =>
		ModalFactory.create('rules', {
			...gameOptions,
			onClose,
		}),

	// === FORMS ===
	loginForm: (onSubmit: () => void, onCancel: () => void) =>
		ModalFactory.create('form', {
			title: 'Sign In',
			onSubmit,
			onCancel,
		}),

	settingsForm: (
		onSubmit: () => void,
		onCancel: () => void
	) =>
		ModalFactory.create('form', {
			title: 'Settings',
			submitText: 'Save Settings',
			onSubmit,
			onCancel,
		}),

	// === VS MODE ===
	vsMode: (
		onSelect: (mode: string) => void,
		onClose: () => void
	) =>
		ModalFactory.create('vs-mode', {
			onSelect,
			onClose,
		}),

	vsRoom: (
		onCreateRoom: (code: string) => void,
		onJoinRoom: (code: string) => void,
		onClose: () => void
	) =>
		ModalFactory.create('vs-room', {
			onCreateRoom,
			onJoinRoom,
			onClose,
		}),

	// === COMMERCE ===
	purchaseItem: (
		item: any,
		onPurchase: (item: any) => Promise<void>,
		onClose: () => void,
		user?: any
	) =>
		ModalFactory.create('purchase', {
			item,
			onPurchase,
			onClose,
			user,
		}),

	requireSignIn: (
		onSignIn: () => void,
		onClose: () => void
	) =>
		ModalFactory.create('sign-in', {
			onConfirm: onSignIn,
			onClose,
		}),
};

/**
 * Ultra-short alias for quick modal creation
 */
export const M = ModalFactory;

/**
 * Builder pattern for modal creation
 */
export class ModalBuilder {
	private config: Partial<UnifiedModalProps> = {};

	constructor(private kind: ExtendedModalKind) {
		this.config.kind = kind;
	}

	title(title: string): this {
		this.config.title = title;
		return this;
	}

	message(message: string): this {
		this.config.message = message;
		return this;
	}

	size(size: UnifiedModalProps['size']): this {
		this.config.size = size;
		return this;
	}

	onConfirm(handler: () => void): this {
		this.config.onConfirm = handler;
		return this;
	}

	onCancel(handler: () => void): this {
		this.config.onCancel = handler;
		return this;
	}

	onClose(handler: () => void): this {
		this.config.onClose = handler;
		return this;
	}

	children(children: React.ReactNode): this {
		this.config.children = children;
		return this;
	}

	props(props: Partial<UnifiedModalProps>): this {
		Object.assign(this.config, props);
		return this;
	}

	build(): React.ReactElement {
		return (
			<UnifiedModal
				{...(this.config as UnifiedModalProps)}
			/>
		);
	}
}

/**
 * Create a modal builder
 */
export const createModalBuilder = (
	kind: ExtendedModalKind
): ModalBuilder => {
	return new ModalBuilder(kind);
};

/**
 * Modal component groups for rendering multiple related modals
 */
export const ModalGroups = {
	gameFlow: (handlers: {
		onReady: () => void;
		onGoHome: () => void;
		onShare: () => void;
		onCloseRules: () => void;
		onCloseStats: () => void;
	}) => [
		ModalPresets.gameReady(
			handlers.onReady,
			handlers.onGoHome
		),
		ModalPresets.gameRules({}, handlers.onCloseRules),
		ModalFactory.create('statistics', {
			onClose: handlers.onCloseStats,
		}),
	],

	vsFlow: (handlers: {
		onSelectMode: (mode: string) => void;
		onCreateRoom: (code: string) => void;
		onJoinRoom: (code: string) => void;
		onClose: () => void;
	}) => [
		ModalPresets.vsMode(
			handlers.onSelectMode,
			handlers.onClose
		),
		ModalPresets.vsRoom(
			handlers.onCreateRoom,
			handlers.onJoinRoom,
			handlers.onClose
		),
	],

	commerceFlow: (
		handlers: {
			onPurchase: (item: any) => Promise<void>;
			onSignIn: () => void;
			onClose: () => void;
		},
		item?: any,
		user?: any
	) => [
		ModalPresets.purchaseItem(
			item,
			handlers.onPurchase,
			handlers.onClose,
			user
		),
		ModalPresets.requireSignIn(
			handlers.onSignIn,
			handlers.onClose
		),
	],
};

export default ModalFactory;
