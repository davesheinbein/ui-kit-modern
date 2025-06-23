import React, {
	forwardRef,
	memo,
	useRef,
	useEffect,
	useCallback,
	useId,
} from 'react';
import {
	MediaKind,
	MediaConfiguration,
	MediaAction,
	MediaMetadata,
	getMediaConfig,
} from './configurations';
import { useSelector, useDispatch } from 'react-redux';
import {
	setMediaState,
	cleanupComponent,
	selectMediaState,
} from '../../store/slices/uiSlice';
import type { RootState } from '../../store';
import { Button } from '../Button';
import styles from './Media.module.scss';

export interface UnifiedMediaProps {
	kind: MediaKind;
	componentId?: string; // For Redux state identification
	children?: React.ReactNode;
	className?: string;

	// Media source
	src?: string;
	sources?: { src: string; type: string; media?: string }[];

	// Content overrides
	alt?: string;
	title?: string;
	description?: string;
	placeholder?: string;
	fallbackIcon?: React.ReactNode;

	// Behavior overrides
	lazy?: boolean;
	autoPlay?: boolean;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
	clickable?: boolean;
	draggable?: boolean;

	// Interaction overrides
	actions?: MediaAction[];
	metadata?: MediaMetadata;
	showOverlay?: boolean;
	showMetadata?: boolean;
	showActions?: boolean;

	// Styling overrides
	variant?: MediaConfiguration['variant'];
	size?: MediaConfiguration['size'];
	shape?: MediaConfiguration['shape'];
	fit?: MediaConfiguration['fit'];
	aspectRatio?: string;
	maxWidth?: string;
	maxHeight?: string;
	borderRadius?: string;

	// Events
	onClick?: () => void;
	onLoad?: () => void;
	onError?: () => void;
	onPlay?: () => void;
	onPause?: () => void;
	onEnded?: () => void;
}

const UnifiedMedia = forwardRef<
	HTMLDivElement,
	UnifiedMediaProps
