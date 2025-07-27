import React, {
	useRef,
	useEffect,
	useState,
	useCallback,
	CSSProperties,
} from 'react';
import './DynamicMinimap.scss';

// =============================
// DynamicMinimap
// A performant, real-time minimap overlay for games
// =============================

// Types
export interface MinimapPlayer {
	id: string;
	x: number; // world X
	y: number; // world Y
	color?: string;
	icon?: React.ReactNode;
}

export interface MinimapLandmark {
	id: string;
	x: number;
	y: number;
	label?: string;
	color?: string;
	icon?: React.ReactNode;
}

export interface DynamicMinimapProps {
	mapWidth: number;
	mapHeight: number;
	players: MinimapPlayer[];
	landmarks?: MinimapLandmark[];
	width?: number; // minimap px
	height?: number; // minimap px
	shape?: 'circle' | 'square';
	showBorder?: boolean;
	showLandmarks?: boolean;
	showPlayers?: boolean;
	className?: string;
	style?: CSSProperties;
	draggable?: boolean;
	resizable?: boolean;
	dockable?: boolean;
	defaultPosition?: { x: number; y: number };
	defaultSize?: { width: number; height: number };
	onMove?: (pos: { x: number; y: number }) => void;
	onResize?: (size: {
		width: number;
		height: number;
	}) => void;
	onDock?: (
		dock: 'left' | 'right' | 'top' | 'bottom'
	) => void;
	onPlayerClick?: (player: MinimapPlayer) => void;
	onLandmarkClick?: (landmark: MinimapLandmark) => void;
	renderPlayer?: (
		player: MinimapPlayer,
		cx: number,
		cy: number
	) => React.ReactNode;
	renderLandmark?: (
		landmark: MinimapLandmark,
		cx: number,
		cy: number
	) => React.ReactNode;
	ariaLabel?: string;
	theme?: 'light' | 'dark' | string;
	children?: React.ReactNode; // Slot-based custom overlays/content
}

// Example: Simulate real-time player movement
export function useSimulatedPlayers(
	count: number,
	mapWidth: number,
	mapHeight: number
): MinimapPlayer[] {
	const [players, setPlayers] = useState<MinimapPlayer[]>(
		() =>
			Array.from({ length: count }, (_, i) => ({
				id: `P${i + 1}`,
				x: Math.random() * mapWidth,
				y: Math.random() * mapHeight,
				color: ['#f87171', '#60a5fa', '#34d399', '#fbbf24'][
					i % 4
				],
			}))
	);
	useEffect(() => {
		let running = true;
		function animate() {
			setPlayers((prev) =>
				prev.map((p) => ({
					...p,
					x:
						(p.x + (Math.random() - 0.5) * 8 + mapWidth) %
						mapWidth,
					y:
						(p.y + (Math.random() - 0.5) * 8 + mapHeight) %
						mapHeight,
				}))
			);
			if (running) requestAnimationFrame(animate);
		}
		animate();
		return () => {
			running = false;
		};
	}, [mapWidth, mapHeight]);
	return players;
}

const DOCK_MARGIN = 16;
const DOCKS = ['left', 'right', 'top', 'bottom'] as const;

type Dock = (typeof DOCKS)[number];

