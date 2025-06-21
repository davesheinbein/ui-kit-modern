import React, { useEffect, useState } from 'react';
import Modal, { ModalProps } from '../Modal/Modal';
import UnifiedButton from '../Button/UnifiedButton';
import styles from './UnifiedModal.module.scss';
import {
	ExtendedModalKind,
	ModalConfiguration,
	getModalConfiguration,
	mergeModalConfiguration,
	ModalSize,
	ModalPosition,
	ModalAnimation,
} from './configurations';
import ModalBodyFactory from './ModalBodyFactory';
import ModalFooterFactory from './ModalFooterFactory';

// Re-export for backward compatibility
export type ModalKind = ExtendedModalKind;

export interface UnifiedModalProps
	extends Omit<ModalProps, 'children'> {
	kind: ExtendedModalKind;
	title?: string;
	message?: string;
	children?: React.ReactNode;

	// Button props
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;

	// Form props
	onSubmit?: () => void;
	submitText?: string;

	// Game-specific props
	score?: number;
	attemptsLeft?: number;
	burnBonus?: number;
	win?: boolean;
	finishTime?: string;
	user?: any;
	session?: any;
	signIn?: () => void;

	// VS mode props
	isSearching?: boolean;
	roomCode?: string;
	onCreateRoom?: (code: string) => void;
	onJoinRoom?: (code: string) => void;
	onSelect?: (mode: string, ...args: any[]) => void;

	// Purchase props
	item?: any;
	onPurchase?: (item: any) => Promise<void>;

	// Rules props
	columnCount?: number;
	mode?: string;
	wildcardsActive?: boolean;

	// Statistics props
	dailyCompleted?: boolean;

	// Visual overrides
	size?: ModalSize;
	position?: ModalPosition;
	animation?: ModalAnimation;
	showCloseButton?: boolean;
	showHeader?: boolean;
	showFooter?: boolean;

	// Custom configuration override
	configOverrides?: Partial<ModalConfiguration>;
}

