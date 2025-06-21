/**
 * ModalFooterFactory - Handles modal footer button rendering
 *
 * This file extracts the footer button rendering logic from UnifiedModal
 * to make it more DRY and maintainable.
 */

import React from 'react';
import {
	ExtendedModalKind,
	ModalConfiguration,
} from './configurations';
import UnifiedButton from '../Button/UnifiedButton';

export interface ModalFooterProps {
	kind: ExtendedModalKind;
	config: ModalConfiguration;

	// Button texts
	finalConfirmText: string;
	finalCancelText: string;
	finalSubmitText: string;

	// Handlers
	onConfirm?: () => void;
	onCancel?: () => void;
	onSubmit?: () => void;
	onClose: () => void;
	signIn?: () => void;

	// Purchase-specific
	handlePurchase?: () => void;

	// VS Room-specific
	handleCreateRoom?: () => void;
	handleJoinRoom?: () => void;

	// States
	loading?: boolean;
	success?: boolean;
}

export const ModalFooterFactory: React.FC<
	ModalFooterProps
> = ({
	kind,
	config,
	finalConfirmText,
	finalCancelText,
	finalSubmitText,
	onConfirm,
	onCancel,
	onSubmit,
	onClose,
	signIn,
	handlePurchase,
	handleCreateRoom,
	handleJoinRoom,
	loading = false,
	success = false,
}) => {
	switch (kind) {
		case 'confirmation':
			return (
				<>
					<UnifiedButton
						kind={
							(config.secondaryButtonKind ||
								'secondary') as any
						}
						onClick={onCancel || onClose}
					>
						{finalCancelText}
					</UnifiedButton>
					<UnifiedButton
						kind={
							(config.primaryButtonKind || 'primary') as any
						}
						onClick={onConfirm}
					>
						{finalConfirmText}
					</UnifiedButton>
				</>
			);

		case 'alert':
			return (
				<UnifiedButton
					kind={
						(config.primaryButtonKind || 'primary') as any
					}
					onClick={onClose}
				>
					OK
				</UnifiedButton>
			);

		case 'form':
			return (
				<>
					<UnifiedButton
						kind={
							(config.secondaryButtonKind ||
								'secondary') as any
						}
						onClick={onClose}
					>
						{finalCancelText}
					</UnifiedButton>
					<UnifiedButton
						kind={
							(config.primaryButtonKind || 'primary') as any
						}
						onClick={onSubmit}
					>
						{finalSubmitText}
					</UnifiedButton>
				</>
			);

		case 'pre-game':
			return (
				<>
					<UnifiedButton
						kind='secondary'
						onClick={onCancel}
					>
						{finalCancelText}
					</UnifiedButton>
					<UnifiedButton kind='primary' onClick={onConfirm}>
						{finalConfirmText}
					</UnifiedButton>
				</>
			);

		case 'end-game':
			return (
				<UnifiedButton kind='primary' onClick={onConfirm}>
					Share
				</UnifiedButton>
			);

		case 'sign-in':
			return (
				<UnifiedButton
					kind='primary'
					onClick={signIn || onConfirm}
				>
					{finalConfirmText}
				</UnifiedButton>
			);

		case 'purchase':
			return (
				<>
					<UnifiedButton kind='secondary' onClick={onClose}>
						Cancel
					</UnifiedButton>
					<UnifiedButton
						kind='primary'
						onClick={handlePurchase}
						disabled={loading || success}
					>
						{loading ?
							'Processing...'
						: success ?
							'Success!'
						:	finalConfirmText}
					</UnifiedButton>
				</>
			);

		case 'vs-room':
			return (
				<>
					<UnifiedButton
						kind='secondary'
						onClick={handleCreateRoom}
					>
						Create Room
					</UnifiedButton>
					<UnifiedButton
						kind='primary'
						onClick={handleJoinRoom}
					>
						Join Room
					</UnifiedButton>
				</>
			);

		case 'custom-puzzle':
			return (
				<>
					<UnifiedButton kind='secondary' onClick={onClose}>
						{finalCancelText}
					</UnifiedButton>
					<UnifiedButton kind='primary' onClick={onConfirm}>
						{finalConfirmText}
					</UnifiedButton>
				</>
			);

		default:
			return null;
	}
};

export default ModalFooterFactory;
