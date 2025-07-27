import React, { KeyboardEvent, ReactNode } from 'react';
import { Wrapper } from '../../Wrappers';
import { Button } from '../../Button';
import styles from '../Map.module.scss';

/**
 * Type for built-in control names.
 */
export type BuiltInMapControl =
	| 'zoomIn'
	| 'zoomOut'
	| 'fullscreen'
	| 'geolocate'
	| 'custom';

/**
 * Control configuration for MapControls.
 */
export interface MapControlConfig {
	/**
	 * Unique key for the control.
	 */
	key: string;
	/**
	 * Type of control (built-in or custom).
	 */
	type: BuiltInMapControl | string;
	/**
	 * Optional label for accessibility.
	 */
	label?: string;
	/**
	 * Optional icon or content for the control.
	 */
	icon?: ReactNode;
	/**
	 * Optional custom renderer for the control.
	 */
	render?: (props: MapControlRenderProps) => ReactNode;
	/**
	 * Whether the control is disabled.
	 */
	disabled?: boolean;
	/**
	 * Optional ARIA attributes.
	 */
	aria?: React.AriaAttributes;
	/**
	 * Optional className for the control button.
	 */
	className?: string;
	/**
	 * Optional style for the control button.
	 */
	style?: React.CSSProperties;
}

export interface MapControlRenderProps {
	onClick: () => void;
	disabled?: boolean;
	label?: string;
	icon?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
	aria?: React.AriaAttributes;
}

/**
 * Props for MapControls component.
 */
export interface MapControlsProps {
	/** Current zoom level */
	'currentZoom': number;
	/** Minimum zoom level */
	'minZoom': number;
	/** Maximum zoom level */
	'maxZoom': number;
	/** Callback for zoom in */
	'onZoomIn': () => void;
	/** Callback for zoom out */
	'onZoomOut': () => void;
	/**
	 * Whether to show zoom controls
	 */
	'showZoomControls'?: boolean;
	/**
	 * Array of controls to display (order matters).
	 * If not provided, defaults to zoom controls.
	 */
	'controls'?: MapControlConfig[];
	/**
	 * Called when any control is clicked.
	 * Receives the control key and type.
	 */
	'onControlClick'?: (key: string, type: string) => void;
	/**
	 * Theme for the controls (e.g., 'light', 'dark', 'auto').
	 */
	'theme'?: 'light' | 'dark' | 'auto';
	/**
	 * Optional className for the controls container.
	 */
	'className'?: string;
	/**
	 * Optional style for the controls container.
	 */
	'style'?: React.CSSProperties;
	/**
	 * ARIA label for the controls group.
	 */
	'aria-label'?: string;
}

/**
 * MapControls: Modern, configurable, accessible map controls bar.
 */
const MapControls: React.FC<MapControlsProps> = ({
	currentZoom,
	minZoom,
	maxZoom,
	onZoomIn,
	onZoomOut,
	showZoomControls = true,
	controls,
	onControlClick,
	theme = 'auto',
	className = '',
	style,
	'aria-label': ariaLabel = 'Map controls',
}) => {
	// Default controls if none provided
	const defaultControls: MapControlConfig[] = [
		{
			key: 'zoomIn',
			type: 'zoomIn',
			label: 'Zoom in',
			icon: '+',
			disabled: currentZoom >= maxZoom,
		},
		{
			key: 'zoomOut',
			type: 'zoomOut',
			label: 'Zoom out',
			icon: '−',
			disabled: currentZoom <= minZoom,
		},
	];
	const controlsToRender =
		!showZoomControls ? []
		: controls && controls.length > 0 ? controls
		: defaultControls;

	// Handler for control click
	const handleControlClick = (
		control: MapControlConfig
	) => {
		if (control.disabled) return;
		if (onControlClick)
			onControlClick(control.key, control.type);
		if (control.type === 'zoomIn') onZoomIn();
		if (control.type === 'zoomOut') onZoomOut();
		// Add more built-in control handlers as needed
	};

	// Keyboard navigation: Enter/Space triggers control
	const handleKeyDown = (
		e: KeyboardEvent<HTMLButtonElement>,
		control: MapControlConfig
	) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleControlClick(control);
		}
	};

	return (
		<Wrapper
			className={[
				styles.map__controls,
				styles[`map__controls--theme-${theme}`],
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={style}
			role='group'
			aria-label={ariaLabel}
			tabIndex={0}
		>
			{controlsToRender.map((control) => {
				if (control.render) {
					// Custom renderer
					return (
						<React.Fragment key={control.key}>
							{control.render({
								onClick: () => handleControlClick(control),
								disabled: control.disabled,
								label: control.label,
								icon: control.icon,
								className: control.className,
								style: control.style,
								aria: control.aria,
							})}
						</React.Fragment>
					);
				}
				// Default button
				return (
					<Button
						key={control.key}
						kind='secondary'
						className={[
							styles.map__control_button,
							control.className,
						]
							.filter(Boolean)
							.join(' ')}
						style={control.style}
						onClick={() => handleControlClick(control)}
						onKeyDown={(e) => handleKeyDown(e, control)}
						disabled={control.disabled}
						aria-label={control.label}
						aria-disabled={control.disabled}
						tabIndex={0}
						{...(control.aria || {})}
					>
						{control.icon || control.label}
					</Button>
				);
			})}
		</Wrapper>
	);
};

export default MapControls;
