import React, { forwardRef } from 'react';
import { getLayoutStyles } from './WrapperLayout';
import { getSpacingStyles } from './WrapperSpacing';
import { getAppearanceStyles } from './WrapperAppearance';
import { getPositioningStyles } from './WrapperPositioning';
import { getOverflowStyles } from './WrapperOverflow';
import { getTransformStyles } from './WrapperTransform';
import type { WrapperProps } from './types';

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
	({ children, style, className = '', ...props }, ref) => {
		const layoutStyle = getLayoutStyles(props);
		const spacingStyle = getSpacingStyles(props);
		const appearanceStyle = getAppearanceStyles(props);
		const positioningStyle = getPositioningStyles(props);
		const overflowStyle = getOverflowStyles(props);
		const transformStyle = getTransformStyles(props);

		const baseStyle: React.CSSProperties = {
			...layoutStyle,
			...spacingStyle,
			...appearanceStyle,
			...positioningStyle,
			...overflowStyle,
			...transformStyle,
			...style,
		};

		return (
			<div
				ref={ref}
				style={baseStyle}
				className={className}
				{...props}
			>
				{children}
			</div>
		);
	}
);

Wrapper.displayName = 'Wrapper';
export default Wrapper;
