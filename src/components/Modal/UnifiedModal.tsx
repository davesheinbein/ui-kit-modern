import React, { useEffect } from 'react';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	openModal,
	setModalFormField,
	setModalLoading,
	setModalError,
	setModalSuccess,
	selectModalData,
	selectModalLoading,
	selectModalError,
	selectModalSuccess,
} from '../../store/slices/modalSlice';
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

// Re-export for backward compatibility
export type ModalKind = ExtendedModalKind;

export interface UnifiedModalProps
	extends Omit<ModalProps, 'children'> {
	kind: ExtendedModalKind;
	modalId?: string; // For identifying this modal instance in Redux
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
	modalId,
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

	// Generate modalId if not provided
	const finalModalId = modalId || `${kind}-${Date.now()}`;

	// Redux hooks
	const dispatch = useAppDispatch();
	const modalData = useAppSelector((state) =>
		selectModalData(state, finalModalId)
	);
	const loading = useAppSelector((state) =>
		selectModalLoading(state, finalModalId)
	);
	const error = useAppSelector((state) =>
		selectModalError(state, finalModalId)
	);
	const success = useAppSelector((state) =>
		selectModalSuccess(state, finalModalId)
	);

	// Get room code from Redux or use initial value
	const roomCode =
		modalData.roomCode || initialRoomCode || '';

	// Initialize modal state in Redux on mount
	useEffect(() => {
		dispatch(
			openModal({
				id: finalModalId,
				data: { roomCode: initialRoomCode || '' },
			})
		);
	}, [dispatch, finalModalId, initialRoomCode]);

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
					{renderCustomModalBody()}
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

	// Render custom modal body content based on kind
	const renderCustomModalBody = () => {
		switch (kind) {
			case 'end-game':
				return (
					<div className={styles.endGameContent}>
						<h2>{win ? 'You Win!' : 'Game Over'}</h2>
						{score !== undefined && (
							<div className={styles.statRow}>
								<span>Score:</span> <span>{score}</span>
							</div>
						)}
						{attemptsLeft !== undefined && (
							<div className={styles.statRow}>
								<span>Attempts Left:</span>{' '}
								<span>{attemptsLeft}</span>
							</div>
						)}
						{burnBonus !== undefined && (
							<div className={styles.statRow}>
								<span>Burn Bonus:</span>{' '}
								<span>{burnBonus}</span>
							</div>
						)}
						{finishTime && (
							<div className={styles.statRow}>
								<span>Finish Time:</span>{' '}
								<span>{finishTime}</span>
							</div>
						)}
						{children}
					</div>
				);

			case 'statistics':
				const mockStats = {
					completed: 58,
					winPercentage: 78,
					currentStreak: 0,
					maxStreak: 5,
					perfectPuzzles: 20,
				};

				return (
					<div className={styles.statisticsContent}>
						{user && (
							<div className={styles.userInfo}>
								<img
									src={
										user.photoUrl || '/default-avatar.png'
									}
									alt={user.name}
									className={styles.userAvatar}
								/>
								<div>
									<div className={styles.userName}>
										{user.name}
									</div>
									<div className={styles.userEmail}>
										{user.email}
									</div>
								</div>
							</div>
						)}

						<div className={styles.statsGrid}>
							{Object.entries(mockStats).map(
								([key, value]) => (
									<div key={key} className={styles.statRow}>
										<span className={styles.statLabel}>
											{key
												.replace(/([A-Z])/g, ' $1')
												.replace(/^./, (str) =>
													str.toUpperCase()
												)}
										</span>
										<span className={styles.statValue}>
											{value}
											{key.includes('Percentage') ?
												'%'
											:	''}
										</span>
									</div>
								)
							)}
						</div>

						{!user && (
							<div className={styles.guestMessage}>
								Sign in to track your statistics across
								devices
							</div>
						)}

						{children}
					</div>
				);

			case 'purchase':
				return (
					<div className={styles.purchaseContent}>
						{item && (
							<>
								<div className={styles.itemPreview}>
									{item.previewUrl && (
										<img
											src={item.previewUrl}
											alt={item.name}
											className={styles.itemImage}
										/>
									)}
									<h3>{item.label || item.name}</h3>
									{item.description && (
										<p>{item.description}</p>
									)}
								</div>

								<div className={styles.priceSection}>
									<span className={styles.priceLabel}>
										Price:
									</span>
									<span className={styles.priceValue}>
										{item.price} {item.currency || 'coins'}
									</span>
								</div>
							</>
						)}

						{error && (
							<div className={styles.error}>{error}</div>
						)}
						{success && (
							<div className={styles.success}>
								Purchase successful!
							</div>
						)}

						{children}
					</div>
				);

			case 'vs-mode':
				return (
					<div className={styles.vsModeContent}>
						{isSearching ?
							<div className={styles.searchingState}>
								<div className={styles.spinner}></div>
								<p>Searching for opponent...</p>
							</div>
						:	<div className={styles.modeOptions}>
								<button
									onClick={() => onSelect?.('room')}
									className={styles.modeButton}
								>
									Private Room
								</button>
								<button
									onClick={() => onSelect?.('matchmaking')}
									className={styles.modeButton}
								>
									Quick Match
								</button>
								<button
									onClick={() => onSelect?.('bot')}
									className={styles.modeButton}
								>
									VS Bot
								</button>
							</div>
						}
						{children}
					</div>
				);

			case 'vs-room':
				return (
					<div className={styles.vsRoomContent}>
						<div className={styles.roomSection}>
							<label htmlFor='room-code'>Room Code:</label>
							<input
								id='room-code'
								type='text'
								value={roomCode}
								onChange={(e) =>
									dispatch(
										setModalFormField({
											id: finalModalId,
											field: 'roomCode',
											value: e.target.value,
										})
									)
								}
								placeholder='Enter room code'
								className={styles.roomInput}
							/>
							{error && (
								<div className={styles.error}>{error}</div>
							)}
						</div>
						{children}
					</div>
				);

			case 'share-content':
				return <>{children}</>;

			default:
				return <>{children}</>;
		}
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
								(config.primaryButtonKind ||
									'primary') as any
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
								(config.primaryButtonKind ||
									'primary') as any
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
						<UnifiedButton
							kind='primary'
							onClick={onConfirm}
						>
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
						<UnifiedButton
							kind='secondary'
							onClick={onClose}
						>
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
						<UnifiedButton
							kind='secondary'
							onClick={onClose}
						>
							{finalCancelText}
						</UnifiedButton>
						<UnifiedButton
							kind='primary'
							onClick={onConfirm}
						>
							{finalConfirmText}
						</UnifiedButton>
					</>
				);

			default:
				return null;
		}
	};

	// Handler functions
	const handlePurchase = async () => {
		if (!onPurchase || !item) return;

		dispatch(
			setModalLoading({ id: finalModalId, loading: true })
		);
		dispatch(
			setModalError({ id: finalModalId, error: null })
		);
		try {
			await onPurchase(item);
			dispatch(
				setModalSuccess({ id: finalModalId, success: true })
			);
			setTimeout(() => onClose(), 1200);
		} catch (e: any) {
			dispatch(
				setModalError({
					id: finalModalId,
					error: e?.message || 'Purchase failed.',
				})
			);
		} finally {
			dispatch(
				setModalLoading({
					id: finalModalId,
					loading: false,
				})
			);
		}
	};

	const handleCreateRoom = () => {
		const newCode = Math.random()
			.toString(36)
			.substring(2, 8)
			.toUpperCase();
		dispatch(
			setModalFormField({
				id: finalModalId,
				field: 'roomCode',
				value: newCode,
			})
		);
		onCreateRoom?.(newCode);
	};

	const handleJoinRoom = () => {
		if (!roomCode.trim()) {
			dispatch(
				setModalError({
					id: finalModalId,
					error: 'Please enter a room code.',
				})
			);
			return;
		}
		dispatch(
			setModalError({ id: finalModalId, error: null })
		);
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