const DynamicMinimap: React.FC<DynamicMinimapProps> = ({
	mapWidth,
	mapHeight,
	players,
	landmarks = [],
	width = 120,
	height = 120,
	shape = 'circle',
	showBorder = true,
	showLandmarks = true,
	showPlayers = true,
	className = '',
	style = {},
	draggable = true,
	resizable = true,
	dockable = true,
	defaultPosition = { x: 32, y: 32 },
	defaultSize,
	onMove,
	onResize,
	onDock,
	onPlayerClick,
	onLandmarkClick,
	renderPlayer,
	renderLandmark,
	ariaLabel = 'Minimap overlay',
	theme = 'light',
	children,
}) => {
	// State for position, size, dock
	const [pos, setPos] = useState<{ x: number; y: number }>(
		defaultPosition
	);
	const [size, setSize] = useState<{
		width: number;
		height: number;
	}>({
		width: defaultSize?.width || width,
		height: defaultSize?.height || height,
	});
	const [dock, setDock] = useState<Dock | null>(null);
	const [dragging, setDragging] = useState(false);
	const [resizing, setResizing] = useState(false);
	const dragOffset = useRef<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const resizeStart = useRef<{
		x: number;
		y: number;
		width: number;
		height: number;
	} | null>(null);
	const minimapRef = useRef<HTMLDivElement>(null);

	// Drag handlers
	const onDragStart = (
		e: React.MouseEvent | React.KeyboardEvent
	) => {
		if (!draggable) return;
		setDragging(true);
		if ('clientX' in e) {
			dragOffset.current = {
				x: e.clientX - pos.x,
				y: e.clientY - pos.y,
			};
		}
		document.body.style.userSelect = 'none';
	};
	const onDrag = useCallback(
		(e: MouseEvent) => {
			if (!dragging) return;
			const x = e.clientX - dragOffset.current.x;
			const y = e.clientY - dragOffset.current.y;
			setPos({ x, y });
			onMove?.({ x, y });
		},
		[dragging, onMove]
	);
	const onDragEnd = useCallback(() => {
		setDragging(false);
		document.body.style.userSelect = '';
		// Dock logic
		if (dockable && minimapRef.current) {
			const { innerWidth, innerHeight } = window;
			const { width, height } = size;
			let newDock: Dock | null = null;
			if (pos.x < DOCK_MARGIN) newDock = 'left';
			else if (pos.x + width > innerWidth - DOCK_MARGIN)
				newDock = 'right';
			else if (pos.y < DOCK_MARGIN) newDock = 'top';
			else if (pos.y + height > innerHeight - DOCK_MARGIN)
				newDock = 'bottom';
			setDock(newDock);
			if (newDock) onDock?.(newDock);
		}
	}, [dockable, pos, size, onDock]);

	// Resize handlers
	const onResizeProp = onResize; // preserve prop
	const handleResizeStart = (e: React.MouseEvent) => {
		if (!resizable) return;
		setResizing(true);
		resizeStart.current = {
			x: e.clientX,
			y: e.clientY,
			width: size.width,
			height: size.height,
		};
		document.body.style.userSelect = 'none';
	};
	const handleResize = useCallback(
		(e: MouseEvent) => {
			if (!resizing || !resizeStart.current) return;
			const dx = e.clientX - resizeStart.current.x;
			const dy = e.clientY - resizeStart.current.y;
			const newWidth = Math.max(
				80,
				resizeStart.current.width + dx
			);
			const newHeight = Math.max(
				80,
				resizeStart.current.height + dy
			);
			setSize({ width: newWidth, height: newHeight });
			onResizeProp?.({
				width: newWidth,
				height: newHeight,
			});
		},
		[resizing, onResizeProp]
	);
	const handleResizeEnd = useCallback(() => {
		setResizing(false);
		document.body.style.userSelect = '';
	}, []);

	// Mouse event listeners for drag/resize
	useEffect(() => {
		if (dragging) {
			window.addEventListener('mousemove', onDrag);
			window.addEventListener('mouseup', onDragEnd);
		} else if (resizing) {
			window.addEventListener('mousemove', handleResize);
			window.addEventListener('mouseup', handleResizeEnd);
		}
		return () => {
			window.removeEventListener('mousemove', onDrag);
			window.removeEventListener('mouseup', onDragEnd);
			window.removeEventListener('mousemove', handleResize);
			window.removeEventListener(
				'mouseup',
				handleResizeEnd
			);
		};
	}, [
		dragging,
		resizing,
		onDrag,
		onDragEnd,
		handleResize,
		handleResizeEnd,
	]);

	// Keyboard accessibility for drag (arrow keys)
	const onKeyDown = (e: React.KeyboardEvent) => {
		if (!draggable) return;
		let moved = false;
		let dx = 0,
			dy = 0;
		switch (e.key) {
			case 'ArrowLeft':
				dx = -10;
				moved = true;
				break;
			case 'ArrowRight':
				dx = 10;
				moved = true;
				break;
			case 'ArrowUp':
				dy = -10;
				moved = true;
				break;
			case 'ArrowDown':
				dy = 10;
				moved = true;
				break;
			default:
				break;
		}
		if (moved) {
			setPos((prev) => {
				const next = { x: prev.x + dx, y: prev.y + dy };
				onMove?.(next);
				return next;
			});
			e.preventDefault();
		}
	};

	// Theming (CSS vars)
	const themeClass = theme ? `minimap-theme-${theme}` : '';

	// Scale world coords to minimap
	const scaleX = size.width / mapWidth;
	const scaleY = size.height / mapHeight;

	// Docked position style
	let dockStyle: CSSProperties = {};
	if (dock) {
		dockStyle = {
			left: dock === 'left' ? DOCK_MARGIN : undefined,
			right: dock === 'right' ? DOCK_MARGIN : undefined,
			top: dock === 'top' ? DOCK_MARGIN : undefined,
			bottom: dock === 'bottom' ? DOCK_MARGIN : undefined,
			position: 'fixed',
			zIndex: 120,
		};
	}

	return (
		<div
			ref={minimapRef}
			className={`minimap-overlay ${shape} ${showBorder ? 'with-border' : ''} ${themeClass} ${className}`}
			style={{
				width: size.width,
				height: size.height,
				left: dock ? undefined : pos.x,
				top: dock ? undefined : pos.y,
				position: dock ? 'fixed' : 'absolute',
				transition:
					dragging || resizing ? 'none' : (
						'box-shadow 0.2s, left 0.2s, top 0.2s, width 0.2s, height 0.2s'
					),
				boxShadow:
					dragging ? '0 4px 24px 0 #0004' : undefined,
				...dockStyle,
				...style,
			}}
			tabIndex={0}
			aria-label={ariaLabel}
			role='region'
			onMouseDown={onDragStart}
			onKeyDown={onKeyDown}
			data-dragging={dragging || undefined}
			data-resizing={resizing || undefined}
			data-docked={dock || undefined}
		>
			<svg
				className='minimap-svg'
				viewBox={`0 0 ${size.width} ${size.height}`}
				width={size.width}
				height={size.height}
				aria-hidden='true'
			>
				{/* Map background */}
				<rect
					x={0}
					y={0}
					width={size.width}
					height={size.height}
					className='minimap-bg'
					rx={shape === 'circle' ? size.width / 2 : 12}
					ry={shape === 'circle' ? size.height / 2 : 12}
				/>
				{/* Landmarks */}
				{showLandmarks &&
					landmarks.map((lm) => {
						const cx = lm.x * scaleX;
						const cy = lm.y * scaleY;
						return renderLandmark ?
								<g
									key={lm.id}
									className='minimap-landmark-group'
									tabIndex={0}
									role='button'
									aria-label={
										lm.label || `Landmark ${lm.id}`
									}
									onClick={() => onLandmarkClick?.(lm)}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ')
											onLandmarkClick?.(lm);
									}}
								>
									{renderLandmark(lm, cx, cy)}
								</g>
							:	<circle
									key={lm.id}
									cx={cx}
									cy={cy}
									r={6}
									fill={lm.color || '#6366f1'}
									className='minimap-landmark'
									tabIndex={0}
									role='button'
									aria-label={
										lm.label || `Landmark ${lm.id}`
									}
									onClick={() => onLandmarkClick?.(lm)}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ')
											onLandmarkClick?.(lm);
									}}
								/>;
					})}
				{/* Players */}
				{showPlayers &&
					players.map((p) => {
						const cx = p.x * scaleX;
						const cy = p.y * scaleY;
						return renderPlayer ?
								<g
									key={p.id}
									className='minimap-player-group'
									tabIndex={0}
									role='button'
									aria-label={`Player ${p.id}`}
									onClick={() => onPlayerClick?.(p)}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ')
											onPlayerClick?.(p);
									}}
								>
									{renderPlayer(p, cx, cy)}
								</g>
							:	<g
									key={p.id}
									className='minimap-player-group'
									tabIndex={0}
									role='button'
									aria-label={`Player ${p.id}`}
									onClick={() => onPlayerClick?.(p)}
									onKeyDown={(e) => {
										if (e.key === 'Enter' || e.key === ' ')
											onPlayerClick?.(p);
									}}
								>
									<circle
										cx={cx}
										cy={cy}
										r={8}
										fill={p.color || '#f87171'}
										className='minimap-player'
										stroke='#fff'
										strokeWidth={2}
									/>
									<text
										x={cx}
										y={cy + 18}
										textAnchor='middle'
										fontSize={12}
										fill='#222'
										className='minimap-player-label'
									>
										{p.id}
									</text>
								</g>;
					})}
			</svg>
			{/* Resize handle */}
			{resizable && (
				<div
					className='minimap-resize-handle'
					tabIndex={0}
					role='slider'
					aria-label='Resize minimap'
					onMouseDown={handleResizeStart}
				/>
			)}
			{/* Slot-based custom overlays/content */}
			{children}
		</div>
	);
};

export default DynamicMinimap;
