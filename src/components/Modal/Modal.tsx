import React, { useEffect } from 'react';
import styles from './Modal.module.scss';
import { Wrapper } from '../Wrappers';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	openModal,
	setModalForms,
	setModalLoading,
	setModalError,
	setModalSuccess,
	selectModalData,
	selectModalLoading,
	selectModalError,
	selectModalSuccess,
} from '../../store/slices/modalSlice';
import {
	ExtendedModalKind,
	ModalConfiguration,
	getModalConfiguration,
	mergeModalConfiguration,
	ModalSize,
	ModalPosition,
	ModalAnimation,
} from './configurations';
import Button from '../Button/Button';
import { Input } from '../components/Inputs';

export type ModalKind = ExtendedModalKind;

export interface ModalProps {
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

	onClose: () => void;
	className?: string;
	contentClassName?: string;
	open?: boolean;
}

const Modal: React.FC<ModalProps> = ({
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
	contentClassName = '',
	open = true,
	...props
}) => {
	if (!open) return null;

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
		modalData?.roomCode || initialRoomCode || '';

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
		styles.Modal,
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
			<Wrapper
				className={`${styles.modalHeader} ${config.headerClassName || ''}`.trim()}
			>
				{finalTitle && (
					<h2 className={styles.modalTitle}>
						{finalTitle}
					</h2>
				)}
				{config.showCloseButton && (
					<Button kind='close' onClick={onClose} />
				)}
			</Wrapper>
		);
	};

	// Render modal body based on kind
	const renderBody = () => {
		const bodyClass =
			`${styles.modalBody} ${config.bodyClassName || ''}`.trim();

		if (config.customBody) {
			return (
				<Wrapper className={bodyClass}>
					{renderCustomModalBody()}
				</Wrapper>
			);
		}

		return (
			<Wrapper className={bodyClass}>
				{finalMessage && (
					<p className={styles.modalMessage}>
						{finalMessage}
					</p>
				)}
				{children}
			</Wrapper>
		);
	};

	// Render custom modal body content based on kind
	const renderCustomModalBody = () => {
		switch (kind) {
			case 'end-game':
				return (
					<Wrapper className={styles.endGameContent}>
						<h2>{win ? 'You Win!' : 'Game Over'}</h2>
						{score !== undefined && (
							<Wrapper className={styles.statRow}>
								<span>Score:</span> <span>{score}</span>
							</Wrapper>
						)}
						{attemptsLeft !== undefined && (
							<Wrapper className={styles.statRow}>
								<span>Attempts Left:</span>{' '}
								<span>{attemptsLeft}</span>
							</Wrapper>
						)}
						{burnBonus !== undefined && (
							<Wrapper className={styles.statRow}>
								<span>Burn Bonus:</span>{' '}
								<span>{burnBonus}</span>
							</Wrapper>
						)}
						{finishTime && (
							<Wrapper className={styles.statRow}>
								<span>Finish Time:</span>{' '}
								<span>{finishTime}</span>
							</Wrapper>
						)}
						{children}
					</Wrapper>
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
					<Wrapper className={styles.statisticsContent}>
						{user && (
							<Wrapper className={styles.userInfo}>
								<img
									src={
										user.photoUrl || '/default-avatar.png'
									}
									alt={user.name}
									className={styles.userAvatar}
								/>
								<Wrapper>
									<Wrapper className={styles.userName}>
										{user.name}
									</Wrapper>
									<Wrapper className={styles.userEmail}>
										{user.email}
									</Wrapper>
								</Wrapper>
							</Wrapper>
						)}

						<Wrapper className={styles.statsGrid}>
							{Object.entries(mockStats).map(
								([key, value]) => (
									<Wrapper
										key={key}
										className={styles.statRow}
									>
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
									</Wrapper>
								)
							)}
						</Wrapper>

						{!user && (
							<Wrapper className={styles.guestMessage}>
								Sign in to track your statistics across
								devices
							</Wrapper>
						)}

						{children}
					</Wrapper>
				);

			case 'purchase':
				return (
					<Wrapper className={styles.purchaseContent}>
						{item && (
							<>
								<Wrapper className={styles.itemPreview}>
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
								</Wrapper>

								<Wrapper className={styles.priceSection}>
									<span className={styles.priceLabel}>
										Price:
									</span>
									<span className={styles.priceValue}>
										{item.price} {item.currency || 'coins'}
									</span>
								</Wrapper>
							</>
						)}

						{error && (
							<Wrapper className={styles.error}>
								{error}
							</Wrapper>
						)}
						{success && (
							<Wrapper className={styles.success}>
								Purchase successful!
							</Wrapper>
						)}

						{children}
					</Wrapper>
				);

			case 'vs-mode':
				return (
					<Wrapper className={styles.vsModeContent}>
						{isSearching ?
							<Wrapper className={styles.searchingState}>
								<Wrapper
									className={styles.spinner}
								></Wrapper>
								<p>Searching for opponent...</p>
							</Wrapper>
						:	<Wrapper className={styles.modeOptions}>
								<Button
									kind='secondary'
									onClick={() => onSelect?.('room')}
									className={styles.modeButton}
								>
									Private Room
								</Button>
								<Button
									kind='secondary'
									onClick={() => onSelect?.('matchmaking')}
									className={styles.modeButton}
								>
									Quick Match
								</Button>
								<Button
									kind='secondary'
									onClick={() => onSelect?.('bot')}
									className={styles.modeButton}
								>
									VS Bot
								</Button>
							</Wrapper>
						}
						{children}
					</Wrapper>
				);

			case 'vs-room':
				return (
					<Wrapper className={styles.vsRoomContent}>
						<Wrapper className={styles.roomSection}>
							<label htmlFor='room-code'>Room Code:</label>
							<Input
								id='room-code'
								kind='text'
								value={roomCode}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) =>
									dispatch(
										setModalForms({
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
								<Wrapper className={styles.error}>
									{error}
								</Wrapper>
							)}
						</Wrapper>
						{children}
					</Wrapper>
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
			<Wrapper className={footerClass}>
				{renderFooterButtons()}
			</Wrapper>
		);
	};

	// Render footer buttons based on modal kind
	const renderFooterButtons = () => {
		switch (kind) {
			case 'confirmation':
				return (
					<>
						<Button
							kind={
								(config.secondaryButtonKind ||
									'secondary') as any
							}
							onClick={onCancel || onClose}
						>
							{finalCancelText}
						</Button>
						<Button
							kind={
								(config.primaryButtonKind ||
									'primary') as any
							}
							onClick={onConfirm}
						>
							{finalConfirmText}
						</Button>
					</>
				);

			case 'alert':
				return (
					<Button
						kind={
							(config.primaryButtonKind || 'primary') as any
						}
						onClick={onClose}
					>
						OK
					</Button>
				);

			case 'form':
				return (
					<>
						<Button
							kind={
								(config.secondaryButtonKind ||
									'secondary') as any
							}
							onClick={onClose}
						>
							{finalCancelText}
						</Button>
						<Button
							kind={
								(config.primaryButtonKind ||
									'primary') as any
							}
							onClick={onSubmit}
						>
							{finalSubmitText}
						</Button>
					</>
				);

			case 'pre-game':
				return (
					<>
						<Button kind='secondary' onClick={onCancel}>
							{finalCancelText}
						</Button>
						<Button kind='primary' onClick={onConfirm}>
							{finalConfirmText}
						</Button>
					</>
				);

			case 'end-game':
				return (
					<Button kind='primary' onClick={onConfirm}>
						Share
					</Button>
				);

			case 'sign-in':
				return (
					<Button
						kind='primary'
						onClick={signIn || onConfirm}
					>
						{finalConfirmText}
					</Button>
				);

			case 'purchase':
				return (
					<>
						<Button kind='secondary' onClick={onClose}>
							Cancel
						</Button>
						<Button
							kind='primary'
							onClick={handlePurchase}
							disabled={loading || success}
						>
							{loading ?
								'Processing...'
							: success ?
								'Success!'
							:	finalConfirmText}
						</Button>
					</>
				);

			case 'vs-room':
				return (
					<>
						<Button
							kind='secondary'
							onClick={handleCreateRoom}
						>
							Create Room
						</Button>
						<Button kind='primary' onClick={handleJoinRoom}>
							Join Room
						</Button>
					</>
				);

			case 'custom-puzzle':
				return (
					<>
						<Button kind='secondary' onClick={onClose}>
							{finalCancelText}
						</Button>
						<Button kind='primary' onClick={onConfirm}>
							{finalConfirmText}
						</Button>
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
			setModalForms({
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
		<Wrapper
			className={`${styles.modalOverlay} ${modalClasses}`.trim()}
			onClick={onClose}
		>
			<Wrapper
				className={`${styles.modalContent} ${contentClassName}`.trim()}
				onClick={(e: React.MouseEvent) =>
					e.stopPropagation()
				}
			>
				{renderHeader()}
				{renderBody()}
				{renderFooter()}
			</Wrapper>
		</Wrapper>
	);
};

export default Modal;