const UnifiedModal: React.FC<UnifiedModalProps> = ({
	kind,
	title,
	message,
	children,
	confirmText,
	cancelText,
	onConfirm,
	onCancel,
	onSubmit,
	submitText,

	// Game-specific props
	score,
	attemptsLeft,
	burnBonus,
	win,
	finishTime,
	user,
	session,
	signIn,

	// VS mode props
	isSearching,
	roomCode: initialRoomCode,
	onCreateRoom,
	onJoinRoom,
	onSelect,

	// Purchase props
	item,
	onPurchase,

	// Rules props
	columnCount = 4,
	mode = 'daily',
	wildcardsActive,

	// Statistics props
	dailyCompleted,

	// Visual overrides
	size: sizeOverride,
	position: positionOverride,
	animation: animationOverride,
	showCloseButton: showCloseButtonOverride,
	showHeader: showHeaderOverride,
	showFooter: showFooterOverride,

	// Configuration overrides
	configOverrides,

	onClose,
	className = '',
	...props
}) => {
	// Get base configuration and apply overrides
	const config = mergeModalConfiguration(kind, {
		...(sizeOverride && { size: sizeOverride }),
		...(positionOverride && { position: positionOverride }),
		...(animationOverride && {
			animation: animationOverride,
		}),
		...(showCloseButtonOverride !== undefined && {
			showCloseButton: showCloseButtonOverride,
		}),
		...(showHeaderOverride !== undefined && {
			showHeader: showHeaderOverride,
		}),
		...(showFooterOverride !== undefined && {
			showFooter: showFooterOverride,
		}),
		...configOverrides,
	});

	// Local state for specific modal types
	const [roomCode, setRoomCode] = useState(
		initialRoomCode || ''
	);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	// Compute final title and message
	const finalTitle = title || config.defaultTitle;
	const finalMessage = message || config.defaultMessage;

	// Compute button texts
	const finalConfirmText =
		confirmText || config.primaryButtonText || 'Confirm';
	const finalCancelText =
		cancelText || config.secondaryButtonText || 'Cancel';
	const finalSubmitText =
		submitText || config.primaryButtonText || 'Submit';

	// Build modal classes
	const modalClasses = [
		styles.unifiedModal,
		styles[`modal-${config.size}`],
		styles[`modal-${config.position}`],
		styles[`modal-${config.animation}`],
		config.className && styles[config.className],
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Render modal header
	const renderHeader = () => {
		if (!config.showHeader) return null;

		return (
			<div
				className={`${styles.modalHeader} ${config.headerClassName || ''}`.trim()}
			>
				{finalTitle && (
					<h2 className={styles.modalTitle}>
						{finalTitle}
					</h2>
				)}
				{config.showCloseButton && (
					<UnifiedButton kind='close' onClick={onClose} />
				)}
			</div>
		);
	};

	// Render modal body based on kind
	const renderBody = () => {
		const bodyClass =
			`${styles.modalBody} ${config.bodyClassName || ''}`.trim();

		if (config.customBody) {
			return (
				<div className={bodyClass}>
					<ModalBodyFactory
						kind={kind}
						score={score}
						attemptsLeft={attemptsLeft}
						burnBonus={burnBonus}
						win={win}
						finishTime={finishTime}
						user={user}
						isSearching={isSearching}
						roomCode={roomCode}
						onSelect={onSelect}
						item={item}
						error={error}
						loading={loading}
						success={success}
						setRoomCode={setRoomCode}
						setError={setError}
					>
						{children}
					</ModalBodyFactory>
				</div>
			);
		}

		return (
			<div className={bodyClass}>
				{finalMessage && (
					<p className={styles.modalMessage}>
						{finalMessage}
					</p>
				)}
				{children}
			</div>
		);
	};

	// Render modal footer
	const renderFooter = () => {
		if (!config.showFooter) return null;

		const footerClass =
			`${styles.modalFooter} ${config.footerClassName || ''}`.trim();

		return (
			<div className={footerClass}>
				{renderFooterButtons()}
			</div>
		);
	};

	// Render footer buttons based on modal kind
	const renderFooterButtons = () => {
		return (
			<ModalFooterFactory
				kind={kind}
				config={config}
				finalConfirmText={finalConfirmText}
				finalCancelText={finalCancelText}
				finalSubmitText={finalSubmitText}
				onConfirm={onConfirm}
				onCancel={onCancel}
				onSubmit={onSubmit}
				onClose={onClose}
				signIn={signIn}
				handlePurchase={handlePurchase}
				handleCreateRoom={handleCreateRoom}
				handleJoinRoom={handleJoinRoom}
				loading={loading}
				success={success}
			/>
		);
	};

	// Handler functions
	const handlePurchase = async () => {
		if (!onPurchase || !item) return;

		setLoading(true);
		setError('');
		try {
			await onPurchase(item);
			setSuccess(true);
			setTimeout(() => onClose(), 1200);
		} catch (e: any) {
			setError(e?.message || 'Purchase failed.');
		} finally {
			setLoading(false);
		}
	};

	const handleCreateRoom = () => {
		const newCode = Math.random()
			.toString(36)
			.substring(2, 8)
			.toUpperCase();
		setRoomCode(newCode);
		onCreateRoom?.(newCode);
	};

	const handleJoinRoom = () => {
		if (!roomCode.trim()) {
			setError('Please enter a room code.');
			return;
		}
		setError('');
		onJoinRoom?.(roomCode.trim());
	};

	// Effect for keyboard handling
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && config.closeOnEscape) {
				onClose();
			}
		};

		if (config.closeOnEscape) {
			document.addEventListener('keydown', handleKeyDown);
			return () =>
				document.removeEventListener(
					'keydown',
					handleKeyDown
				);
		}
	}, [config.closeOnEscape, onClose]);

	// Effect for body scroll prevention
	useEffect(() => {
		if (config.preventScroll) {
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = 'unset';
			};
		}
	}, [config.preventScroll]);

	return (
		<Modal
			onClose={config.closeOnBackdrop ? onClose : () => {}}
			className={modalClasses}
			{...props}
		>
			{renderHeader()}
			{renderBody()}
			{renderFooter()}
		</Modal>
	);
};

export default UnifiedModal;
