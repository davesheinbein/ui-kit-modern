/**
 * ModalFactory - DRY modal factory system
 *
 * This factory provides a simplified API for creating modals using the configuration system,
 * similar to ButtonFactory but for modals.
 */

import React from 'react';
import UnifiedModal, {
	UnifiedModalProps,
} from './UnifiedModal';
import {
	ExtendedModalKind,
	getModalConfiguration,
} from './ModalConfigurations';

// Factory function for creating modals
export const ModalFactory: React.FC<UnifiedModalProps> = ({
	kind,
	...props
}) => {
	return <UnifiedModal kind={kind} {...props} />;
};

ModalFactory.displayName = 'ModalFactory';

// Short alias for convenience
export const M = ModalFactory;

// Preset modal components for common use cases
export const ModalPresets = {
	// Basic modals
	Alert: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='alert' {...props} />
	),
	Confirm: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='confirmation' {...props} />
	),
	Form: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='form' {...props} />
	),

	// Game modals
	PreGame: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='pre-game' {...props} />
	),
	EndGame: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='end-game' {...props} />
	),
	Rules: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='rules' {...props} />
	),
	Statistics: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='statistics' {...props} />
	),

	// Commerce modals
	Purchase: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='purchase' {...props} />
	),
	SignIn: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='sign-in' {...props} />
	),

	// VS Mode modals
	VSMode: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='vs-mode' {...props} />
	),
	VSRoom: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='vs-room' {...props} />
	),

	// Utility modals
	Custom: (props: Omit<UnifiedModalProps, 'kind'>) => (
		<M kind='custom' {...props} />
	),
	Fullscreen: (props: Omit<UnifiedModalProps, 'kind'>) => (
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

export default ModalFactory;
