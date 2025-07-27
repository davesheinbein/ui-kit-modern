import React from 'react';
import styles from './YinYangMirroredBoard.module.scss';

/**
 * Props for YinYangMirroredBoard component.
 * @property zones - Array of zone objects (label, color, id)
 * @property mirrored - Whether the board is mirrored
 * @property className - Optional className for styling
 * @property style - Optional style for wrapper
 * @property zoneRenderer - Optional custom renderer for a zone
 */
export interface YinYangMirroredBoardProps {
	zones?: Array<{
		label: string;
		color: string;
		id: string;
	}>;
	mirrored?: boolean;
	className?: string;
	style?: React.CSSProperties;
	zoneRenderer?: (
		zone: any,
		idx: number
	) => React.ReactNode;
}

const DEFAULT_ZONES = [
	{ label: 'Yin', color: '#22223b', id: 'yin' },
	{ label: 'Yang', color: '#f2e9e4', id: 'yang' },
];

const SVG_SIZE = 320;
const RADIUS = 140;
const DOT_RADIUS = 28;
const DOT_OFFSET = RADIUS / 2;

const YinYangMirroredBoard: React.FC<
	YinYangMirroredBoardProps
> = ({
	zones = DEFAULT_ZONES,
	mirrored = false,
	className = '',
	style = {},
	zoneRenderer,
	...props
}) => {
	// If not exactly 2 zones, fallback to default
	const zoneData =
		zones.length === 2 ? zones : DEFAULT_ZONES;
	const zonesToRender =
		mirrored ? [...zoneData].reverse() : zoneData;

	// Helper to render each zone (Yin/Yang)
	const renderZone = (
		zone: { label: string; color: string; id: string },
		idx: number
	) => {
		// Yin (top) is idx 0, Yang (bottom) is idx 1
		const isYin = idx === 0;
		const centerX = SVG_SIZE / 2;
		const centerY = SVG_SIZE / 2;
		const sweepFlag = isYin ? 0 : 1;
		// Draw half-circle for each zone
		return (
			<path
				key={zone.id}
				d={`M ${centerX} ${centerY - RADIUS} A ${RADIUS} ${RADIUS} 0 1 ${sweepFlag} ${centerX} ${centerY + RADIUS} A ${RADIUS} ${RADIUS} 0 1 ${sweepFlag} ${centerX} ${centerY - RADIUS}`}
				className={styles.yinYangMirroredBoard__zone}
				fill={zone.color}
				stroke='#222'
				strokeWidth={2}
			/>
		);
	};

	const ariaLabel = `Yin Yang Mirrored Board: ${zonesToRender.map((z) => z.label).join(' & ')}`;

	return (
		<div
			className={[styles.yinYangMirroredBoard, className]
				.filter(Boolean)
				.join(' ')}
			style={style}
			role='img'
			aria-label={ariaLabel}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.yinYangMirroredBoard__svg}
				aria-hidden='true'
			>
				{zonesToRender.map((zone, idx) =>
					renderZone(zone, idx)
				)}
				{/* Dots */}
				<g>
					<circle
						cx={SVG_SIZE / 2}
						cy={SVG_SIZE / 2 - DOT_OFFSET}
						r={DOT_RADIUS}
						fill={zonesToRender[1].color}
						aria-label={zonesToRender[1].label + ' dot'}
					/>
					<circle
						cx={SVG_SIZE / 2}
						cy={SVG_SIZE / 2 + DOT_OFFSET}
						r={DOT_RADIUS}
						fill={zonesToRender[0].color}
						aria-label={zonesToRender[0].label + ' dot'}
					/>
				</g>
			</svg>
			{/* Optional zone labels for accessibility */}
			<div className={styles.yinYangMirroredBoard__labels}>
				{zonesToRender.map((zone, idx) => (
					<span
						key={zone.id}
						style={{ color: zone.color, marginRight: 8 }}
					>
						{zone.label}
					</span>
				))}
			</div>
		</div>
	);
};

export default YinYangMirroredBoard;
