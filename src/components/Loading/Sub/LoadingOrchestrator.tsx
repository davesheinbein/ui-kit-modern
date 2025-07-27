import React from 'react';
import type { LoadingProps } from './types';
import Spinner from './Spinner';
import Dots from './Dots';
import Bar from './Bar';
import Skeleton from './Skeleton';
import Pulse from './Pulse';
import Wave from './Wave';
import Ring from './Ring';
import Bounce from './Bounce';
import DualRing from './DualRing';
import Ellipsis from './Ellipsis';
import Grid from './Grid';
import CustomSVG from './CustomSVG';
import LoadingMessage from './LoadingMessage';
import styles from '../Loading.module.scss';

const LoadingOrchestrator: React.FC<LoadingProps> = ({
	kind = 'spinner',
	size = 'md',
	color,
	message,
	className = '',
	animationSpeed,
	count,
	direction,
	shape,
	thickness,
	backgroundColor,
	customLoader,
	svg,
	'aria-busy': ariaBusy = true,
	'aria-label': ariaLabel = 'Loading',
	role = 'status',
	...rest
}) => {
	let loader: React.ReactNode = null;
	switch (kind) {
		case 'spinner':
			loader = (
				<Spinner
					color={color}
					size={size}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'dots':
			loader = (
				<Dots
					color={color}
					count={count}
					animationSpeed={animationSpeed}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'bar':
			loader = (
				<Bar
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'skeleton':
			loader = (
				<Skeleton
					shape={shape}
					backgroundColor={backgroundColor}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'pulse':
			loader = (
				<Pulse
					color={color}
					size={size}
					animationSpeed={animationSpeed}
					shape={shape}
					backgroundColor={backgroundColor}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'wave':
			loader = (
				<Wave
					color={color}
					count={count}
					animationSpeed={animationSpeed}
					direction={direction}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'ring':
			loader = (
				<Ring
					color={color}
					size={size}
					thickness={thickness}
					animationSpeed={animationSpeed}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'bounce':
			loader = (
				<Bounce
					color={color}
					count={count}
					animationSpeed={animationSpeed}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'dualRing':
			loader = (
				<DualRing
					color={color}
					size={size}
					thickness={thickness}
					animationSpeed={animationSpeed}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'ellipsis':
			loader = (
				<Ellipsis
					color={color}
					count={count}
					animationSpeed={animationSpeed}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'grid':
			loader = (
				<Grid
					color={color}
					count={count}
					animationSpeed={animationSpeed}
					backgroundColor={backgroundColor}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'customSVG':
			loader = (
				<CustomSVG
					svg={svg}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
			break;
		case 'custom':
			loader = customLoader || null;
			break;
		default:
			loader = (
				<Spinner
					color={color}
					size={size}
					aria-busy={ariaBusy}
					aria-label={ariaLabel}
					role={role}
					{...rest}
				/>
			);
	}

	return (
		<div
			className={
				styles.loadingRoot +
				(className ? ' ' + className : '')
			}
			aria-busy={ariaBusy}
			aria-label={ariaLabel}
			role={role}
			{...rest}
		>
			{loader}
			{message && <LoadingMessage message={message} />}
		</div>
	);
};

export default LoadingOrchestrator;