>(
	(
		{
			kind,
			componentId,
			children,
			className = '',
			src,
			sources,
			alt,
			title,
			description,
			placeholder,
			fallbackIcon,
			lazy,
			autoPlay,
			controls,
			muted,
			loop,
			clickable,
			draggable,
			actions,
			metadata,
			showOverlay,
			showMetadata,
			showActions,
			variant,
			size,
			shape,
			fit,
			aspectRatio,
			maxWidth,
			maxHeight,
			borderRadius,
			onClick,
			onLoad,
			onError,
			onPlay,
			onPause,
			onEnded,
			...rest
		},
		ref
	) => {
		const config = getMediaConfig(kind);

		// Generate unique component ID for Redux state isolation
		const uniqueId = useId();
		const mediaComponentId =
			componentId || `media-${uniqueId}`;

		// Redux state management
		const dispatch = useDispatch();

		// Initialize component state on mount
		useEffect(() => {
			dispatch(
				setMediaState({
					mediaId: mediaComponentId,
					updates: {
						isLoading: false,
						hasError: false,
						isPlaying: false,
						hasLoaded: false,
					},
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupComponent(mediaComponentId));
			};
		}, [dispatch, mediaComponentId]);

		// Get state from Redux
		const mediaState = useSelector(
			selectMediaState(mediaComponentId)
		);

		const imageError = mediaState?.hasError || false;
		const imageLoaded = mediaState?.hasLoaded || false;

		const mediaRef = useRef<
			HTMLImageElement | HTMLVideoElement | HTMLAudioElement
		>(null);

		// Merge configuration with props
		const finalConfig = {
			...config,
			alt: alt ?? config.alt,
			placeholder: placeholder ?? config.placeholder,
			fallbackIcon: fallbackIcon ?? config.fallbackIcon,
			lazy: lazy ?? config.lazy,
			autoPlay: autoPlay ?? config.autoPlay,
			controls: controls ?? config.controls,
			muted: muted ?? config.muted,
			loop: loop ?? config.loop,
			clickable: clickable ?? config.clickable,
			draggable: draggable ?? config.draggable,
			actions: actions ?? config.actions,
			showOverlay: showOverlay ?? config.showOverlay,
			showMetadata: showMetadata ?? config.showMetadata,
			showActions: showActions ?? config.showActions,
			variant: variant ?? config.variant,
			size: size ?? config.size,
			shape: shape ?? config.shape,
			fit: fit ?? config.fit,
			aspectRatio: aspectRatio ?? config.aspectRatio,
			maxWidth: maxWidth ?? config.maxWidth,
			maxHeight: maxHeight ?? config.maxHeight,
			borderRadius: borderRadius ?? config.borderRadius,
		};

		// Generate class names
		const baseClasses = [
			styles.media,
			styles[`media--${finalConfig.kind}`],
			styles[`media--${finalConfig.variant}`],
			styles[`media--${finalConfig.size}`],
			finalConfig.shape &&
				styles[`media--${finalConfig.shape}`],
			styles[`media--${finalConfig.fit}`],
			finalConfig.clickable && styles['media--clickable'],
			imageLoaded && styles['media--loaded'],
			imageError && styles['media--error'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Handle image load
		const handleImageLoad = () => {
			dispatch(
				setMediaState({
					mediaId: mediaComponentId,
					updates: { hasLoaded: true, hasError: false },
				})
			);
			onLoad?.();
		};

		// Handle image error
		const handleImageError = () => {
			dispatch(
				setMediaState({
					mediaId: mediaComponentId,
					updates: { hasError: true, hasLoaded: false },
				})
			);
			onError?.();
		};

		// Handle click
		const handleClick = () => {
			if (finalConfig.clickable && onClick) {
				onClick();
			}
		};

		// Render avatar types
		const renderAvatar = () => {
			const displaySrc =
				imageError ? finalConfig.placeholder : src;

			return (
				<div className={styles.media__avatar}>
					{displaySrc ?
						<img
							src={displaySrc}
							alt={finalConfig.alt}
							loading={finalConfig.lazy ? 'lazy' : 'eager'}
							draggable={finalConfig.draggable}
							onLoad={handleImageLoad}
							onError={handleImageError}
							className={styles.media__image}
						/>
					:	<div className={styles.media__fallback}>
							{finalConfig.fallbackIcon}
						</div>
					}
				</div>
			);
		};

		// Render image types
		const renderImage = () => {
			const displaySrc =
				imageError ? finalConfig.placeholder : src;

			return (
				<div className={styles.media__image_container}>
					{displaySrc ?
						<img
							ref={
								mediaRef as React.RefObject<HTMLImageElement>
							}
							src={displaySrc}
							alt={finalConfig.alt}
							loading={finalConfig.lazy ? 'lazy' : 'eager'}
							draggable={finalConfig.draggable}
							onLoad={handleImageLoad}
							onError={handleImageError}
							className={styles.media__image}
						/>
					:	<div className={styles.media__fallback}>
							{finalConfig.fallbackIcon || '🖼️'}
						</div>
					}

					{finalConfig.showOverlay && (
						<div className={styles.media__overlay}>
							{title && (
								<div
									className={styles.media__overlay_title}
								>
									{title}
								</div>
							)}
							{description && (
								<div
									className={
										styles.media__overlay_description
									}
								>
									{description}
								</div>
							)}
						</div>
					)}
				</div>
			);
		};

		// Render video types
		const renderVideo = () => (
			<div className={styles.media__video_container}>
				<video
					ref={
						mediaRef as React.RefObject<HTMLVideoElement>
					}
					src={src}
					controls={finalConfig.controls}
					autoPlay={finalConfig.autoPlay}
					muted={finalConfig.muted}
					loop={finalConfig.loop}
					onPlay={onPlay}
					onPause={onPause}
					onEnded={onEnded}
					onLoadedData={handleImageLoad}
					onError={handleImageError}
					className={styles.media__video}
				>
					{sources?.map((source, index) => (
						<source
							key={index}
							src={source.src}
							type={source.type}
							media={source.media}
						/>
					))}
					Your browser does not support the video tag.
				</video>

				{finalConfig.showOverlay &&
					!finalConfig.controls && (
						<div className={styles.media__overlay}>
							<Button
								kind='icon'
								className={styles.media__play_button}
								onClick={() => {
									const video =
										mediaRef.current as HTMLVideoElement;
									if (video) {
										if (video.paused) {
											video.play();
										} else {
											video.pause();
										}
									}
								}}
								aria-label='Play/Pause video'
								icon='▶️'
							/>
						</div>
					)}
			</div>
		);

		// Render audio types
		const renderAudio = () => (
			<div className={styles.media__audio_container}>
				{(kind === 'audio-card' ||
					kind === 'podcast-player') &&
					src && (
						<div className={styles.media__audio_cover}>
							<img
								src={src}
								alt={finalConfig.alt}
								className={styles.media__image}
								onLoad={handleImageLoad}
								onError={handleImageError}
							/>
						</div>
					)}

				<audio
					ref={
						mediaRef as React.RefObject<HTMLAudioElement>
					}
					src={src}
					controls={finalConfig.controls}
					autoPlay={finalConfig.autoPlay}
					muted={finalConfig.muted}
					loop={finalConfig.loop}
					onPlay={onPlay}
					onPause={onPause}
					onEnded={onEnded}
					onLoadedData={handleImageLoad}
					onError={handleImageError}
					className={styles.media__audio}
				>
					{sources?.map((source, index) => (
						<source
							key={index}
							src={source.src}
							type={source.type}
						/>
					))}
					Your browser does not support the audio tag.
				</audio>
			</div>
		);

		// Render content based on media kind
		const renderMediaContent = () => {
			if (kind.includes('avatar')) {
				return renderAvatar();
			} else if (
				kind.includes('video') ||
				kind.includes('stream') ||
				kind.includes('presentation')
			) {
				return renderVideo();
			} else if (
				kind.includes('audio') ||
				kind.includes('podcast') ||
				kind.includes('voice') ||
				kind.includes('waveform')
			) {
				return renderAudio();
			} else {
				return renderImage();
			}
		};

		// Render metadata
		const renderMetadata = () => {
			if (!finalConfig.showMetadata || !metadata)
				return null;

			return (
				<div className={styles.media__metadata}>
					{metadata.title && (
						<div className={styles.media__metadata_title}>
							{metadata.title}
						</div>
					)}
					{metadata.description && (
						<div
							className={styles.media__metadata_description}
						>
							{metadata.description}
						</div>
					)}

					<div className={styles.media__metadata_details}>
						{metadata.author && (
							<span
								className={styles.media__metadata_author}
							>
								{metadata.author}
							</span>
						)}
						{metadata.duration && (
							<span
								className={styles.media__metadata_duration}
							>
								{metadata.duration}
							</span>
						)}
						{metadata.fileSize && (
							<span className={styles.media__metadata_size}>
								{metadata.fileSize}
							</span>
						)}
					</div>

					{metadata.tags && metadata.tags.length > 0 && (
						<div className={styles.media__metadata_tags}>
							{metadata.tags.map((tag, index) => (
								<span
									key={index}
									className={styles.media__metadata_tag}
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			);
		};

		// Render actions
		const renderActions = () => {
			if (
				!finalConfig.showActions ||
				!finalConfig.actions?.length
			)
				return null;

			return (
				<div className={styles.media__actions}>
					{finalConfig.actions.map((action) => (
						<Button
							key={action.id}
							kind={action.variant || 'secondary'}
							onClick={action.onClick}
							disabled={action.disabled}
							className={[
								styles.media__action,
								styles[
									`media__action--${action.variant || 'secondary'}`
								],
							].join(' ')}
							aria-label={action.label}
							icon={action.icon}
						>
							<span className={styles.media__action_label}>
								{action.label}
							</span>
						</Button>
					))}
				</div>
			);
		};

		const containerStyle: React.CSSProperties = {
			aspectRatio: finalConfig.aspectRatio,
			maxWidth: finalConfig.maxWidth,
			maxHeight: finalConfig.maxHeight,
			borderRadius: finalConfig.borderRadius,
		};

		return (
			<div
				ref={ref}
				className={baseClasses}
				style={containerStyle}
				onClick={handleClick}
				role={finalConfig.clickable ? 'button' : undefined}
				tabIndex={finalConfig.clickable ? 0 : undefined}
				{...rest}
			>
				<div className={styles.media__content}>
					{renderMediaContent()}
				</div>

				{renderMetadata()}
				{renderActions()}

				{children && (
					<div className={styles.media__custom}>
						{children}
					</div>
				)}
			</div>
		);
	}
);

UnifiedMedia.displayName = 'UnifiedMedia';
export default memo(UnifiedMedia);
